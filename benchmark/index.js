import ansi from 'ansi-colors'
import chalk from 'chalk'
import cliColor from 'cli-color'
import * as colorette from 'colorette'
import kleur from 'kleur'
import * as kleurColors from 'kleur/colors'
import * as nanocolors from 'nanocolors'
import picocolors from 'picocolors'
import * as yoctocolors from 'yoctocolors'
import picochalk from '../index.js'
import { Bench } from 'tinybench'

const bench = new Bench({ time: 100, warmupTime: 1000 })
let index = 1e8

bench
  .add('yoctocolors', async () => {
    yoctocolors.red('.') +
      yoctocolors.yellow('.') +
      yoctocolors.green('.') +
      yoctocolors.bgRed(yoctocolors.black(' ERROR ')) +
      yoctocolors.red(
        ' Add plugin ' +
          yoctocolors.yellow('name') +
          ' to use time limit with ' +
          yoctocolors.yellow(++index),
      )
  })
  .add('cli-color', async () => {
    cliColor.red('.') +
      cliColor.yellow('.') +
      cliColor.green('.') +
      cliColor.bgRed(cliColor.black(' ERROR ')) +
      cliColor.red(
        ' Add plugin ' +
          cliColor.yellow('name') +
          ' to use time limit with ' +
          cliColor.yellow(++index),
      )
  })
  .add('ansi-colors', async () => {
    ansi.red('.') +
      ansi.yellow('.') +
      ansi.green('.') +
      ansi.bgRed(ansi.black(' ERROR ')) +
      ansi.red(
        ' Add plugin ' +
          ansi.yellow('name') +
          ' to use time limit with ' +
          ansi.yellow(++index),
      )
  })
  .add('chalk', async () => {
    chalk.red('.') +
      chalk.yellow('.') +
      chalk.green('.') +
      chalk.bgRed(chalk.black(' ERROR ')) +
      chalk.red(
        ' Add plugin ' +
          chalk.yellow('name') +
          ' to use time limit with ' +
          chalk.yellow(++index),
      )
  })
  .add('kleur', async () => {
    kleur.red('.') +
      kleur.yellow('.') +
      kleur.green('.') +
      kleur.bgRed(kleur.black(' ERROR ')) +
      kleur.red(
        ' Add plugin ' +
          kleur.yellow('name') +
          ' to use time limit with ' +
          kleur.yellow(++index),
      )
  })
  .add('kleur/colors', async () => {
    kleurColors.red('.') +
      kleurColors.yellow('.') +
      kleurColors.green('.') +
      kleurColors.bgRed(kleurColors.black(' ERROR ')) +
      kleurColors.red(
        ' Add plugin ' +
          kleurColors.yellow('name') +
          ' to use time limit with ' +
          kleurColors.yellow(++index),
      )
  })
  .add('colorette', async () => {
    colorette.red('.') +
      colorette.yellow('.') +
      colorette.green('.') +
      colorette.bgRed(colorette.black(' ERROR ')) +
      colorette.red(
        ' Add plugin ' +
          colorette.yellow('name') +
          ' to use time limit with ' +
          colorette.yellow(++index),
      )
  })
  .add('nanocolors', async () => {
    nanocolors.red('.') +
      nanocolors.yellow('.') +
      nanocolors.green('.') +
      nanocolors.bgRed(nanocolors.black(' ERROR ')) +
      nanocolors.red(
        ' Add plugin ' +
          nanocolors.yellow('name') +
          ' to use time limit with ' +
          nanocolors.yellow(++index),
      )
  })
  .add('picocolors', async () => {
    picocolors.red('.') +
      picocolors.yellow('.') +
      picocolors.green('.') +
      picocolors.bgRed(picocolors.black(' ERROR ')) +
      picocolors.red(
        ' Add plugin ' +
          picocolors.yellow('name') +
          ' to use time limit with ' +
          picocolors.yellow(++index),
      )
  })
  .add('picochalk', () => {
    picochalk.red('.') +
      picochalk.yellow('.') +
      picochalk.green('.') +
      picochalk.bgRed(picochalk.black(' ERROR ')) +
      picochalk.red(
        ' Add plugin ' +
          picochalk.yellow('name') +
          ' to use time limit with ' +
          picochalk.yellow(++index),
      )
  })

await bench.warmup()
await bench.run()

console.table(bench.table().sort((a, b) => b.Samples - a.Samples))
