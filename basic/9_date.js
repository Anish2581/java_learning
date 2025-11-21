// let mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof  mydate)//object


let myCreatedDate=new Date(2007,3,23)//month starts from "0" means 1->feb,2->mar;
// console.log(myCreatedDate.toDateString())
// myCreatedDate=new Date(2007,3,23,5,77)
// console.log(myCreatedDate.toLocaleString())
// myCreatedDate=new Date("2007-4-23")//in this format month is started by "1" means 1->jan;
// console.log(myCreatedDate.toLocaleString())
myCreatedDate=new Date("4-23-2007")//we can also intialize in mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp= Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

let newDate= new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)
console.log(newDate.getHours())
