"use client";
import Image from "next/image";
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
          id="services"
          image="/img1.jpg"
          imageAlt="by Lincoln Electric Systems, Lincoln Nebraska"
          title="Comércio de Energia Sustentável"
          description="Com a ηWatt nunca foi tão facil ter descontos na conta de luz e contribuir para preservação do meio ambiente! Aqui você vai aproveitar o excedente da geração de energia solar para reduzir custos com eletricidade. Investidores de usinas fotovoltaicas aproveitam o potencial de renda do acúmulo de energia gerada que não está sendo utilizada, e os consumidores podem desfrutar de energia elétrica limpa e acessível por um preço excelente!"
          type="Serviços"
        />
        <SectionInverted
          image="/img2.jpg"
          imageAlt="by Alexandre Debiève"
          title="A tecnologia a seu favor"
          description="Os Créditos Solar trazem a simplicidade que você precisava: Aqui você sabe quanto vale o excedente de energia sem precisar se preocupar com taxas e tarifas, tudo vai estar imbutido no crédito solar. A Inteligência Artificial vai otimizar a lucratividade dessa renda extra, a evolução dos investimentos e o quanto de economia mensal que você está gerando, tudo em um único lugar."
          type="Diferencial"
        />
        <Section
          image="/img3.jpg"
          imageAlt="by Luis Villasmil"
          title="Você faz do seu jeito"
          type="A Plataforma"
          description="Com atendimento personalizado, a ηWatt garante atendimento e suporte dedicado, feito sob medida para você, priorizando transparência e segurança. Aqui você promove a utilização de energia limpa através da redução das emissões de gases de efeito estufa, e com a diminuição do uso de fontes energéticas poluentes e não renováveis. Deixe a sua marca no mundo!"
        />
      <div id="ecosystem" className={styles.infoSection}>
        <Image
          className={styles.infoImage}
          src='/section.png'
          alt='Informacoes'
          fill
        />
      </div>
      </div>
      <Partners />
      <div className={styles.logoArea}>
        <Image
          className={styles.logoImage}
          src='/logo.png'
          alt='Informacoes'
          fill
          style={{objectFit: 'scale-down'}}
        />
      </div>
      <Footer />
    </main>
  );
}
