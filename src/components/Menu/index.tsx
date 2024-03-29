import React from "react";
import styles from './styles.module.css';
import Link from "next/link";

export const Menu = (): JSX.Element => {
    return (
        <div className={styles.container} >
            <div className={styles.menuArea}>
                <Link href="#title" className={styles.menuItem}>Sobre</Link>
                <Link href="#services" className={styles.menuItem}>Serviços</Link>
                <Link href="#partners" className={styles.menuItem}>Parceiros</Link>
            </div>
        </div>
    );
}