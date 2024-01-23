import React from "react";
import styles from './styles.module.css';

export const TitleArea = (): JSX.Element => {
    return (
        <div className={styles.containerTitle}>
            <p className={styles.title}>Título chamativo legal!</p>
            <p className={styles.description}>descrição legal descrição legal descrição legal descrição legal descrição legal descrição legal descrição legal descrição legal</p>
        </div>
    )
}