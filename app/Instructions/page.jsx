import Link from "next/link"
import Image from "next/image"
import styles from './page.module.scss'
import { mouse_memoirs } from "@/app/ui/fonts";

export default function Page(){
  return(
    <>
      <header className={styles.header}>
        <Link className={styles.back} href='../'>
          <div className={styles.image}>
            <Image priority src='/assets/images/icon-back.svg' layout='fill' objectFit='contain' alt="back" />
          </div>
        </Link>
        <h1 className={`${styles.title} ${mouse_memoirs.className} antialised`}>How to Play</h1>
      </header>
      <main className={styles.main}>
        <section className={`${styles.container} ${mouse_memoirs.className} antialised`}>
          <p className={styles.number}>01</p>
          <p className={styles.indication}>Choose a category</p>
          <p className={styles.text}>First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</p>
        </section>
        <section className={`${styles.container} ${mouse_memoirs.className} antialised`}>
          <p className={styles.number}>02</p>
          <p className={styles.indication}>Guess letters</p> 
          <p className={styles.text}>Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.</p>
        </section>
        <section className={`${styles.container} ${mouse_memoirs.className} antialised`}>
          <p className={styles.number}>03</p>
          <p className={styles.indication}>Win or lose</p> 
          <p className={styles.text}>You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.</p>
        </section>
      </main>
    </>
  )
}