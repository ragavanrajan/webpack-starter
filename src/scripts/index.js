import '../styles/index.scss';
const cardId =42;
console.log('webpack starterkit');



let firstName =' Mike';
console.log(firstName);

function sendCars(day, ...cardIds){
    cardIds.forEach(id => console.log(id));
}

sendCars('Tuesday', 55,555,5555);
// Array Destructuring
let carIds=[100,200,300];

let car1, car2, theRest;

[car1,car2, ...theRest]= carIds;
console.log(car1,car2, theRest);

// destructuring objects

let car = {id: 1, name: 'Ferrari', style:'convertible'};

// let {id, name, style} =car;
let id, name, style;
//added parenthesis to make it work
({id, style} = car);
console.log('destructured', id, style);

//spread syntax

function startCars(car1, car2, car3, ...rest) {
    console.log('Rest:', rest);
}
let carNumbers= [55,66,77,555,505,55, 1055];
startCars(...carNumbers);


console.log(Number.parseInt('55 ABC'));

//controlling loops, continue and break
for (let i=0; i<=5; i++) {
    /*if (i === 2) {
        break;
    }*/

    if(i === 3) {
        continue;
    }
    console.log(i);
}
