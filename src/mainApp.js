import readlineSync from 'readline-sync'
import chalk from 'chalk'

import {
    visu,
    checkHorizontal,
    checkVertical,
    round,
    play,
    down,
} from './double.js'

// Affiche le jeu avec l'apparition des O et des X
const game = () => {
    let gameOver = false
    while (!gameOver) {
        visu()
        checkHorizontal()
        checkVertical()
        round()
        play()
        //console.log('tour', rounds)
        //console.log('pion', pawn)
        down()
    }
}
game() // > lance le jeu
