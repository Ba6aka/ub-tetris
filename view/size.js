export { updateCanvasSize }

function updateCanvasSize() {
  const cellSize = Math.min(innerHeight / rowCount, innerWidth / columnCount)

  canvas.height = cellSize * rowCount
  canvas.width = cellSize * columnCount

  board.cellSize = cellSize
  board.render()
}

import { canvas } from "./canvas.js"
import { rowCount, columnCount } from "../config.js"
import { board } from "../board.js"
