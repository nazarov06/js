let userName = prompt('Ismingiz')
let age = +prompt('Yoshingiz')

let userName1 = prompt('Ismingiz')
let age1 = +prompt('Yoshingiz')

let user1 = {
    name: userName,
    age: age,
}

let user2 = {
    name: userName1,
    age: age1
}

if (user1.age > user2.age) {
    alert(`${user1.name} ${user2.name} dan katta`)
} else if (user1.age < user2.age) {
    alert(`${user1.name} ${user2.name} dan kichkina`)
} else if (user1.age == user2.age) {
    alert(`${user1.name} va ${user2.name} ning yoshlari teng`)
} else {
    alert('Error')
}




















let firstNumber = +prompt('1-sonni kiriting')
let operator = prompt('Matematik amalni kiriting (+ - * /)')
let secondNumber = +prompt('2-sonni kiriting')

if (!isNaN(Number(firstNumber)) && !isNaN(Number(secondNumber))) {
    if (operator === '+') {
        alert(firstNumber + secondNumber);
    } else if (operator === '-') {
        alert(firstNumber - secondNumber);
    } else if (operator === '*') {
        alert(firstNumber * secondNumber);
    } else if (operator === '/') {
        alert(firstNumber / secondNumber);
    } else {
        alert("Amal noto'ri")
    }
} else {
    alert('Boshidan urining')
}