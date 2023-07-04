export { project }

function project(inertRows, { shapeCode, variant, x, y }) {
  const stateRowData = clone(inertRows)
  const shapeData = shapes[shapeCode][variant]

  for (const i in shapeData) {
    const row = shapeData[i]

    for (const j in row) {
      const cell = row[j]

      if (cell) stateRowData[+i + y][+j + x] = cell
    }
  }

  return stateRowData
}

import { clone } from '../helpers.js'
import { shapes } from './shapes.js'