
const { spawnSync } = require('child_process');

console.log(spawnSync('bun', ['run', 'build']))
console.log(spawnSync('bun', ['run', 'build:docs']))

// Публикация alpha версии
// console.log(spawnSync('npm', ['publish', '--tag', 'next', '--access=public']))
// Публикация beta версии
console.log(spawnSync('npm', ['publish', '--tag', 'beta', '--access=public']))
// Публикация полноценной версии
// console.log(spawnSync('npm', ['publish', '--access=public']))

