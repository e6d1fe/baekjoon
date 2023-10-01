const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const allItems = [];
for (let i = 0; i < 9; i++) {
  input[i]
    .split(' ')
    .map(Number)
    .map((item) => allItems.push(item));
}
const max = Math.max(...allItems);
const maxIndex = allItems.indexOf(max);
const row =
  parseInt((maxIndex + 1) / 9) === (maxIndex + 1) / 9
    ? (maxIndex + 1) / 9
    : parseInt((maxIndex + 1) / 9) + 1;
const column = (maxIndex + 1) % 9 === 0 ? 9 : (maxIndex + 1) % 9;

console.log(`${max}
${row} ${column}`);
