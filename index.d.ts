export interface PicoChalk {
  (str: string): string
  readonly reset: this
  readonly bold: this
  readonly dim: this
  readonly italic: this
  readonly underline: this
  readonly overline: this
  readonly inverse: this
  readonly hidden: this
  readonly strikethrough: this
  readonly visible: this

  readonly black: this
  readonly red: this
  readonly green: this
  readonly yellow: this
  readonly blue: this
  readonly magenta: this
  readonly cyan: this
  readonly white: this
  readonly gray: this
  readonly grey: this
  readonly blackBright: this
  readonly redBright: this
  readonly greenBright: this
  readonly yellowBright: this
  readonly blueBright: this
  readonly magentaBright: this
  readonly cyanBright: this
  readonly whiteBright: this

  readonly bgBlack: this
  readonly bgRed: this
  readonly bgGreen: this
  readonly bgYellow: this
  readonly bgBlue: this
  readonly bgMagenta: this
  readonly bgCyan: this
  readonly bgWhite: this
  readonly bgGray: this
  readonly bgGrey: this
  readonly bgBlackBright: this
  readonly bgRedBright: this
  readonly bgGreenBright: this
  readonly bgYellowBright: this
  readonly bgBlueBright: this
  readonly bgMagentaBright: this
  readonly bgCyanBright: this
  readonly bgWhiteBright: this
}

declare const picochalk: PicoChalk
export default picochalk
