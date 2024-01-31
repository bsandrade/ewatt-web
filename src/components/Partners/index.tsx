import React from  'react';
import styles from './styles.module.css';
import Image from 'next/image';

export const Partners = (): JSX.Element => {
    return (
        <div id="partners" className={styles.contentPartners}>
            <p className={styles.title}>PARCEIROS</p>
            <div className={styles.partnersArea}>
                <div className={styles.partner}>
                    BS Andrade
                </div>
                <div className={styles.partner}>
                    Lojas Vesty
                </div>
                <div className={styles.partner}>
                    Iury Transportes
                </div>
                <div className={styles.partner}>
                    Lojas São José
                </div>
                <div className={styles.partner}>
                    Lojas D&apos;Laine
                </div>
                <div className={styles.partner}>
                    Ativos Contabilidade
                </div>
                <div className={styles.partner}>
                    Dias Rosa Coworking
                </div>
                <div className={styles.partner}>
                    WA T.I.
                </div>
            </div>
        </div>
    );
}