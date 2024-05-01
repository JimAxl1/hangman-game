'use client'

import Image from "next/image"
import { useAppSelector } from "@/app/redux/hooks"
import { mouse_memoirs } from '@/app/ui/fonts'
import { useState } from "react"
import Menu from "../Menu/Menu"
import styles from './Header.module.scss'

export default function Header({ lifeBar }){
  const [pause, setPause] = useState(false)
  const category = useAppSelector((state) => state.categoryReducer)

  return(
    <header className={styles.header}>
      <span className={styles.menu}>
        <button className={styles.pause} onClick={() => setPause(true)}>
          <div className={styles.image}>
            <Image priority src='/assets/images/icon-menu.svg' alt='Menu' layout='fill' objectFit='contain' />
          </div>
        </button>
        <p className={`${styles.category} ${mouse_memoirs.className} antialised`}>{category}</p>          
      </span>
      <span className={styles.health}>
        <div className={styles.bgprogress}>
          <div className={styles.progressBar} style={{ width: `${lifeBar / 0.08}%` }}></div>
        </div>
        <div className={styles.image}>
          <Image priority src='/assets/images/icon-heart.svg' layout='fill' objectFit='contain' alt='heart' />
        </div>
      </span>
      {pause && <Menu text='Paused' close={() => setPause(false)} />}
    </header>
  )
}