import Link from "next/link";
import Image from "next/image";
import styles from './page.module.scss'
import { mouse_memoirs } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image priority src='/assets/images/logo.svg' alt='Logo' layout='fill' objectFit='contain' />
        </div>
        <Link href='/Categories' className={styles.play}>
          <div className={styles.image}>
            <Image priority src='/assets/images/icon-play.svg' alt='Play button' layout='fill' objectFit='contain' />
          </div>
        </Link>
        <div className={styles.containerLink}>
          <Link className={styles.link} href='/Instructions'>
            <p className={`${styles.instructions} ${mouse_memoirs.className} antialised`}>HOW TO PLAY</p>
          </Link>             
        </div>
      </div>
    </main>
  );
}