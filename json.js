// Create a valid JSON string.
const jsonString = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
console.log(jsonString);

// Convert the string into an object, by "parsing" it:
const obj = JSON.parse(jsonString);
console.log(obj);

// Modify the object:
delete obj.foo;
console.log(obj);

// Serialize it back to a string:
JSON.stringify(obj);
console.log(obj);
