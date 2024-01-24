import React from "react";
import styles from './styles.module.css';

export const Footer = (): JSX.Element => {
    return (
        <div className={styles.contentFooter}>
            <p className={styles.title}>UMA PROPOSTA nSOLUTIONS</p>
            <div className={styles.footerInfo}>
                <div className={styles.footerSegment}>
                    <p className={styles.footerTitle}>Localização</p>
                    <p className={styles.footerDescription}>Rua Mariano Salmeron, 105. 49082-170, Siqueira Campos</p>
                </div>
                <div className={styles.footerSegment}>
                    <p className={styles.footerTitle}>Nos Siga nas Redes</p>
                    <p className={styles.footerDescription}>Nos siga nas redes sociais</p>
                </div>
                <div className={styles.footerSegment}>
                    <p className={styles.footerTitle}>Sobre nós</p>
                    <p className={styles.footerDescription}>Uma empresa de Sergipe e para Sergipe</p>
                </div>
            </div>
                <p className={styles.footerNote}>© 2024 nSolutions. Todos os direitos reservados</p>
        </div>
    );
}