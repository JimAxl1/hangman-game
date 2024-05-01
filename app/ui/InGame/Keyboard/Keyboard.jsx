import Letter from '../Letters/Letter'
import styles from './Keyboard.module.scss'

export default function Keyboard({ handleClick, change }){
  function getAlphabet() {
    var alphabet = [];
    for (var i = 0; i < 26; i++) {
      alphabet.push(String.fromCharCode(65 + i));
    }
    return alphabet;
  }

  const lettersAlphabet = getAlphabet();

  return(
    <div className={styles.container}>
      {lettersAlphabet.map((item, index) => {
        return <Letter key={index} letter={item} handleClick={handleClick} change={change} />
      })}
    </div>
  )
}