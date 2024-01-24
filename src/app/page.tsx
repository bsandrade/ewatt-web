"use client";
import styles from "./page.module.css";
import { Carousel, InfoPanel, Menu, Section, TitleArea } from "@/components";
export default function Home() {

  return (
    <main className={styles.main}>
      <Menu />
      <div className={styles.carousel} >
        <Carousel />
      </div>
      <InfoPanel />
      <div className={styles.contentArea} >
        <TitleArea />
        <Section
          image="/asset1.jpg"
          imageAlt="test"
          title="Título"
          description="Descrição beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza"
          type="Serviço"
        />
      </div>
    </main>
  );
}
