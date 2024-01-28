import React from "react";
import styles from './styles.module.css';

export const TitleArea = (): JSX.Element => {
    return (
        <div className={styles.containerTitle}>
            <p className={styles.title}>nWatt Energy Commerce</p>
            <p className={styles.description}>A plataforma que você precisava: Seja protagonista dessa comunidade comprometida com a preservação ambiental, o comércio de energia sustentável vai garantir seu futuro.</p>
        </div>
    )
}