import {
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { gsap } from "gsap";

const useMedia = (
    queries: string[],
    values: number[],
    defaultValue: number
) => {

    const getValue = () => {

        const index = queries.findIndex((q) =>
            matchMedia(q).matches
        );

        return values[index] ?? defaultValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(() => {

        const handler = () => setValue(getValue);

        queries.forEach((q) =>
            matchMedia(q).addEventListener("change", handler)
        );

        return () => {

            queries.forEach((q) =>
                matchMedia(q).removeEventListener(
                    "change",
                    handler
                )
            );

        };

    }, [queries]);

    return value;
};

const useMeasure = () => {

    const ref = useRef<HTMLDivElement | null>(null);

    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    useLayoutEffect(() => {

        if (!ref.current) return;

        const observer = new ResizeObserver(([entry]) => {

            const { width, height } = entry.contentRect;

            setSize({ width, height });

        });

        observer.observe(ref.current);

        return () => observer.disconnect();

    }, []);

    return [ref, size] as const;
};

const preloadImages = async (urls: string[]) => {

    await Promise.all(

        urls.map(

            (src) =>
                new Promise((resolve) => {

                    const img = new Image();

                    img.src = src;

                    img.onload = img.onerror = () => resolve(true);

                })

        )

    );
};

interface MasonryItem {
    id: string;
    img: string;
    url: string;
    height: number;
}

interface MasonryProps {
    items: MasonryItem[];
    ease?: string;
    duration?: number;
    stagger?: number;
    animateFrom?: string;
    scaleOnHover?: boolean;
    hoverScale?: number;
    blurToFocus?: boolean;
    colorShiftOnHover?: boolean;
}

export default function Masonry({
                                    items,
                                    ease = "power3.out",
                                    duration = 0.6,
                                    stagger = 0.05,
                                    animateFrom = "bottom",
                                    scaleOnHover = true,
                                    hoverScale = 0.97,
                                    blurToFocus = true,
                                    colorShiftOnHover = false,
                                }: MasonryProps) {

    const columns = useMedia(
        [
            "(min-width:1500px)",
            "(min-width:1000px)",
            "(min-width:600px)",
            "(min-width:400px)",
        ],
        [5, 4, 3, 2],
        1
    );

    const [containerRef, { width }] = useMeasure();

    const [imagesReady, setImagesReady] = useState(false);

    useEffect(() => {

        preloadImages(items.map((i) => i.img)).then(() =>
            setImagesReady(true)
        );

    }, [items]);

    const grid = useMemo(() => {

        if (!width) return [];

        const colHeights = new Array(columns).fill(0);

        const gap = 16;

        const totalGaps = (columns - 1) * gap;

        const columnWidth = (width - totalGaps) / columns;

        return items.map((item) => {

            const col = colHeights.indexOf(
                Math.min(...colHeights)
            );

            const x = col * (columnWidth + gap);

            const height = item.height / 2;

            const y = colHeights[col];

            colHeights[col] += height + gap;

            return {
                ...item,
                x,
                y,
                w: columnWidth,
                h: height,
            };

        });

    }, [columns, items, width]);

    const hasMounted = useRef(false);

    useLayoutEffect(() => {

        if (!imagesReady) return;

        grid.forEach((item: any, index) => {

            const selector = `[data-key="${item.id}"]`;

            const animProps = {
                x: item.x,
                y: item.y,
                width: item.w,
                height: item.h,
            };

            if (!hasMounted.current) {

                gsap.fromTo(

                    selector,

                    {
                        opacity: 0,
                        y: item.y + 100,
                        width: item.w,
                        height: item.h,
                        ...(blurToFocus && {
                            filter: "blur(10px)",
                        }),
                    },

                    {
                        opacity: 1,
                        ...animProps,
                        ...(blurToFocus && {
                            filter: "blur(0px)",
                        }),
                        duration: 0.8,
                        ease,
                        delay: index * stagger,
                    }

                );

            } else {

                gsap.to(selector, {
                    ...animProps,
                    duration,
                    ease,
                    overwrite: "auto",
                });

            }

        });

        hasMounted.current = true;

    }, [
        grid,
        imagesReady,
        stagger,
        animateFrom,
        blurToFocus,
        duration,
        ease,
    ]);

    const handleMouseEnter = (
        id: string,
        element: HTMLDivElement
    ) => {

        if (scaleOnHover) {

            gsap.to(`[data-key="${id}"]`, {
                scale: hoverScale,
                duration: 0.3,
                ease: "power2.out",
            });

        }

        if (colorShiftOnHover) {

            const overlay =
                element.querySelector(".color-overlay");

            if (overlay) {

                gsap.to(overlay, {
                    opacity: 0.3,
                    duration: 0.3,
                });

            }

        }

    };

    const handleMouseLeave = (
        id: string,
        element: HTMLDivElement
    ) => {

        if (scaleOnHover) {

            gsap.to(`[data-key="${id}"]`, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });

        }

        if (colorShiftOnHover) {

            const overlay =
                element.querySelector(".color-overlay");

            if (overlay) {

                gsap.to(overlay, {
                    opacity: 0,
                    duration: 0.3,
                });

            }

        }

    };

    return (

        <div
            ref={containerRef}
            className="relative w-full h-full"
        >

            {grid.map((item: any) => (

                <div
                    key={item.id}
                    data-key={item.id}
                    className="absolute box-content cursor-pointer"
                    style={{
                        willChange:
                            "transform, width, height, opacity",
                    }}
                    onClick={() =>
                        window.open(
                            item.url,
                            "_blank",
                            "noopener"
                        )
                    }
                    onMouseEnter={(e) =>
                        handleMouseEnter(
                            item.id,
                            e.currentTarget
                        )
                    }
                    onMouseLeave={(e) =>
                        handleMouseLeave(
                            item.id,
                            e.currentTarget
                        )
                    }
                >

                    <div
                        className="relative w-full h-full bg-cover bg-center rounded-[24px] overflow-hidden border border-white/10"
                        style={{
                            backgroundImage: `url(${item.img})`,
                        }}
                    >

                        {colorShiftOnHover && (

                            <div className="color-overlay absolute inset-0 rounded-[24px] bg-gradient-to-tr from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />

                        )}

                    </div>

                </div>

            ))}

        </div>
    );
}