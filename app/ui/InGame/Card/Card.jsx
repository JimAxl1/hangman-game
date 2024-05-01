import styles from './Card.module.scss'
import { mouse_memoirs } from '../../fonts'

export default function Card({ letter, discovered, lifeBar }){
  return(
    <div className={discovered === letter || lifeBar === 0 ? styles.show : styles.hidden}>
      <p className={`${styles.text} ${mouse_memoirs.className} antialised`}>{letter}</p>
    </div>
  )
}