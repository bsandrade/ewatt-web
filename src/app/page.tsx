"use client";
import styles from "./page.module.css";
import { Carousel, Footer, InfoPanel, Menu, Partners, Section, SectionInverted, TitleArea } from "@/components";
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
        <SectionInverted
          image="/asset1.jpg"
          imageAlt="test"
          title="Título"
          description="Descrição beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza"
          type="Serviço"
        />
        <Section
          image="/asset1.jpg"
          imageAlt="test"
          title="Título"
          description="Descrição beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza beleza"
          type="Serviço"
        />
      </div>
      <Partners />
      <Footer />
    </main>
  );
}
