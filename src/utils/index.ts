// Create a function that takes two arguments and returns the sum.
// Write it as a regular function, an arrow function with and without implicit return.
// e.g. usage -> addTwoNumbers(5, 2) -> 7

export const addTwoNumbers = () => {};

// Find more exercises in this repo:

// Create a function {checkUserAccess} that takes a User object {name, email, permissions} and the expected permission.
// The permissions is a list of strings.
// The function should return true if the user has the permission required.

// e.g. usage -> checkUserAccess(user, "delete:user") -> boolean

export function checkUserAccess() {}

// Take an argument "amount" that can either be a number or it can be an object with the amount key.
// Return the actual amount.
export const coerceAmount = () => {};

// Fetch the following API "https://swapi.dev/api/people/1" and return just the name of the person.
// Make sure the resolved promise is correctly typed.

export async function fetchLukeSkywalker() {}

// *** Generics ***
// Write a simple function that returns exactly what you pass it as an argument.
export const returnWhatIPassIn = () => {};

// Write a function that takes an array of any type and returns the last element.
// Make sure the return type matches the initial structure.
export const returnLastElement = () => {};

// Write a function that takes an array of any object that might contain a property "shouldReturn".
// If the last element contains that property return it, otherwise return undefined.
// Make sure the return type matches the initial structure.
export const returnLastObjElement = () => {};
