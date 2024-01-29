import React from "react";
import styles from './styles.module.css';
import { InfoItem } from "../InfoItem";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiSun } from "react-icons/ci";
import { RiChatSmile2Line } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";

export const InfoPanel = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <InfoItem
                Icon={RiChatSmile2Line}
                title="Simplicidade"
                description="Tudo fica mais fácil com o Crétido Solar"
            />
            <InfoItem
                Icon={AiOutlineThunderbolt}
                title="Eficência"
                description="Uma plataforma otimizada para você"
            />
            <InfoItem
                Icon={CiSun}
                title="Sustentabilidade"
                description="Faça a diferença para o seu ecossistema"
            />
            <InfoItem
                Icon={TbPigMoney}
                title="Economia"
                description="Você conquistando mais do que imagina"
            />
            </div>
        </div>
    )
}