'use client';

import styles from './Categories.module.scss'
import Link from 'next/link'
import { mouse_memoirs } from '../fonts'
import { useAppDispatch } from '@/app/redux/hooks'
import { selectCategory } from '@/app/redux/features/categorySlice'
import { selectGame } from '@/app/redux/features/gamesSlice';
import { selectTitle } from '@/app/redux/features/titleSlice';

export default function Category({ text, update }){
  const dispatch = useAppDispatch()

  async function handleClick(text){
    dispatch(selectCategory(text))
    dispatch(selectGame(JSON.parse(update.value)))
    const randomIndex = Math.floor(Math.random() * JSON.parse(update.value).length - 1)
    dispatch(selectTitle(JSON.parse(update.value)[randomIndex]))
  }
  
  return (
    <Link className={styles.link} href='/InGame'>
      <button className={`${styles.button} ${mouse_memoirs.className} antialised`} onClick={() => handleClick(text)}>
        {text}
      </button>
    </Link>
  ) 
}