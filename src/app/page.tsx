"use client";
import styles from "./page.module.css";
import { Carousel, InfoPanel, Menu } from "@/components";
export default function Home() {

  return (
    <main className={styles.main}>
      <Menu />
      <div className={styles.carousel} >
        <Carousel />
      </div>
      <InfoPanel />
    </main>
  );
}
