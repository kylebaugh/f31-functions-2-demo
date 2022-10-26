////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE

// Pseudo-code:
// Create functions for normal math operators
// Console.log invocations to make sure they're working correctly
// Create higher order function that takes in the num1, num2, and a callback function
// Higher order function should return the invocation of the callback function with the nums passed in
// Invoke HOF with appropriate values passed in

const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

// console.log(add(3,5))
// console.log(subtract(3,5))
// console.log(multiply(3,5))
// console.log(divide(3,5))

const calc = (num1, num2, callbackName) => callbackName(num1, num2)


// console.log(calc(5, 7, add))
// console.log(calc(5, 7, subtract))
// console.log(calc(5, 7, multiply))
// console.log(calc(5, 7, divide))

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

// Initial Pseudo-code:
// Find a way to apply a discount to a given price
// In order to do this, I need to know what my initial value is, and how much to discount it
// The discounted price should be the initial value, with the discount amount subtracted
// discounted price = initial price - discount value

// Starting transition to javascript syntax:
// Set up flat rate discount function
// I know I'll need access to an initial value and the discount amount
// Since I'm working objects, I'll give a parameter for the object (product), and another for the discount (discount)
// Inside the function, I can use dot-notation to access the key/value pairs in the product object
// Initial value can be found with product.basePrice
// I can subtract the discount from my product.basePrice, and save it to the displayPrice property
// product.displayPrice = product.basePrice - discount

// Next, create a higher order function with three parameters: The array to loop over, the discount amount, and the callback name
// const applyDiscount = (arrayName, discount, callbackName) => {}
// In the code block, run a forEach method on our arrayName to run specific code on each element in the array
// In the forEach callback function, give create a parameter for the element (this represents the current value in the array loop)
// In the code block portion, invoke the callbackName, passing in the element and discount as it's arguments
// NOTE: Element and discount arguments are the same thing as the product and discount properties in our first function
// This will loop over the array, and run the flat rate discount function on each object in the given array

// Finally, invoke the higher order function, passing in the name of the array (dogProducts), a discount (any number), and the name of the callback function (applyFlatRateDiscount)
// Console.log the dogProducts array to see that the values have changed.

const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount
}

// const applyPercentageDiscount = (product, discount) => {
//     product.displayPrice = product.basePrice * (1 - discount)
// }

const applyDiscount = (arrayName, discount, callbackName) => {
    arrayName.forEach((el) => callbackName(el, discount))
}

applyDiscount(dogProducts, 5, applyFlatRateDiscount)

// applyDiscount(catProducts, .25, applyPercentageDiscount)

// console.log(dogProducts)
// console.log(catProducts)


////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE



////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const mappedColors = colors.map((element) => {
    return 'pink'
})

// console.log(mappedColors)

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = (names) => {
    // CODE HERE
    return names.map((el) => `Hello, ${el}`)
}

// Call formalGreeting passing in the formalNames array

// console.log(formalGreeting(formalNames))


//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

// let myString = 'Kyle'
// console.log(myString[0])

const placesThatStartWithA = places.filter((element) => element[0] === "B")

// console.log(placesThatStartWithA)


/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE

const identifier = (arr) => {
    return arr.filter((job) => job.programmer)[0]
}

// call the function passing in the jobs array

// console.log(identifier(jobs))

//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = (numbers) => {
    // Code here
    return numbers.reduce((accumulator, current) => accumulator + current)
}

// CODE HERE

// console.log(productOfArray(numsToReduce))

// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

const remaining = expenses.reduce((acc, cur) => {
    console.log(`The current total is ${acc}`) 
    return acc - cur.amount
}, budget)
console.log(remaining)