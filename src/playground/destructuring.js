//
//Object Destructuring
//

// const person = {
//     name: 'Bruno',
//     age: 30,
//     location: {
//         city: 'Winnipeg',
//         temp: 10
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


//
//Array Destructuring
//

// const address = ['225 North Town Rd','Winnipeg','Manitoba','r3y0p5'];

// //square brackets
// const [, city, state] = address;

// console.log(`You are in ${city} ${state}`);


const item = ['Coffee (Iced)', '$2.00', '$2.50', '$2.75'];

const [product, , medium] = item;

console.log(`A medium ${product} costs ${medium}`);
