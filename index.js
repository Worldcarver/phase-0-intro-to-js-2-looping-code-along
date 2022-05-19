// Code your solutions in this file
const writeCards = (names, event) => {
    let messages = [];
    for (let i=0; i <3; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages
}

const countDown = () =>{
    let number = 10
    while (number > -1) {
        console.log(number--)
    }
}
console.log(number)