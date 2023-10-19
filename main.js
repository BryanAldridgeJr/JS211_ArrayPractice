const cars = ['Tesla', 'Ford', 'Chevy', 'Ram', 'Honda', 'Toyota', 'Kia'];

const coolCars= ['Lamborghini', 'Bentley', 'Rolls Royce', 'Mercedes-Benz', 'Audi'];

const meassage = "Hello, How are you today?";

// 1. .length

console.log(`Length: ${cars.length}`);

// 2. .concat()

const allCars = cars.concat(coolCars);
console.log(`Concat: ${allCars}`);

// 3. .indexOf() and .lastIndexOf()

//.indexOf()
let index = coolCars.lastIndexOf('Rolls Royce');
console.log(`Index: ${index}`);

// .lastIndexOf()
let lastIndexOf1 = cars.lastIndexOf('Ford');
console.log(`LastIndexOf: ${lastIndexOf1}`);

// 4. .join()

let join1 = cars.join();
console.log(`Join: ${join1}`);


// 5. .split()

const split1 = meassage.split(" ");
console.log(`Split: ${split1} `);

// 6. .reverse()

const reverse1 = cars.reverse();
console.log(`Reverse: ${reverse1} `);

// 7. .sort()

const sort1 = cars.sort();
console.log(`Sort: ${sort1} `);

// 8. .slice()

const slice1 = cars.slice(1,4);
console.log(`Slice: ${slice1} `);

// 9. .splice()

const splice1 = cars.splice(2, 0, 'Smart Car', 'Dodge');
console.log(`Splice: ${splice1} `);

// 10. .pop()

const pop1 = cars.pop();
console.log(`Pop: ${pop1} `);

// 11. .push()

const push1 = cars.push('Ford', 'Chevy');
console.log(`Push: ${push1} `);

// 12. .shift()

const shift1 = cars.shift();
console.log(`Shift: ${shift1} `);

// 13. .unshift()

const unshift1 = cars.unshift('Monster Truck');
console.log(`Unshift: ${unshift1} `);

// 14. .forEach()

//const foreach1 = cars.forEach();
//console.log(`Foreach: ${foreach1} `);
cars.forEach((element) => console.log(` ForEach: ${element}`));