const sumOfArr = (arr) => {
  let sum = 0;
  for(let y = 0; y < arr.length; y++){
    for(let x = 0; x < arr[y].length; x++){
      sum += arr[y][x];
    }
  }
  return sum;
}

console.log(sumOfArr(
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ]
));
