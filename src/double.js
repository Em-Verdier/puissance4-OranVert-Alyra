import readlineSync from 'readline-sync'
import chalk from 'chalk'
import { victory } from './victory.js'

const yellow = chalk.yellow('O')
const red = chalk.red('X')

let column
//les valeurs du tableau
let grid = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
]

// Les trais horizontaux
const gridLine = () => {
    console.log('  +---+---+---+---+---+---+---+')
}

// Visuel du terminal
export const visu = () => {
    console.log('    1   2   3   4   5   6   7')
    gridLine()
    console.log(
        `6 | ${grid[0][0]} | ${grid[0][1]} | ${grid[0][2]} | ${grid[0][3]} | ${grid[0][4]} | ${grid[0][5]} | ${grid[0][6]} |`
    )
    gridLine()
    console.log(
        `5 | ${grid[1][0]} | ${grid[1][1]} | ${grid[1][2]} | ${grid[1][3]} | ${grid[1][4]} | ${grid[1][5]} | ${grid[1][6]} |`
    )
    gridLine()
    console.log(
        `4 | ${grid[2][0]} | ${grid[2][1]} | ${grid[2][2]} | ${grid[2][3]} | ${grid[2][4]} | ${grid[2][5]} | ${grid[2][6]} |`
    )
    gridLine()
    console.log(
        `3 | ${grid[3][0]} | ${grid[3][1]} | ${grid[3][2]} | ${grid[3][3]} | ${grid[3][4]} | ${grid[3][5]} | ${grid[3][6]} |`
    )
    gridLine()
    console.log(
        `2 | ${grid[4][0]} | ${grid[4][1]} | ${grid[4][2]} | ${grid[4][3]} | ${grid[4][4]} | ${grid[4][5]} | ${grid[4][6]} |`
    )
    gridLine()
    console.log(
        `1 | ${grid[5][0]} | ${grid[5][1]} | ${grid[5][2]} | ${grid[5][3]} | ${grid[5][4]} | ${grid[5][5]} | ${grid[5][6]} |`
    )
    gridLine()
}
// Choix de la colonne pendant le jeu
export const play = () => {
    let player = Number(
        readlineSync.question('selectionner une colonne de 1 à 7: ')
    )

    if (isNaN(player)) {
        console.log('Entrez un nombre en 1 et 7')
    }

    if (player > 7) {
        console.log("il n'y a que 7 colonnes")
    }

    return (column = player - 1)
}

// X ou O en fonction des tours des joueurs
export let rounds = 0
export let pawn

export const round = () => {
    rounds += 1
    return rounds % 2 === 0 ? (pawn = yellow) : (pawn = red)
}

// Faire "tomber" les pions sur la ligne la plus basse possible
export const down = () => {
    for (let i = 5; i >= 0; i -= 1) {
        if (grid[i][column] != ' ') {
        } else {
            grid[i][column] = pawn
            break
        }
    }
}

export const checkHorizontal = () => {
    for (let y = 0; y <= 5; y += 1) {
        let count = 1
        for (let x = 0; x <= 6; x += 1) {
            if (count == 4) {
                victory()
            } else if (grid[y][x] == ' ' || grid[y][x + 1] == ' ') {
                count = 1
            } else if (grid[y][x] == grid[y][x + 1]) {
                count += 1
            } else {
                count = 1
            }
        }
    }
}

export const checkVertical = () => {
    for (let x = 0; x <= 6; x += 1) {
        let count = 1
        for (let y = 0; y <= 5; y += 1) {
            if (count === 3) {
                victory()
            } else if (grid[y][x] != ' ' && grid[y - 1][x] != ' ') {
                if (grid[y][x] == grid[y - 1][x]) {
                    count += 1
                } else {
                    count = 1
                }
            }
        }
    }
}

// Victoire horizontale

// Victoire verticale

// Victoire diagonale droite

// Victoire diagonale gauche
