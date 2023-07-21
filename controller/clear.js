export { clearFullRows }

function clearFullRows() {
  state.inert = state.inert.filter(row => !row.every(Boolean))
  state.inert.unshift(...clone(Array(rowCount - state.inert.length).fill(Array(columnCount).fill(0))))
}

import { columnCount, rowCount } from "../config.js"
import { clone } from "../helpers.js"
import { state } from "../model/state.js"