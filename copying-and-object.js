// Shallow copy

const original = { one: 1 };
const bad = original;
const good = { ...original };

console.log(original === original); // true
console.log(original === bad); // true
console.log(original === good); // false


// Deep copy

const original = { one: 1, sub: { two: 2 } };
const copy = { ...original, sub: { ...original.sub } };

console.log(original === copy); // false
console.log(original.sub === copy.sub); // false


// Merging multiple objects

const first = { one: 1 };
const second = { two: 2 };
const copy = { ...first, ...second };

console.log(copy === copy); // true
console.log(first === copy); // false
console.log(second === copy); // false

/* first */
{
  one: 1
}

/* second */
{
  two: 2
}

/* copy */
{
  one: 1,
  two: 2
}
