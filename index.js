import tty from 'node:tty'

const hasColor = tty?.WriteStream?.prototype?.hasColors?.()
const stack = []
const picochalk = (str) => {
  const [left, right] = stack.pop()
  const out = left + str + right
  return out
}
const getFn = hasColor
  ? (left, right) => () => {
      stack.push([left, right])
      return picochalk
    }
  : () => () => picochalk
const c22 = '\x1b[22m'
const c39 = '\x1b[39m'
const c49 = '\x1b[49m'

dp('reset', '\x1b[0m', '\x1b[0m')
dp('bold', '\x1b[1m', c22)
dp('dim', '\x1b[2m', c22)
dp('italic', '\x1b[3m', '\x1b[23m')
dp('underline', '\x1b[4m', '\x1b[24m')
dp('overline', '\x1b[5m3', '\x1b[55m')
dp('inverse', '\x1b[7m', '\x1b[27m')
dp('hidden', '\x1b[8m', '\x1b[28m')
dp('strikethrough', '\x1b[9m', '\x1b[29m')
dp('black', '\x1b[30m', c39)
dp('red', '\x1b[31m', c39)
dp('green', '\x1b[32m', c39)
dp('yellow', '\x1b[33m', c39)
dp('blue', '\x1b[34m', c39)
dp('magenta', '\x1b[35m', c39)
dp('cyan', '\x1b[36m', c39)
dp('white', '\x1b[37m', c39)
dp('blackBright', '\x1b[90m', c39)
dp('gray', '\x1b[90m', c39)
dp('grey', '\x1b[90m', c39)
dp('redBright', '\x1b[91m', c39)
dp('greenBright', '\x1b[92m', c39)
dp('yellowBright', '\x1b[93m', c39)
dp('blueBright', '\x1b[94m', c39)
dp('magentaBright', '\x1b[95m', c39)
dp('cyanBright', '\x1b[96m', c39)
dp('whiteBright', '\x1b[97m', c39)
dp('bgBlack', '\x1b[40m', c49)
dp('bgRed', '\x1b[41m', c49)
dp('bgGreen', '\x1b[42m', c49)
dp('bgYellow', '\x1b[43m', c49)
dp('bgBlue', '\x1b[44m', c49)
dp('bgMagenta', '\x1b[45m', c49)
dp('bgCyan', '\x1b[46m', c49)
dp('bgWhite', '\x1b[47m', c49)
dp('bgBlackBright', '\x1b[100m', c49)
dp('bgGray', '\x1b[100m', c49)
dp('bgGrey', '\x1b[100m', c49)
dp('bgRedBright', '\x1b[101m', c49)
dp('bgGreenBright', '\x1b[102m', c49)
dp('bgYellowBright', '\x1b[103m', c49)
dp('bgBlueBright', '\x1b[104m', c49)
dp('bgMagentaBright', '\x1b[105m', c49)
dp('bgCyanBright', '\x1b[106m', c49)
dp('bgWhiteBright', '\x1b[107m', c49)

function dp(key, left, right) {
  Object.defineProperty(picochalk, key, {
    get: getFn(left, right),
  })
}

picochalk.prototype = picochalk

export default picochalk
