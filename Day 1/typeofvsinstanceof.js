const a = "string primitive";
const b = new String("string object");

console.log(typeof a);
console.log(typeof b);

//object instanceof constructor
console.log(a instanceof String);
console.log(b instanceof String);

const isString = (str) => {
  return typeof str === "string" || str instanceof String;
};

console.log(isString("hello world"));
console.log(isString(new String("Hello World")));

console.log(typeof typeof 10);

let date = new Date();
date instanceof Date;
date instanceof Object;

//All non-primitive datatypes are instances of object
