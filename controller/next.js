export { getNextActiveShape }

function getNextActiveShape() {
  const type = rnd(shapes.length)

  state.active = {
    type,
    y: 0,
    x: (columnCount / 2 - shapes[type][0][0].length / 2) | 0,
    variant: rnd(shapes[type].length),
    coords: [],
  }
}

import { shapes } from "../model/shapes.js"
import { rnd } from '../helpers.js'
import { columnCount } from "../config.js"
import { state } from "../model/state.js"
