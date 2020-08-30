const array = [1, 2, 3, 4, [1, 2, 3], 6, 7, [1, 2, 3], 9, 10];

for (let i in array) {
  if (Array.isArray(array[i])) {
    for (let x in array[i]) {
      console.log(array[i][x]);
    }
  }
}