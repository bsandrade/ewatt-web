"use client";
import styles from "./page.module.css";
import { Carousel, Menu } from "@/components";
export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.carousel} >
        <Menu />
        <Carousel />
      </div>
    </main>
  );
}
