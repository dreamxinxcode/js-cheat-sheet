let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let cap = arr.map(function(item, index){
    if(index % 2 === 0){
        return item.toUpperCase();
    } else {
        return item;
    }
});

console.log(cap);