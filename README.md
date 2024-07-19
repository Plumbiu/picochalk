# picochalk

> The fastest ant tiniest library for coloring cli with [chalk](https://github.com/chalk/chalk) style.

# Highlights

- Tiny
- Fast
- Support all chalk ANSI colors
- Simple usage

# Usage

See: [chalk#usage](https://github.com/chalk/chalk?tab=readme-ov-file#usage)

Support Color: [chalk#styles](https://github.com/chalk/chalk?tab=readme-ov-file#styles)

# Replacing `Chalk`

```js
- import chalk from 'chalk'
+ import picochalk from 'picochalk'

- chalk.blue.bgWhite('Hello world')
+ picochalk.blue.bgWhite('Hello world')
```

Or use `Proxy` version, it is slower than `Object.defineProperty`：

```js
- import chalk from 'chalk'
+ import picochalk from 'picochalk/proxy'

- chalk.blue.bgWhite('Hello world')
+ picochalk.blue.bgWhite('Hello world')
```

# Limitation

The arguments should not exist `picochalk`

```js
import picochalk from 'picochalk'

// Wrong
picochalk.red('foo' + picochalk.bgWhite(': bar'))
```

> I'm working on it

# Benchmark

Run `pnpm bench`:

```txt
┌─────────┬───────────────────┬─────────────┬────────────────────┬───────────┬─────────┐
│ (index) │ Task Name         │ ops/sec     │ Average Time (ns)  │ Margin    │ Samples │
├─────────┼───────────────────┼─────────────┼────────────────────┼───────────┼─────────┤
│ 0       │ 'picochalk'       │ '3,255,796' │ 307.14448061789875 │ '±4.99%'  │ 325580  │
│ 1       │ 'picocolors'      │ '3,203,776' │ 312.1316070403978  │ '±5.28%'  │ 320378  │
│ 2       │ 'colorette'       │ '2,323,203' │ 430.44020988268096 │ '±5.14%'  │ 232321  │
│ 3       │ 'yoctocolors'     │ '2,205,095' │ 453.49507958599366 │ '±5.35%'  │ 220510  │
│ 4       │ 'picochalk-proxy' │ '2,049,519' │ 487.9191814695164  │ '±0.32%'  │ 204953  │
│ 5       │ 'nanocolors'      │ '2,028,635' │ 492.9420695612205  │ '±8.48%'  │ 202864  │
│ 6       │ 'kleur/colors'    │ '1,751,409' │ 570.9685339242512  │ '±10.40%' │ 175141  │
│ 7       │ 'kleur'           │ '1,632,029' │ 612.7338345514044  │ '±8.38%'  │ 163203  │
│ 8       │ 'chalk'           │ '1,578,988' │ 633.316867110317   │ '±4.78%'  │ 157899  │
│ 9       │ 'ansi-colors'     │ '841,854'   │ 1187.8530872118808 │ '±3.70%'  │ 84186   │
│ 10      │ 'cli-color'       │ '183,761'   │ 5441.824019145063  │ '±3.37%'  │ 18377   │
└─────────┴───────────────────┴─────────────┴────────────────────┴───────────┴─────────┘
```
