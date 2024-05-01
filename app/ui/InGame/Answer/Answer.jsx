import Card from "../Card/Card"
import styles from './Answer.module.scss'

export default function Answer({ game, chars, lifeBar }){
  const arrayGame = game.split(' ')

  return(
    <div className={styles.container}>
      {arrayGame.map((item, index) => {
        const word = item.split('')
        return (
          <div key={index} className={styles.containerWord}>
            {word.map((itemAnswer, index) => {
              const discovered = chars.find(function(item){
                return item === itemAnswer
              })
              return <Card key={index} letter={itemAnswer} discovered={discovered} lifeBar={lifeBar} />
            })              
            }
          </div>
        )
      })}
    </div>
  )
}    