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
┌─────────┬────────────────┬─────────────┬────────────────────┬──────────┬─────────┐
│ (index) │ Task Name      │ ops/sec     │ Average Time (ns)  │ Margin   │ Samples │
├─────────┼────────────────┼─────────────┼────────────────────┼──────────┼─────────┤
│ 0       │ 'picochalk'    │ '3,249,626' │ 307.7276489941296  │ '±5.41%' │ 324963  │
│ 1       │ 'picocolors'   │ '3,226,093' │ 309.9724125089517  │ '±8.87%' │ 322610  │
│ 2       │ 'yoctocolors'  │ '2,427,237' │ 411.9909856467626  │ '±4.08%' │ 242724  │
│ 3       │ 'colorette'    │ '2,135,077' │ 468.3669932737763  │ '±5.98%' │ 213508  │
│ 4       │ 'nanocolors'   │ '2,032,357' │ 492.03930406311116 │ '±6.21%' │ 203236  │
│ 5       │ 'kleur/colors' │ '1,853,312' │ 539.574385425422   │ '±8.80%' │ 185332  │
│ 6       │ 'kleur'        │ '1,660,395' │ 602.2663213682117  │ '±5.81%' │ 166040  │
│ 7       │ 'chalk'        │ '1,654,150' │ 604.5400686732028  │ '±4.72%' │ 165416  │
│ 8       │ 'ansi-colors'  │ '866,903'   │ 1153.530354938203  │ '±3.13%' │ 86691   │
│ 9       │ 'cli-color'    │ '187,434'   │ 5335.211267592782  │ '±2.33%' │ 18744   │
└─────────┴────────────────┴─────────────┴────────────────────┴──────────┴─────────┘
```
