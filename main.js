//Первое задание

function generateEmail(firstName, lastName) {
    let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
    return email;
}

let firstName = prompt("Введите ваше имя: ");
let lastName = prompt("Введите вашу фамилию: ");

let email = generateEmail(firstName, lastName);
console.log("Ваш email:", email);


// Второе  задание
function generateRandomId(length) {
    let result = '';
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let symbolsLength = symbols.length;
    for (let i = 0; i < length; i++) {
        result += symbols.charAt(Math.floor(Math.random() * symbolsLength));
    }
    return result;
}

const randomId = generateRandomId(8);
console.log("Случайный id:", randomId);



