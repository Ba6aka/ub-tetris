export { canMove }

function canMove(direction) {
  const [dx, dy] = shifts[direction]
  const { shapeCode, variant, x, y } = state.active
  const desiredCoords = shapes[shapeCode][variant].flatMap((row, i) => row.map((cell, j) => {
    return cell && { x: x + j + dx, y: y + i + dy }
  })).filter(Boolean)

  return desiredCoords.every(({ x, y }) => state.inert[y]?.[x] === 0)
}

import { state } from "../model/state.js"
import { shifts } from "../model/shifts.js"
import { shapes } from "../model/shapes.js"
