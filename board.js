export { board }

const board = {
  canvas,
  ctx,
  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  },
  render(state = this.lastState) {
    const stateRowData = project(state.inert, state.active)

    this.lastState = state
    this.clear()

    stateRowData.forEach(renderRow)
  }
}

import { renderRow } from './view/row.js'
import { canvas, ctx } from './view/canvas.js'
import { project } from './model/project.js'