/*
 * Destructuring Arrays
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one] = things;
const [,,,two] = things;
const [,,,,,,,three] = things;

//commas to skip objects in the array



const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
