import React from "react";
import styles from './styles.module.css';
import { InfoItem } from "../InfoItem";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaSun } from "react-icons/fa";

export const InfoPanel = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <InfoItem
                Icon={AiFillThunderbolt}
                title="Energia"
                description="Descrição legal"
            />
            <InfoItem
                Icon={FaSun}
                title="Energia"
                description="Descrição legal"
            />
            <InfoItem
                Icon={AiFillThunderbolt}
                title="Energia"
                description="Descrição legal"
            />
            <InfoItem
                Icon={FaSun}
                title="Energia"
                description="Descrição legal"
            />
            </div>
        </div>
    )
}