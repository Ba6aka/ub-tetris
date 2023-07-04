export { renderRow }

function renderRow(row, i) {
  row.forEach((cell, j) => {
    if (cell) renderCell({ x: j, y: i }, { colorCode: cell })
  })
}

import { renderCell } from './cell.js'