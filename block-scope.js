// var does not have block scope
var name = 'Michael'
if (true) {
  var name = 'Bruce'
  name // 'Bruce'
}
name // 'Bruce'

// let has block scope
let name = 'Michael'
if (true) {
  let name = 'Bruce'
  name // 'Bruce'
}
name // 'Michael'

// const has block scope too
const name = 'Michael'
if (true) {
  const name = 'Bruce'
  name // 'Bruce'
}
name // 'Michael'

// let can be reassigned
let isOpen = true
isOpen = false
isOpen // false

// const cannot be reassigned
const isOpen = true
isOpen = false // throws error

// Although const cannot be reassigned, if the value
// is an array or an object, it's inner parts can be
// changed, as long as the array or object itself isn't
// reassigned
const list = []

// This is allowed because we're not changing the fact
// that list is still the same array. We're just adding
// stuff to it
list.push('Michael')

// But this is not allowed, we cannot change (reassign)
// list to be something other than the array it started
// off to be
list = 'turn list into a string'
