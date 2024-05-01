import Link from 'next/link'
import Image from 'next/image'
import { mouse_memoirs } from '../ui/fonts'
import styles from './page.module.scss'
import CategoriesList from '../ui/Categories/CategoriesList'

export default function Page(){
  return(
    <>
      <header className={styles.header}>
        <Link className={styles.back} href='../'>
          <div className={styles.image}>
            <Image priority src='/assets/images/icon-back.svg' layout='fill' objectFit='contain' alt="back"/>
          </div>
        </Link>
        <h1 className={`${styles.title} ${mouse_memoirs.className} antialised`}>Pick a Category</h1>
      </header>  
      <main className={styles.main}>
        <CategoriesList />
      </main>  
    </>
  )
}