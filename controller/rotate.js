export { rotate }

function rotate() {
  if (state.active.variant === shapes[state.active.shapeCode].length - 1) {
    state.active.variant = -1
  }
  
  state.active.variant++
  project(state.inert, state.active)

  if (!state.active.coords.every(({ x, y }) => state.inert[y][x] === 0 && x <= 9 && x > 0)) {
    state.active.variant--
    project(state.inert, state.active)
  }

}


import { state } from "../model/state.js"
import { project } from "../model/project.js"
import { shapes } from "../model/shapes.js"
