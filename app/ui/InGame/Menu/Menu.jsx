import Link from "next/link"
import { mouse_memoirs } from "../../fonts"
import styles from './Menu.module.scss'

export default function Menu({ text, close }){
  return(
    <div className={styles.modal}>
      <article className={styles.modal_content}>
        <p className={`${styles.title} ${mouse_memoirs.className} antialised`}>{text}</p>
        <section className={styles.container}>
          <button className={`${styles.button} ${mouse_memoirs.className} antialised`} onClick={close}>
            {text === 'Paused' ? 'CONTINUE' : 'PLAY AGAIN'}
          </button>
          <Link className={`${styles.button} ${mouse_memoirs.className} antialised`} href='../../Categories'>NEW CATEGORY</Link>
          <Link className={`${styles.quit} ${mouse_memoirs.className} antialised`} href='../../../'>QUIT GAME</Link>
        </section>
      </article>      
    </div>
  )
}