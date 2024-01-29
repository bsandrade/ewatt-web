import React from "react";
import styles from './styles.module.css';

export const Footer = (): JSX.Element => {
    return (
        <div className={styles.contentFooter}>
            <p className={styles.title}>UMA PROPOSTA n SOLUTIONS</p>
            <div className={styles.footerInfo}>
                <div className={styles.footerSegment}>
                    <p className={styles.footerTitle}>Localização</p>
                    <p className={styles.footerDescription}>Rua Lagarto, 376. Centro, Aracaju/SE 49.010-390</p>
                </div>
                <div className={styles.footerSegment}>
                    <p className={styles.footerTitle}>Nos Siga nas Redes</p>
                    <p className={styles.footerDescription}>Aguarde...</p>
                </div>
                <div className={styles.footerSegment}>
                    <p className={styles.footerTitle}>Sobre nós</p>
                    <p className={styles.footerDescription}>Uma empresa comprometida a tornar a sustentabilidade acesspivel a todos.</p>
                </div>
            </div>
                <p className={styles.footerNote}>© 2024 nSolutions. Todos os direitos reservados</p>
        </div>
    );
}