export { rotate }

function rotate() {
  const { active, active: { type, variant, x, y } } = state
  active.variant = (variant + 1) % shapes[type].length

  const desiredCoords = shapes[type][active.variant].flatMap((row, i) => row.map((cell, j) => {
    return cell && { x: x + j, y: y + i }
  })).filter(Boolean)

  if (desiredCoords.every(({ x, y }) => state.inert[y]?.[x] === 0)) return 

  if (move('right') || move('left')) return

  active.variant = variant
}

import { move } from "./move.js"
import { state } from "../model/state.js"
import { shapes } from "../model/shapes.js"