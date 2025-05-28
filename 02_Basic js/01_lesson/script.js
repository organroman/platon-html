// var name = "Ivan"; // Застарілий варіант.
// let surname = "Ivanov";
// const age = 14;

// let x;

// console.log(x);

// surname = "Not Ivan";

//  8 data types

/**
 *  1. String
 *       1. " word "
 *       2. ' word '
 *        3 ` hello ${surname}`
 *
 * 2. Number (-2^53 до 2^53)
 *      24, 54, 215, 3.14
 *
 *
 * 3. BigInt
 *
 * 4. Boolean
 *      true / false
 *
 * 5. Object
 *
 * 6. undefined
 * 7. null
 *
 * 8. symbol
 *
 */

const a = 2;
const b = 3;
const c = a + b; // 5

console.log("c", c);
console.log("c / 2", c / 2);
console.log("c * 2", c * 2);
console.log("c ** 2", c ** 2);

console.info("Something happened ", c);
console.warn("Warning");
console.error(" Error ");

const message = " Це повідмлення ";
// alert(message);

// let age = prompt(" Введіть ваш вік");
// console.log(age);

const isFormSent = confirm("Відправити форму? ")
console.log("🚀 ~ isFormSent:", isFormSent)
