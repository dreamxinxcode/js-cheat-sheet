const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i]);
  }
};

forEach([1, 2, 3, 4], (x) => {
  x * 2;
});


const keysMatch = (obj1, obj2, arr) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  for (let i = 0; i < arr.length; i++) {

    if (!obj1Keys.includes(arr[i])) {
      return false;
    }

    for(let x = 0; x < obj1Keys.length; x++) {
      for (let y = 0; y < obj2Keys.length; y++) {
        if(obj1Keys[x] !== obj2Keys[y]) {
          return false;
        }
      }
    } 
    
  }
  return true;
};