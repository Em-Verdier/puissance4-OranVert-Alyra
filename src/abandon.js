import readlineSync from 'readline-sync'
import chalk from 'chalk'

export const quit = () => {
    let input = false
    while (!input) {
        const input = readlineSync.question('Sofiane> ')
        if (input === 'abandon') {
            input == true
            console.log(chalk.red(`Partie annulée!`))
            process.exit(1)
        } else if (input !== 'abandon') {
            console.log(chalk.red(`Error: focus case sensitive, or wrong key!`))
        }
    }
}

quit()
