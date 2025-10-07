// @ts-ignore
import { spawnSync } from 'child_process'

console.log(JSON.stringify(spawnSync('bun', ['run', 'build:docs'])))
console.log(JSON.stringify(spawnSync('bun', ['run', 'build'])))

// Публикация alpha версии
// console.log(spawnSync('npm', ['publish', '--tag', 'next', '--access=public']))
// Публикация beta версии
console.log(JSON.stringify(spawnSync('npm', ['publish', '--tag', 'next'])))
// Публикация полноценной версии
// console.log(spawnSync('npm', ['publish', '--access=public']))

