//Retrieve the middle element from an array
//1st approach

// let numbers = [4, 8, 2, 8, 4, 7]
// console.log(numbers)


//Purpose of having an object
// let firstName = 'Peter'
// let lastName = 'Lerato'

// const person = {
//     firstName,
//     lastName
// }
// console.log(person);

// let data = ['Nathalie', 'Willemse', 21]
// let [firstName, lastName] = data
// console.log(firstName, lastName)
// console.log(lastName)
// console.log(`My name is ${firstName} and last name is ${lastName}`);



// let products = [
//     {
//     id: 1,
//     name: 'table',
//     amount: 700
//     },
//     {
//         id: 2,
//         name: 'mobile',
//         amount: 10000
//     }
// ]
// let [product1, product2] = products
// console.log(product1, product2)

// let person = {
//     firstName: 'Peter',
//     lastName: 'Shaun',
//     age: 34
// }
// const { firstName, lastName, age } = person
// console.log(`My name is ${person.firstName} ${person.lastName}, and I am ${person.age} years old.`)
// console.log(`My name is ${firstName} ${lastName}, and I am ${age} years old.`)


// let [first, second, ...remaining] = [23, 5, 9, 11, 24, 32]
// console.log(first, second, remaining);


 /*Other array methods that you should know:
=================================
 some(), every(), find():, findIndex(), and indexOf(), findOne()
*/
// some(), every() does return a boolean
// console.log(numbers.some( n => n == 8));
// find() : return value or undefined
// let findResult = numbers.find( n=> n == 8)
// console.log( findResult != undefined ? findResult : 'Value was not found' );

// Count duplicate values: forEach(), reduce(), map() and filter()







/*
Exception handling using try .. and catch
function division(fOp) {
    try{
        let result = fOp / sOp
        console.log(result);
    }catch(e) {
        console.log("Please try again next time");
    }
}
division(4)

When to use an exception handling:
- Retrieving a value from an input element
- Handling arguments
- Accessing a file
- Accessing data from a table (in a database)
- Etc..
*/

// Make use of throw
// function addition(...args) {
//     let totalOfNumbs = 0
//     args.forEach( item=> {
//         if(typeof item != 'number')
//             throw new Error(`${item} is not a number`)
//             else
//         totalOfNumbs += item
//     })
//     return totalOfNumbs
// }

// console.log(addition(3, 5, 'Joel', 2));
// try{
//     console.log(addition(4, 8, 'Joel', 9));
// }catch(e) {
//     console.log(e.message);
// }

// Getter and setter
// function Person(firstName, lastName) {
//     this.firstName = firstName
//     this.
// }


/* Local storage
- .getItem(key)
- .setItem(key, value : string)
- .removeItem(key): Remove the key
- .clear(): Remove all the keys
*/

// Explain promise
// let myPromise = new Promise((resolve, reject)=> {
//     let numb1 = 12
//     let numb2 = 0
//     // For division
//     if (numb2 > 0)
//         resolve(numb1 / numb2)
//     reject(`Can't divide ${numb1} by ${numb2}`)/*
//     //     resolve(`Result is: ${numb1 / numb2}`)
    // reject(`You can't divide ${numb1} by ${numb2}`)*/
// })

// myPromise.then(
//     (correct)=>{
//         console.log(correct);
//     },
//     (denied)=> {
//         console.log(denied);
//     }
// )
// .catch (rejected =>
// {
//     console.log(rejected);
//     })




// Fetch API
// let cardContainer = document.querySelector('[data-cards]')
// fetch('https://randomuser.me/api?results=50')
// .then(data=> data.json())
// .then(result=> {
//     let {results} = result
//     results.forEach( people =>{
//         console.log(people);
//         cardContainer.innerHTML +=
//         `
//         <div class="card" style="width: 18rem;">
//             <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
//             <div class="card-body">
//             <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
//             <p class="card-text">Age: ${people.registered.age}</p>
//         </div>
//         `
//     })
// })

// Asynchronous function
// async function getData() {
//     let data = await fetch('https://randomuser.me/api?results=50')
//     return data.json()
// }
// async function display() {
//     let cardContainer = document.querySelector('[data-cards]')
//     cardContainer.innerHTML = ''
//     let {results} = await getData()
//     results.forEach( people => {
//         cardContainer.innerHTML += `
//         <div class="card" style="width: 18rem;">
//             <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
//             <div class="card-body">
//             <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
//             <p class="card-text">Age: ${people.registered.age}</p>
//         </div>
//         `
//     })
// }
// display()

// Host JSON file to GitHub


// On Thursday, students need to start working on the Todo List

//Exception handling using try .. and catch
// function division(f0p) {
//     try{
//     let result = f0p / s0p
//     console.log(result);
//     }catch(e){
//     console.log("Please try again next time");
//    }
// }
// division(4)


//try code is defining the code
//catch code is where you handle the error



