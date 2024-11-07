"use client"

import Image, { ImageProps } from "next/image";
import React from "react";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    image: any,
    width: number,
    height: number,
    alt: string,
    className?: string
};

export const ImageButton = (
    props: buttonProps
) => {
    return (
        <button
            className={`${props.className || ""}`}
            style={{
                background: "var(--Linear-100, linear-gradient(274deg, #4B6DAA 0%, #86B0D4 124.45%))"
            }}
            onClick={props.onClick}
        >
            <Image
                src={props.image}
                alt={props.alt}
                width={props.width}
                height={props.height}
            />
        </button>
    )
}