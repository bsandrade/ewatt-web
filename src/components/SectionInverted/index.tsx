import React from "react";
import styles from './styles.module.css';
import Image from "next/image";

type SectionProps = {
    image: string;
    imageAlt: string;
    type: string;
    title: string;
    description: string;
}

export const SectionInverted = ({ 
    description,
    image,
    imageAlt,
    title,
    type
}: SectionProps): JSX.Element => {
    return (
        <div className={styles.containerSection}>
            <div className={styles.imageAreaResponsive}>
                <Image
                    className={styles.imageSection}
                    src={image}
                    alt={imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className={styles.titleArea}>
                <p className={styles.type}>{type}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.imageArea}>
                <Image
                    className={styles.imageSection}
                    src={image}
                    alt={imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
}