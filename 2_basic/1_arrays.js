// //arrays

// let arr=[1,"Hello",true,5]//can be of mixed data types
// console.log(arr)
// console.log(arr[1])
// console.log(arr[3])

// const arr1= new Array(1,2,3,4)
// console.log(arr1)

// //Array methods

// console.log(arr)
// // arr.push(6)
// // console.log(arr)//add element at the last
// // arr.pop()//remove element from last
// // console.log(arr)
// arr.unshift(6)//insert element at the beginning
// console.log(arr)
// arr.shift()//remove element at the beginning
// console.log(arr)
// console.log(arr.includes(5))//true
// console.log(arr.indexOf(5))//3 //return index of that element and if element is not present return -1

// let newarr=arr.join()// it convert array into string seperated by seperator
// console.log(arr)
// console.log(newarr)
// console.log(typeof newarr)//string

//slice,splice

let newarr1=[9,7,6,5,4]

let carr=newarr1.slice(1,4)
// console.log("A  ",newarr1)//[9,7,6,5,4]

// console.log("B  ",carr)//[7,6,5]

// carr=newarr1.splice(1,3)//splice method will print a new array "including last index"
// //                        as well as it will eliminate or "remove the elements from the original array"

// console.log("C  ",newarr1)//[9,4]

// console.log("D  ",carr)//[7,6,5]
