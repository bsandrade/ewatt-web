import Image from "next/image";
import React from "react";

type CarouselImageProps = {
    src: string;
    alt: string;
}

export const CarouselImage = ({ src, alt }: CarouselImageProps): JSX.Element => {
    return (
        <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
        />
    )
}