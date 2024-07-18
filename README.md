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

# Benchmark

```txt
┌─────────┬────────────────┬─────────────┬────────────────────┬───────────┬─────────┐
│ (index) │ Task Name      │ ops/sec     │ Average Time (ns)  │ Margin    │ Samples │
├─────────┼────────────────┼─────────────┼────────────────────┼───────────┼─────────┤
│ 0       │ 'picochalk'    │ '3,614,726' │ 276.64611188114196 │ '±1.26%'  │ 361473  │
│ 1       │ 'picocolors'   │ '3,078,753' │ 324.80674037479156 │ '±9.57%'  │ 307876  │
│ 2       │ 'yoctocolors'  │ '2,255,497' │ 443.36111726723374 │ '±5.94%'  │ 225550  │
│ 3       │ 'nanocolors'   │ '2,051,883' │ 487.3570220645261  │ '±6.00%'  │ 205189  │
│ 4       │ 'colorette'    │ '2,029,681' │ 492.6880459561031  │ '±6.44%'  │ 202969  │
│ 5       │ 'kleur/colors' │ '1,602,113' │ 624.1754675029716  │ '±11.96%' │ 160212  │
│ 6       │ 'chalk'        │ '1,546,680' │ 646.5458495220656  │ '±7.04%'  │ 154669  │
│ 7       │ 'kleur'        │ '1,492,342' │ 670.0874459722887  │ '±9.64%'  │ 149235  │
│ 8       │ 'ansi-colors'  │ '784,062'   │ 1275.4078079769665 │ '±4.24%'  │ 78407   │
│ 9       │ 'cli-color'    │ '183,014'   │ 5464.058572841279  │ '±1.90%'  │ 18302   │
└─────────┴────────────────┴─────────────┴────────────────────┴───────────┴─────────┘
```
