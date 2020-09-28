import readlineSync from 'readline-sync'
import chalk from 'chalk'

export const rules = [
    chalk.bgBlueBright(`REGLES DU JEU`),
    chalk.redBright(
        ` 42 emplacements pour jetons répartis en 6 lignes et 7 colonnes`
    ),
    chalk.redBright('42 jetons de 2 couleurs différentes'),
    chalk.redBright('Être 2 joueurs'),
    chalk.bgBlueBright(`COMMENT COMMENCER UNE PARTIE DE PUISSANCE 4 ? `),
    chalk.yellowBright(
        `Pour commencer une partie de puissance 4, on désigne le premier joueur. 
        Celui­-ci met un de ses jetons de couleur dans l’une des colonnes de son choix. 
        Le jeton tombe alors en bas de la colonne.`
    ),
    chalk.bgBlueBright(`COMMENT GAGNER UNE PARTIE DE PUISSANCE 4 ? `),
    chalk.yellowBright(
        `Pour gagner une partie de puissance 4,
         il suffit d’être le premier à aligner 4 jetons de sa couleur horizontalement, 
         verticalement et diagonalement.`
    ),
    chalk.greenBright(
        `Si lors d’une partie, tous les jetons sont joués sans qu’il y est d’alignement de jetons, la partie est déclaré nulle.`
    ),
]

export const showRules = () => {
    for (let i = 0; i < rules.length; i += 1) {
        console.log(rules[i])
    }
}

showRules()
