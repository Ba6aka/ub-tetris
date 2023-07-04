import { board } from './board.js'
import { state } from './model/state.js'
import { runSimulation } from './controller/run.js'
import { keyDownHendler } from './key-down-hendler.js'

board.render(state)

runSimulation()

onkeydown = (e) => keyDownHendler(e)
