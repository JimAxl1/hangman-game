import styles from './Letter.module.scss'
import { mouse_memoirs } from '../../fonts'
import { useState, useEffect } from 'react';

export default function Card({ letter, handleClick, change }){
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    setSelected(false)
  }, [change])

  function handleFunction(){
    if (!selected){
      handleClick(letter)
      setSelected(true)      
    }
  }

  return(
    <div className={`${styles.container} ${selected && styles.selected}`} onClick={() => handleFunction()}>
      <p className={`${styles.text} ${mouse_memoirs.className} antialised`}>{letter}</p>
    </div>
  )
}