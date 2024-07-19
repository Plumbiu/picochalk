import tty from 'node:tty'
const hasColor = tty?.WriteStream?.prototype?.hasColors?.()

const init = (left, right) => [`\x1b[${left}m`, `\x1b[${right}m`]
// copyed from https://github.com/chalk/chalk/blob/main/source/vendor/ansi-styles/index.js
// License: https://github.com/chalk/chalk/blob/main/license
const colors = {
  /** modifier */
  reset: init(0, 0),
  bold: init(1, 22),
  dim: init(2, 22),
  italic: init(3, 23),
  underline: init(4, 24),
  overline: init(53, 55),
  inverse: init(7, 27),
  hidden: init(8, 28),
  strikethrough: init(9, 29),
  /** color */
  black: init(30, 39),
  red: init(31, 39),
  green: init(32, 39),
  yellow: init(33, 39),
  blue: init(34, 39),
  magenta: init(35, 39),
  cyan: init(36, 39),
  white: init(37, 39),
  blackBright: init(90, 39),
  gray: init(90, 39),
  grey: init(90, 39),
  redBright: init(91, 39),
  greenBright: init(92, 39),
  yellowBright: init(93, 39),
  blueBright: init(94, 39),
  magentaBright: init(95, 39),
  cyanBright: init(96, 39),
  whiteBright: init(97, 39),
  /** bgColor */
  bgBlack: init(40, 49),
  bgRed: init(41, 49),
  bgGreen: init(42, 49),
  bgYellow: init(43, 49),
  bgBlue: init(44, 49),
  bgMagenta: init(45, 49),
  bgCyan: init(46, 49),
  bgWhite: init(47, 49),
  bgBlackBright: init(100, 49),
  bgGray: init(100, 49),
  bgGrey: init(100, 49),
  bgRedBright: init(101, 49),
  bgGreenBright: init(102, 49),
  bgYellowBright: init(103, 49),
  bgBlueBright: init(104, 49),
  bgMagentaBright: init(105, 49),
  bgCyanBright: init(106, 49),
  bgWhiteBright: init(107, 49),
}
let open = ''
let close = ''
const proxyFn = (input) => {
  const output = open + input + close
  open = ''
  close = ''
  return output
}

const proxyPicochalk = new Proxy(proxyFn, {
  get(_, key) {
    if (hasColor) {
      const [left, right] = colors[key]
      open = left + open
      close += right
    }
    return proxyPicochalk
  },
})

export default proxyPicochalk
