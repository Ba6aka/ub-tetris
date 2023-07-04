export { updateInertCells }

function updateInertCells() {
  state.active.coords.forEach(({ x, y, color }) => {
    state.inert[y][x] = color
  }
  )
}

import { state } from "../model/state.js"

