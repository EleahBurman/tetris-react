//react imports
import React from "react"
import{ useState } from "react"

//utils
import { buildBoard } from "../utils/Board"
export const useBoard = ({ rows, columns }) => {
  const [board, setBoard] = useState([buildBoard({rows, columns})])
  
  return (
      [board]
  )
}
