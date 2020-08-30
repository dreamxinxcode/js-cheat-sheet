let arr = [1, 2, 'dog', 3, 4, 'dog', 5];

arr.forEach(function(item, index){
    if(item === 'dog'){
        arr.splice(index, 1);
    }
});

console.log(arr);