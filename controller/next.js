export { getNextActiveShape }

function getNextActiveShape() {
  const shapeCode = rnd(shapes.length)

  state.active = {
    shapeCode,
    y: 0,
    x: (columnCount / 2 - shapes[shapeCode][0][0].length / 2) | 0,
    variant: rnd(shapes[shapeCode].length),
    coords: [],
  }
}

import { shapes } from "../model/shapes.js"
import { rnd } from '../helpers.js'
import { columnCount } from "../config.js"
import { state } from "../model/state.js"
