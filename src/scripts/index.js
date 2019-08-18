import '../styles/index.scss';
const cardId =42;
console.log('webpack starterkit');



let firstName =' Mike';
console.log(firstName);

function sendCars(day, ...cardIds){
    cardIds.forEach(id => console.log(id));
}

sendCars('Tuesday', 55,555,5555);
