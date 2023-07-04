export { move }

function move(direction) {
  const { active } = state

  switch (direction) {
    case 'left':
      if (!canMove('left')) return false

      active.x--

      return true
    case 'right':
      if (!canMove('right')) return false

      active.x++

      return true
    case 'down':
      if (!canMove('down')) return false

      active.y++

      return true
  }

}

// import { deleteFullRows } from './delete-full-rows.js'
import { canMove } from './can-move.js'
import { state } from "../model/state.js"
import { updateInertCells } from './update-inert.js'
