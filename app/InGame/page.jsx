'use client'

import Answer from '@/app/ui/InGame/Answer/Answer'
import Header from "@/app/ui/InGame/Header/Header"
import Keyboard from '../ui/InGame/Keyboard/Keyboard'
import Menu from '../ui/InGame/Menu/Menu'
import { useAppSelector, useAppDispatch } from '@/app/redux/hooks'
import { selectGame } from '../redux/features/gamesSlice'
import { selectTitle } from '../redux/features/titleSlice'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Page(){
  const game = useAppSelector((state) => state.titleReducer)
  const allGames = useAppSelector((state) => state.gameReducer)
  const dispatch = useAppDispatch()
  const { replace } = useRouter();

  const [lifeBar, setLifeBar] = useState(8)
  const [selections, setSelections] = useState(game.includes('\'') ? ['\''] : [])
  const [status, setStatus] = useState('none')
  const [activated, setActivated] = useState(true)

  const gameSet = new Set(game.toUpperCase())
  var correctKeys = [...gameSet]
  correctKeys = correctKeys.filter((item) => {
    return item !== ' '
  })

  const handleKey = (key) => {
    if (activated){
      const wordFinded = correctKeys.find(function(item){
        return item === key
      })
      if (wordFinded === undefined){
        lifeBar === 1 && setActivated(false)
        lifeBar === 1 && setTimeout(() => setStatus('lose'), 1500)
        setLifeBar(lifeBar - 1)
      }else{
        const newSelections = [...selections, key]
        setSelections(newSelections)
        newSelections.length === correctKeys.length && setTimeout(() => setStatus('win'), 1500)
        newSelections.length === correctKeys.length && setActivated(false)
      }      
    }
  }

  const changeGame = () => {  
    const newAllGames = allGames.filter((item) => {
      return item !== game
    })
    dispatch(selectGame(newAllGames))
    
    const randomIndex = Math.floor(Math.random() * newAllGames.length)
    const newTitle = newAllGames[randomIndex]

    if (newAllGames.length === 0){
      replace('/Categories');
    }else{
      dispatch(selectTitle(newTitle))
      setSelections(newTitle.includes('\'') ? ['\''] : [])
      setLifeBar(8)
      setStatus('none')
      setActivated(true)      
    }
  }

  return(
    <>
      <Header lifeBar={lifeBar} />
      <main>
        <Answer game={game.toUpperCase()} chars={selections} lifeBar={lifeBar} />
        <Keyboard handleClick={(key) => handleKey(key)} change={game} />
        {status === 'lose' && <Menu text='You Lose' close={() => changeGame()} />}
        {status === 'win' && <Menu text='You Win' close={() => changeGame()} />}
      </main>      
    </>
  )
}