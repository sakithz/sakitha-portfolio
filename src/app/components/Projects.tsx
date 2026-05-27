import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Masonry from "./ui/Masonry";

const photographyImages = [
    {
        id: "1",
        img: "/photos/photo1.jpg",
        url: "https://www.instagram.com/p/DYPlnUYGS6m/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        height: 500,
    },

    {
        id: "2",
        img: "/photos/photo2.jpg",
        url: "https://www.instagram.com/sakitha_palliyaguru",
        height: 350,
    },

    {
        id: "3",
        img: "/photos/photo3.jpg",
        url: "https://www.instagram.com/sakitha_palliyaguru",
        height: 600,
    },

    {
        id: "4",
        img: "/photos/photo4.jpg",
        url: "https://www.instagram.com/sakitha_palliyaguru",
        height: 450,
    },

    {
        id: "5",
        img: "/photos/photo5.jpeg",
        url: "https://www.instagram.com/sakitha_palliyaguru",
        height: 520,
    },

    {
        id: "6",
        img: "/photos/photo6.jpg",
        url: "https://www.instagram.com/sakitha_palliyaguru",
        height: 380,
    },
];

const sections = [

    {
        id: 1,
        title: "BRAND VISION",
        category: "Marketing / Branding",
        year: "",
        type: "simple",

        items: [

            {
                name: "Personal Branding",
                description:
                    "Building modern branding concepts and digital identity strategies.",
            },

            {
                name: "Content Strategy",
                description:
                    "Creative social media campaigns and audience engagement concepts.",
            },

            {
                name: "Entrepreneurship",
                description:
                    "Business-oriented thinking and startup brand development ideas.",
            },

        ],
    },

    {
        id: 2,
        title: "PHOTOGRAPHY",
        category: "Creative Portfolio",
        year: "",
        type: "photography",

        items: [

            {
                name: "Black & White Photography",
                description:
                    "Minimal monochrome photography focused on emotion and storytelling.",

                link: "https://www.instagram.com/sakitha_palliyaguru",
            },

            {
                name: "Film Photography",
                description:
                    "Vintage film photography capturing cinematic and nostalgic moments.",

                link: "https://instagram.com/your_film_page",
            },

        ],
    },

    {
        id: 3,
        title: "DEV PROJECTS",
        category: "Software Development",
        year: "",
        type: "development",

        items: [

            {
                year: "2026",

                name: "Vehicle Rental Management System",

                category: "Full Stack · Backend",

                description:
                    "A system designed to manage vehicle rentals efficiently by handling customer registrations, vehicle inventory, driver management, bookings, payments, and return processes through an interactive web interface.",

                tools: [
                    "Spring Boot",
                    "Java",
                    "OOP",
                    "HTML",
                    "CSS",
                    "JavaScript",
                ],

                github:
                    "https://github.com/lowaga2003-code/VehicleRentalWeb",
            },

        ],
    },

];

export function Projects() {

    const [openSection, setOpenSection] =
        useState<number | null>(null);

    const toggleSection = (id: number) => {

        setOpenSection(
            openSection === id ? null : id
        );

    };

    return (

        <section
            id="projects"
            className="py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-black text-white"
        >

            {/* Section Header */}

            <div className="flex items-center gap-4 mb-24">

                <div className="w-16 md:w-24 h-[1px] bg-white"></div>

                <span className="text-sm font-bold uppercase tracking-widest">
                    Featured Work
                </span>

            </div>

            {/* Sections */}

            <div className="flex flex-col">

                {sections.map((section, index) => (

                    <div
                        key={section.id}
                        className="border-b border-white/10 py-10"
                    >

                        {/* Main Header */}

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer group"
                            onClick={() =>
                                toggleSection(section.id)
                            }
                        >

                            <div className="flex items-start gap-6">

                                <span className="text-gray-500 text-sm mt-3 hidden md:block">
                                    0{index + 1}
                                </span>

                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter group-hover:italic transition-all duration-300">
                                    {section.title}
                                </h2>

                            </div>

                            <div className="flex items-center gap-8 mt-6 md:mt-0">

                                <div className="text-right text-sm uppercase tracking-widest text-gray-400">

                                    <p>{section.category}</p>

                                    <p>{section.year}</p>

                                </div>

                                <motion.div
                                    animate={{
                                        rotate:
                                            openSection ===
                                            section.id
                                                ? 180
                                                : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                >

                                    <ChevronDown />

                                </motion.div>

                            </div>

                        </motion.div>

                        {/* Dropdown */}

                        <AnimatePresence>

                            {openSection === section.id && (

                                <motion.div
                                    initial={{
                                        height: 0,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1,
                                    }}
                                    exit={{
                                        height: 0,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    className="overflow-hidden"
                                >

                                    {/* Photography Masonry */}

                                    {section.type ===
                                        "photography" && (

                                            <div className="w-full h-[500px] mt-10 mb-0">

                                                <Masonry
                                                    items={
                                                        photographyImages
                                                    }
                                                    ease="power3.out"
                                                    duration={0.6}
                                                    stagger={0.05}
                                                    animateFrom="bottom"
                                                    scaleOnHover={true}
                                                    hoverScale={
                                                        0.97
                                                    }
                                                    blurToFocus={
                                                        true
                                                    }
                                                    colorShiftOnHover={
                                                        false
                                                    }
                                                />

                                            </div>

                                        )}

                                    {/* Normal Cards */}

                                    {section.type !==
                                        "development" && (

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

                                                {section.items.map(
                                                    (
                                                        item: any,
                                                        i
                                                    ) => (

                                                        <motion.a
                                                            key={
                                                                i
                                                            }
                                                            href={
                                                                item.link ||
                                                                "#"
                                                            }
                                                            target="_blank"
                                                            initial={{
                                                                opacity: 0,
                                                                y: 20,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    i *
                                                                    0.1,
                                                            }}
                                                            className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white hover:text-black transition-all duration-300 flex flex-col justify-between min-h-[250px]"
                                                        >

                                                            <div>

                                                                <h3 className="text-2xl font-semibold mb-4">
                                                                    {
                                                                        item.name
                                                                    }
                                                                </h3>

                                                                <p className="text-sm leading-7 opacity-70">
                                                                    {
                                                                        item.description
                                                                    }
                                                                </p>

                                                            </div>

                                                            {item.link && (

                                                                <div className="flex items-center gap-2 mt-8 uppercase tracking-widest text-sm">

                                                                    Visit
                                                                    Page

                                                                    <ArrowUpRight
                                                                        size={
                                                                            16
                                                                        }
                                                                    />

                                                                </div>

                                                            )}

                                                        </motion.a>

                                                    )
                                                )}

                                            </div>

                                        )}

                                    {/* Development Projects */}

                                    {section.type ===
                                        "development" && (

                                            <div className="flex flex-col gap-8 mt-10">

                                                {section.items.map(
                                                    (
                                                        item: any,
                                                        i
                                                    ) => (

                                                        <motion.div
                                                            key={
                                                                i
                                                            }
                                                            initial={{
                                                                opacity: 0,
                                                                y: 20,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    i *
                                                                    0.1,
                                                            }}
                                                            className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
                                                        >

                                                            <p className="text-sm text-gray-400 mb-2">
                                                                {
                                                                    item.year
                                                                }
                                                            </p>

                                                            <h3 className="text-3xl font-bold mb-2">
                                                                {
                                                                    item.name
                                                                }
                                                            </h3>

                                                            <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
                                                                {
                                                                    item.category
                                                                }
                                                            </p>

                                                            <p className="leading-7 mb-6">
                                                                {
                                                                    item.description
                                                                }
                                                            </p>

                                                            <div className="flex flex-wrap gap-3 mb-6">

                                                                {item.tools.map(
                                                                    (
                                                                        tool: string,
                                                                        index: number
                                                                    ) => (

                                                                        <span
                                                                            key={
                                                                                index
                                                                            }
                                                                            className="border border-white/20 px-4 py-2 rounded-lg text-sm"
                                                                        >

                                                                        {
                                                                            tool
                                                                        }

                                                                    </span>

                                                                    )
                                                                )}

                                                            </div>

                                                            <a
                                                                href={
                                                                    item.github
                                                                }
                                                                target="_blank"
                                                                className="uppercase tracking-widest text-sm hover:underline"
                                                            >
                                                                View
                                                                GitHub
                                                                ↗
                                                            </a>

                                                        </motion.div>

                                                    )
                                                )}

                                            </div>

                                        )}

                                </motion.div>

                            )}

                        </AnimatePresence>

                    </div>

                ))}

            </div>

        </section>
    );
}