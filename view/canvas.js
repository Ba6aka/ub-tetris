export { canvas, ctx }

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

setTimeout(updateCanvasSize)

document.body.append(canvas)

onresize = updateCanvasSize

import { updateCanvasSize } from './size.js'