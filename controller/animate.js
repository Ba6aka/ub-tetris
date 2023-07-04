export { animate }

function animate(time) {
  requestAnimationFrame(animate)

  if (!lastMoveTime) {
    lastMoveTime = time
    return
  }

  const deltaTime = time - lastMoveTime

  if (deltaTime >= moveDelay) {
    const moved = move('down')

    if (!moved) {
      state.inert = project(state.inert, state.active)
      getNextActiveShape()
    }

    lastMoveTime += moveDelay
  }
  board.render(state)
}

let lastMoveTime

import { getNextActiveShape } from './next.js'
import { move } from './move.js'
import { moveDelay } from '../config.js'
import { board } from '../board.js'
import { state } from '../model/state.js'
import { project } from '../model/project.js'
