import React from 'react'
//import css
import "./Tetris.css"
//import components
import Board from './Board'

//import hooks
import { useBoard } from '../hooks/useBoard'

const Tetris = ({rows, columns, setGameOver }) => {
  const [board, setBoard] = useBoard({rows, columns})

  return (
    <div>
      <Board board={board}/>
    </div>
  )
}

export default Tetris