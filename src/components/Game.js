//component imports
import Menu from "./Menu"

//custom hooks
import useGameOver from "../hooks/useGameOver"

const Game = ({ rows, columns}) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver()
  const start = () =>  {console.log(`start gameOver is ${gameOver}`)}
  return (
    <div className="Game">
      <Menu onClick={start} />
    </div>
  )
}

export default Game