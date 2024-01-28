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
      <div id="title" className={styles.contentArea} >
        <TitleArea />
        <Section
          image="/img1.jpg"
          imageAlt="by Lincoln Electric Systems, Lincoln Nebraska"
          title="Comércio de Energia Sustentável"
          description="Com a nWatt nunca foi tão facil economizar na conta de luz e promover a preservação do meio ambiente! Aqui você vai aproveitar o excedente de energia solar para minimizar os altos custos com eletricidade. Investidores em usinas solares vão aproveitar o potencial de renda do acúmulo de energia gerada não utilizada, e os consumidores podem desfrutar e energia limpa e acessível por um preço excelente!"
          type="Serviços"
        />
        <SectionInverted
          image="/img2.jpg"
          imageAlt="by Alexandre Debiève"
          title="A tecnologia a seu favor"
          description="Os Crétios Solar trazem a simplicidade que você precisava: Aqui você vai saber quanto seu excedente de energia lhe trás de renda extra sem precisar se preocupar com taxas e tarifas, tudo vai estar imbutido no crédito solar. A Inteligência Artificial vai otimizar suas receitas, a evolução de investimentos e a economia e a economia mensal que você vai gerar."
          type="Diferencial"
        />
        <Section
          image="/img3.jpg"
          imageAlt="by Luis Villasmil"
          title="Você faz do seu jeito"
          type="A Plataforma"
          description="Com atendimento personalizado, a nWatt garante facilidade de entendimento e suporte dedicado, priorizando confiabilidade e segurança. Você vai promover a utilização de energia limpa, através da redução das emissões de gases de efeito estufa, bem com a diminuição da demanda por fontes poluentes e não renováveis. Deixa a sua marca no mundo!"
        />
      </div>
      <Partners />
      <Footer />
    </main>
  );
}
