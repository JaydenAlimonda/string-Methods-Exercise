var hello = "hello"
console.log ( hello.toUpperCase(), hello)

var splitHello = hello.split('')
console.log(splitHello)
var middle = splitHello.length/2 
var result = Math.floor(middle)
console.log(result)

var firstHalf = hello.slice(0, middle)
console.log(firstHalf)

var helloworld = "hello world"

var splitHelloWorld = helloworld.split('')
console.log(splitHelloWorld)
var middle2 = splitHelloWorld.length/2 
var result2 = Math.floor(middle2)
console.log(result2)

var firstHalf2 = hello.slice(0, middle2)
console.log(firstHalf2)