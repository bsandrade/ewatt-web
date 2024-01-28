import React from  'react';
import styles from './styles.module.css';
import Image from 'next/image';

export const Partners = (): JSX.Element => {
    return (
        <div id="partners" className={styles.contentPartners}>
            <p className={styles.title}>PARCEIROS</p>
            <div className={styles.partnersArea}>
                <div className={styles.partner}>
                    <Image
                        className={styles.imagePartner}
                        src='/asset1.jpg'
                        alt='asset1'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className={styles.partner}>
                    <Image
                        className={styles.imagePartner}
                        src='/asset1.jpg'
                        alt='asset1'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className={styles.partner}>
                    <Image
                        className={styles.imagePartner}
                        src='/asset1.jpg'
                        alt='asset1'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className={styles.partner}>
                    <Image
                        className={styles.imagePartner}
                        src='/asset1.jpg'
                        alt='asset1'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className={styles.partner}>
                    <Image
                        className={styles.imagePartner}
                        src='/asset1.jpg'
                        alt='asset1'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className={styles.partner}>
                    <Image
                        className={styles.imagePartner}
                        src='/asset1.jpg'
                        alt='asset1'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className={styles.partner}>
                    <Image
                        className={styles.imagePartner}
                        src='/asset1.jpg'
                        alt='asset1'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className={styles.partner}>
                    <Image
                        className={styles.imagePartner}
                        src='/asset1.jpg'
                        alt='asset1'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    );
}