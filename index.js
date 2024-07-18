import tty from 'node:tty'

const hasColor = tty?.WriteStream?.prototype?.hasColors?.()
const stack = []
const picochalk = (str) => {
  const [left, right] = stack.pop()
  return left + str + right
}
const getFn = hasColor
  ? (left, right) => () => {
      stack.push([left, right])
      return picochalk
    }
  : () => () => picochalk

dp('reset', '\x1b[0m', '\x1b[0m')
dp('bold', '\x1b[1m', '\x1b[22m')
dp('dim', '\x1b[2m', '\x1b[22m')
dp('italic', '\x1b[3m', '\x1b[23m')
dp('underline', '\x1b[4m', '\x1b[24m')
dp('overline', '\x1b[5m3', '\x1b[55m')
dp('inverse', '\x1b[7m', '\x1b[27m')
dp('hidden', '\x1b[8m', '\x1b[28m')
dp('strikethrough', '\x1b[9m', '\x1b[29m')
dp('black', '\x1b[30m', '\x1b[39m')
dp('red', '\x1b[31m', '\x1b[39m')
dp('green', '\x1b[32m', '\x1b[39m')
dp('yellow', '\x1b[33m', '\x1b[39m')
dp('blue', '\x1b[34m', '\x1b[39m')
dp('magenta', '\x1b[35m', '\x1b[39m')
dp('cyan', '\x1b[36m', '\x1b[39m')
dp('white', '\x1b[37m', '\x1b[39m')
dp('blackBright', '\x1b[90m', '\x1b[39m')
dp('gray', '\x1b[90m', '\x1b[39m')
dp('grey', '\x1b[90m', '\x1b[39m')
dp('redBright', '\x1b[91m', '\x1b[39m')
dp('greenBright', '\x1b[92m', '\x1b[39m')
dp('yellowBright', '\x1b[93m', '\x1b[39m')
dp('blueBright', '\x1b[94m', '\x1b[39m')
dp('magentaBright', '\x1b[95m', '\x1b[39m')
dp('cyanBright', '\x1b[96m', '\x1b[39m')
dp('whiteBright', '\x1b[97m', '\x1b[39m')
dp('bgBlack', '\x1b[40m', '\x1b[49m')
dp('bgRed', '\x1b[41m', '\x1b[49m')
dp('bgGreen', '\x1b[42m', '\x1b[49m')
dp('bgYellow', '\x1b[43m', '\x1b[49m')
dp('bgBlue', '\x1b[44m', '\x1b[49m')
dp('bgMagenta', '\x1b[45m', '\x1b[49m')
dp('bgCyan', '\x1b[46m', '\x1b[49m')
dp('bgWhite', '\x1b[47m', '\x1b[49m')
dp('bgBlackBright', '\x1b[100m', '\x1b[49m')
dp('bgGray', '\x1b[100m', '\x1b[49m')
dp('bgGrey', '\x1b[100m', '\x1b[49m')
dp('bgRedBright', '\x1b[101m', '\x1b[49m')
dp('bgGreenBright', '\x1b[102m', '\x1b[49m')
dp('bgYellowBright', '\x1b[103m', '\x1b[49m')
dp('bgBlueBright', '\x1b[104m', '\x1b[49m')
dp('bgMagentaBright', '\x1b[105m', '\x1b[49m')
dp('bgCyanBright', '\x1b[106m', '\x1b[49m')
dp('bgWhiteBright', '\x1b[107m', '\x1b[49m')

function dp(key, left, right) {
  Object.defineProperty(picochalk, key, {
    get: getFn(left, right),
  })
}

export default picochalk
