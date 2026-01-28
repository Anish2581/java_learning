// 1.string,boolean -> number

let score="33"
console.log(typeof score)
let valueInNumber=Number(score)
console.log(typeof valueInNumber)//number
console.log(valueInNumber)//33

 score="33asd"
console.log(typeof score)//string
valueInNumber=Number(score)
console.log(typeof valueInNumber)//number
console.log(valueInNumber)//NaN=Not a Number

score=true
console.log(typeof score)//boolean
valueInNumber=Number(score)
console.log(typeof valueInNumber)//number
console.log(valueInNumber)//1;for false->0

// numbers,bigInt,boolean to string 

let num=3636636367n
console.log(num)//type:-number
console.log(typeof (num.toString()))//string
