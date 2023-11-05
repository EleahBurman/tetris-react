//component imports
import Menu from "./Menu"

const Game = ({ rows, columns}) => {
  const start = () =>  {console.log("start")}
  return (
    <div className="Game">
      <Menu onClick={start} />
      rows {rows}, columns {columns}
    </div>
  )
}

export default Game