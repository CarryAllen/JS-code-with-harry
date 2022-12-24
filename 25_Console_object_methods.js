/* 

https://replit.com/@CarryAllen/25Consoleobjectmethodsjs#index.html

put it in the browser 

===============================================================================

console.log("hi Rohan")
VM198:1 hi Rohan
undefined

5
5

console.error("Hey, this is an error");
VM414:1 Hey, this is an error
(anonymous) @ VM414:1
undefined


console.warn("Hey, this is an warning");
VM563:1 Hey, this is an warning
(anonymous) @ VM563:1
undefined

console
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
assert: ƒ assert()
clear: ƒ clear()
  length: 0name: "clear"arguments: (...)caller: (...)[[Prototype]]: ƒ ()
context: ƒ context()
count: ƒ count()
countReset: ƒ countReset()
createTask: ƒ createTask()
debug: ƒ debug()
dir: ƒ dir()
dirxml: ƒ dirxml()
error: ƒ error()
group: ƒ group()
groupCollapsed: ƒ groupCollapsed()
groupEnd: ƒ groupEnd()
info: ƒ info()
log: ƒ log()
memory: MemoryInfo {totalJSHeapSize: 10000000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 2190000000}
profile: ƒ profile()
profileEnd: ƒ profileEnd()
table: ƒ table()
time: ƒ time()
timeEnd: ƒ timeEnd()
timeLog: ƒ timeLog()
timeStamp: ƒ timeStamp()
trace: ƒ trace()
warn: ƒ warn()
  Symbol(Symbol.toStringTag): "Object"[[Prototype]]: Object

    console.assert(5>3)
undefined

console.assert(5<3)
VM772:1 Assertion failed: console.assert
(anonymous) @ VM772:1
undefined

*/

console.log("log");
console.log("log");
console.info("info");
console.warn("warn");
console.error("error");

console.assert("err" != false);
console.assert("err" == false);

//===========================================================
console.time("forLoop");
for (let i=0; i<5; i++){
  console.log(233);
}
console.timeEnd("forLoop");

//===========================================================
console.time("whileLoop");
for (let i=0; i<5; i++){
  console.log(233);
}
console.timeEnd("whileLoop");