import '../styles/index.scss';
import {Vehicle} from "./models/vehicle";



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

let employeeId =123;

console.log(employeeId =="123"); // == true because JS will convert number to string. === returns false

let year= 1967;

console.log(year++);  // 1967
console.log(year);  // 1968

console.log(+year);


if (5 === 5 && 6=== 6 ) {
    console.log(true);
}
else {
    console.log(false);
}


let userSettings = null;
let defaultSettings = { name: 'Default'};

console.log(userSettings || defaultSettings);

let audi =null;
console.log(!audi);

let s1 ='Ragavan';
let s2= 'mike';

if (s1.toUpperCase() > s2.toUpperCase()) {
    console.log(true);
}
else {
    console.log(false);
}

var result = ( 5 > 4) ? 'true' : 'false' ;


console.log(result);

let year1 = 1987;

year1 += 10;
console.log(year1);

function startMouse(mouseId) {

    let message = 'starting....';
    let startFn = function turnKey() {
        let message ='Override';
    };
    startFn();
    console.log(message);
}

startMouse(55);



if ( 55=== 55) {
    let message = 'Equal';
    console.log(message);
}


let app = (function() {
    let mouseId =123;
    console.log('in function');
    return {};
})();

console.log(app);

let app1 = (function() {
    let ringId =555;
    let getId = function () {
        return ringId;
    };
    return {
        getId: getId
    };

})();

console.log(app1.getId());


let o = {
    newId: 123,
    getNewId : function (prefix) {
        return prefix + this.newId;
    }
};

let newCar = {newId : 456};
console.log(o.getNewId.apply(newCar, ['Id: ']));


let n= {
    newId : 123,
    getNewId: function () {
        return this.newId;
    }
};

let newCar1 = {newId: 678};
let newFn= n.getNewId.bind(newCar1);

console.log(newFn());


let getId = (prefix, suffix) => {
    return prefix + 555 + suffix;
};

console.log(getId('ID:',  '!'));


let trackCar = function (carId, city='TGA') {

    console.log(` Tracking ${carId} in City ${city}`);
};
trackCar(22);
trackCar(22, 'HAM');


// Constructor

function Car(id) {
    this.carId = id;
    this.start =function () {
        console.log('Start :' + this.carId);
    };
}

let vehicle = new Car(47);
vehicle.start();

// Using prototypes
function OnePlus(id) {
    this.oneId = id;
}
OnePlus.prototype.start = function () {
  console.log('Start  :' + this.oneId);
};

let onePlus = new OnePlus(123);
onePlus.start();

// parsing JSON

let jsonIn  =` [
{"bikeId": 123},
{"bikeId": 456},
{"bikeId": 789}

]
`;

let bikeIds = JSON.parse(jsonIn);
console.log(bikeIds);
console.log(JSON.stringify(bikeIds));

// Array Iteration Examples

let busIds =[
    {"busId": 123, "style": "convertible"},
    {"busId": 456, "style": "hatchback"},
    {"busId": 124, "style": "convertible"},
    ];

busIds.forEach ( bus => console.log(bus));

busIds.forEach((bus, index) => console.log(bus, index));

let convertibles = busIds.filter(bus => bus.style === 'convertible');

console.log(convertibles);

let busResult = busIds.every(bus => bus.busId > 0);
console.log(busResult);

let busResultFind = busIds.find(bus => bus.busId >110);
console.log(busResultFind);


// Class

class Train {
}
let train =new Train();
console.log(train);

// class with constructor, properties and methods

class Flight {
    constructor(id) {
        this.id = id;
    }
    identify(suffix){
        return `Flight Id: ${this.id} ${suffix}`;
    }
}

let flight = new Flight(787);
console.log(flight.identify('!!!'));

// inheritance



class Bicycle extends Vehicle {
    start(){
        return `In bicycle start method : ` + super.start();
    }
}
let bicycle = new Bicycle();

console.log(bicycle.start());
console.log('window.inner:', window.innerWidth);

// Timer setTimeout and setInterval example

function setTimeOut(f, number) {
    return undefined;
}

let timeoutId =  setTimeOut(function () {

    console.log('1 second passed');

}, 1000);

/*
let intervalId = setInterval(function () {
    console.log(' firing at 1 second');
});
*/


// to cancel
// clearTimeout(intervalId);

console.log(location.href);


// DOM

let el = document.getElementById('first');
el.textContent ='Ragavan Rajan';
el.setAttribute('Name', 'RR');

el.classList.add('p2');
el.style.color='green';

console.log(el);

let cl = document.getElementsByClassName('p1');
console.log(cl);


// Error handling
try {
    // let drink = newDrink;
    throw new Error('My Custom Error');
    // console.log('continuing');
}
catch (error) {
    console.log('Error:', error);

}
finally {
    console.log('Finally executed');
}


// Promise

let promise = new Promise(
    function (resolve,reject) {
        setTimeOut(resolve,100,'Some value');
    }
);

promise.then(
    value => console.log('Fulfilled:' + value),
    error => console.log('Rejected' + error)

);


/*
// XHR request

let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
    
};
xhttp.open("GET", "http://5d842ca4baffda001476acab.mockapi.io/api/v1/users", true);
xhttp.send();
*/

/*
// using jQuery
import $ from 'jquery';
let promise1 = $.get("http://5d842ca4baffda001476acab.mockapi.io/api/v1/users");
promise1.then(
    data => console.log('Success:', data),
    error => console.log('Error:', error)
);
*/

/*
// using jQuery POST
import $ from 'jquery';
let user ={
     name: 'Mike Bisset',
    avatar: 'Mike.jpg'
};

let promise2 = $.post("http://5d842ca4baffda001476acab.mockapi.io/api/v1/users", user);
promise2.then(
    data => console.log('Success:', data),
    error => console.log('Error:', error)
);
*/


// forms

import $ from 'jquery';
let form = document.getElementById('user-form');

form.addEventListener('submit', event => {

    let userName= form.elements['user'];
    let avatarFile = form.elements['avatar-file'];
    let userError = document.getElementById('user-error');


    let posting = {
        user: userName.value,
        avatarFile: avatarFile.value
    };

    let promise2 = $.post("http://5d842ca4baffda001476acab.mockapi.io/api/v1/users", posting);
    promise2.then(
        data => console.log('Success:', data),
        error => console.log('Error:', error)
    );

  if ( userName.value.length < 4) {

    userError.textContent='Invalid Entry';
    userError.style.color= 'red';
    userError.style.borderColor ='red';
    userName.focus();

    console.log(userName.value, avatarFile.value);
    // Prevent the browser from submitting the form
  }
    event.preventDefault();
});
