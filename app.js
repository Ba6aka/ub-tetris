import { board } from './board.js'
import { state } from './model/state.js'
import { runSimulation } from './controller/run.js'
import { handleKeys} from './controller/keys.js'

board.render(state)

runSimulation()

onkeydown = handleKeys
