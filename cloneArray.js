const arr = [1, 2, 3, 'dog', 'cat', true, false];

let newArr = arr.map(function(x){
    return x;
});

console.log(newArr);


const arrr = [1, 2, 3, 'dog', 'cat', true, false];

let newArrr = [];

arrr.forEach(function(x){
    newArrr.push(x);
});

console.log(newArr);