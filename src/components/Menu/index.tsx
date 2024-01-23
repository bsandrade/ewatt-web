import React from "react";
import styles from './styles.module.css';

export const Menu = (): JSX.Element => {
    return (
        <div className={styles.container} >
            <div className={styles.menuArea}>
                <a className={styles.menuItem}>Menu 1</a>
                <a className={styles.menuItem}>Menu 2</a>
                <a className={styles.menuItem}>Menu 3</a>
            </div>
        </div>
    );
}