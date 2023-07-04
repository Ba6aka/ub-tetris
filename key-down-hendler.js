export { keyDownHendler }

function keyDownHendler(e) {
  if (e.code === 'ArrowLeft' && canMove('left')) {
    state.active.x--
  }
  else if (e.code === 'ArrowRight' && canMove('right')) {
    state.active.x++
  }
  else if (e.code === 'ArrowDown' && canMove('down')) {
    state.active.y++
  }
  else if (e.code == 'ArrowUp') {
    rotate()
  }
}

import { rotate } from './controller/rotate.js'
import { canMove } from './controller/can-move.js'
import { state } from './model/state.js'