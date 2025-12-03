const accountId = 230
let accountEmail = "hiramalik@gmail.com"
var accountPassword = "123"
accountcity="talagang"
// accountId = 260
accountEmail = "hiramalik677@gmail.com"
accountPassword = "12344"
accountcity="Rawalpindi"

console.log(accountId);
console.table([accountcity, accountPassword, accountEmail])

function addTwoNumber (number1,  number2){
    console .log (number1+ number2);

}
addTwoNumber(3,5)

function multiplyTwoNumber(number1 ,  number2){
    let result = number1 * number2
    return result;
   
}

const result = multiplyTwoNumber(3, 5)
console.log(result)

function multiplyTwoNumber(number1 ,  number2){
    
    return number1 * number2;
   
}

const result2 = multiplyTwoNumber(3, 5)
console.log(result)

function loginusermessage(username){
   return `${username} just logged in`

}
console.log (loginusermessage("hira"))


const add = (a, b) => a+b;

console.log(add(3,4))

const sum =(a,b) => a-b;
console.log(sum(6, 5))

const multi=(b,c) => b*c;
console.log(multi(5, 5))

let box = document.getElementsByClassName('box1')[0]
let h1 = document.getElementsByTagName('h1')[0]

// h1.addEventListener("click" , function(){
//     box.style.backgroundColor='red'

// });

h1.addEventListener("mouseover" , function(){
h1.textContent = "mouse over action done"
});

