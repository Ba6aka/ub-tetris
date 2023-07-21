export { handleKeys }

function handleKeys(e) {
  if (e.code.startsWith('Arrow')) {
    const side = e.code.replace('Arrow', '').toLowerCase()
    const shift = shifts[side]

    if (shift) move(side)
    else rotate()
  }
}

import { rotate } from './rotate.js'
import { shifts } from '../model/shifts.js'
import { move } from './move.js'