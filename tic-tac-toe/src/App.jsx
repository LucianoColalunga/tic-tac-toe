import { useState } from "react"

const TURNS = {

  X: '❌',
  O: '🟢',
}
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (

    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
const WINNER_CONBOS =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {

  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const checkWinner = ( boardToCheck) => {
    for (const combo of WINNER_CONBOS){
      const [a,b,c] = combo 
      if (boardToCheck)
        boardToCheck[a] 
    }
  }


  const updateBoard = (index) => {
    if (board[index]) return
    console.log
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }



  return (

    <main className="board">
      <h1>TA TE TI</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>

        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>

      </section>
    </main>


  )
}

export default App
