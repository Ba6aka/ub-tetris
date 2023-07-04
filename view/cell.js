export { renderCell }

function renderCell({ x, y }, { colorCode }) {
  const { cellSize, ctx } = board
  ctx.fillStyle = colors[colorCode]
  ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
}

import { board } from "../board.js"
import { colors } from "../config.js"