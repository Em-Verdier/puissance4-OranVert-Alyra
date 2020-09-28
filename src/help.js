import readlineSync from 'readline-sync'
import chalk from 'chalk'
import { showRules } from './rules.js'
import { quit } from './abandon.js'

/* fonction qui va permettre d'afficher l'help pour l'utilisateur à son appel*/

export const displayHelp = () => {
    let helpArray = [
        chalk.green(
            '[A] Sofiane> Put(1) : Mettre un jeton du joueur dans la colonne 1'
        ),
        chalk.yellow('[B] Sofiane> Rules => Affiche la régle du jeu'),
        chalk.red(
            '[C] Sofiane> Whoami => Affiche le jeton correspondant à ce joueur'
        ),
        chalk.bgRedBright('[D] Sofiane> Abandon)'),
    ]
    for (let i = 0; i < helpArray.length; i += 1) {
        console.log(helpArray[i])
    }

    const inputHelpPart = readlineSync.question(
        chalk.italic.bold.underline.cyan('Your choice ?> ')
    )
    const response = () => {
        if (inputHelpPart == 'B') {
            showRules()
        } else if (inputHelpPart == 'C') {
            whoami()
        } else if (inputHelpPart == 'D') {
            quit()
        } else console.log(`Je n'ai pas compris votre demande`)
    }
}

displayHelp()
