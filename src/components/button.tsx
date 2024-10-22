"use client"

import Image, { ImageProps } from "next/image";
import React from "react";

export const ImageButton = (
    props: {
        image: any,
        width: number,
        height: number,
        alt: string,
        className?: string
    }
) => {
    return (
        <button
            className={`bg-primary ${props.className || ""}`}
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