"use client";

import { useEffect, useState } from "react";

interface DecryptedTextProps {
    text: string;
    className?: string;
}

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

export default function DecryptedText({
                                          text,
                                          className = "",
                                      }: DecryptedTextProps) {

    const [displayText, setDisplayText] = useState("");

    useEffect(() => {

        let iteration = 0;

        const interval = setInterval(() => {

            setDisplayText(() =>

                text
                    .split("")
                    .map((letter, index) => {

                        if (index < iteration) {
                            return text[index];
                        }

                        return characters[
                            Math.floor(
                                Math.random() * characters.length
                            )
                            ];

                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 2;

        }, 40);

        return () => clearInterval(interval);

    }, [text]);

    return (
        <span className={className}>
      {displayText}
    </span>
    );
}