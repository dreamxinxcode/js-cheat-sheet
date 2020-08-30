let dogs = [
  {name: 'rover', age: 5, owners: ['Jim', 'Bob']},
  {name: 'rover', age: 5, owners: ['Jim', 'Bob']},
  {name: 'rover', age: 5, owners: ['Jim', 'Bob']}
];

const newDog = {};

newDog.name = 'ruffy';
newDog.age = 7;
dogs.push(newDog);
console.log(dogs);

const thing = function(arr, callback) {
  for (let item of arr) {
    callback(item);
  }
};

thing([1, 2, 3], console.log);



