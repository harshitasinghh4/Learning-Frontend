let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
console.log(result1);
console.log(result2);
/*
JS Execution Environment : - It is the environment in which js code runs.
Everything in javascript happens inside am execution context
There are three types of execution context:-
1. Global Execution Context
2. Functional Execution Context
3. Eval Execution Context
There are two phases in execution : Memory Creation Phase and Execution Phase
Memory Creation : val1 - Undefined, val2 - Undefined, addNum - Definition, result1 - Undefined, result2 - Undefined
Execution Phase : val1 : 10, val2: 5, addNum : new variable memory creation and execution phase.
Each time a function is executed, a new memory creation and execution phase starts for that function. : Functional Execution Context
And then it gets deleted and result is sent to global execution context.
Call Stack - Last In First Out
*/
