//1) Multiplication table
let num = prompt('insert a number ')
 for(let i = 1; i <= 12;i++){
    let result = i * num;
    console.log(`${num} * ${i} = ${result}`);
 }
//2)Prime numbers
//3)Sum of numbers using a for-loop, while-loop and a do-while loop
const numbers = [2,4,6,8]
//a)For loop
function forLoop(){
let sum = 0
for(let i = 0; i < numbers.length; i++){
 sum += numbers[i]
}
console.log(sum);
}
forLoop()
//b)While loop
function whileLoop(){
    let i = 0 
    let sum2 = 0
while (i < numbers.length){
 sum2 += numbers[i]
     i++
}
console.log(sum2);
}
whileLoop()
//c)Do-while loop
function doLoop(){
let i = 0
let sum3 = 0
do{
    sum3 += numbers[i]
    i++
}
while( i < numbers.length)
console.log(sum3);
}
doLoop()
//4)Concatenation of two list
function concatenation(){
let list1 =[1,2,3,4,5]
let list2 =[6,7,8,9,10]
let list3 = [].concat(list1,list2)
console.log(list3);
}
concatenation()
//5)A function that takes a number and returns the list of the numbers seperately 
function splitNumbers(){
let digit = 12345
let stringDigits = digit.toString()
let splitDigits = stringDigits.split('')
let splitNumbers = splitDigits.map(Number)
console.log(splitNumbers);
}
splitNumbers()
//6)A function that returns the sum of numbers.
function sumOfNumbers(num){
    let stringDigits = num.toString()
    let splitDigits = stringDigits.split('')
    let splitNumbers = splitDigits.map(Number)
let sum = 0
splitNumbers.map(x => sum += x)
console.log(sum);
}
sumOfNumbers(12345)