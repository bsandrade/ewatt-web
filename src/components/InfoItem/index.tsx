import React from "react";
import styles from './styles.module.css';

type InfoItemProps = {
    Icon: React.ElementType;
    title: string;
    description: string;
}

export const InfoItem = ({ Icon, description, title }: InfoItemProps): JSX.Element => {
    return (
        <div className={styles.containerItem}>
            <Icon
                className={styles.icon}
            />
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}