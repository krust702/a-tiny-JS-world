import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const cat = {
   species: "cat",
   name: "Kitty",
   gender: "female",
   legs: 4,
   hands: 0,
   saying: "rusni-3,14da!"
}

const dog = {
   species: 'dog',
   name: 'Spike',
   gender: 'male',
   legs: 4,
   hands: 0,
   saying: 'Gav-gav!'
}

const male = {
   species: "human",
   name: "Pavlo",
   gender: "male",
   legs: 2,
   hands: 2,
   saying: "Pashodnazhui"
}

const female = {
   species: "human",
   name: "Lilia",
   gender: "female",
   legs: 2,
   hands: 2,
   saying: "Falcons forever"
}

const femka = {
   species: "cat",
   name: "Cat-women",
   gender: "It",
   legs: 2,
   hands: 2,
}
femka.saying = cat.saying;

let inhabitants = [cat, dog, female, male, femka];
let inhabitantsProp = ["species", "name", "gender", "legs", "hands", "saying"];

function inhabitantsKeys() {
   inhabitants.forEach((obj) => {
      print(inhabitantsProp.map((key) => obj[key]).join(", "));
   });
};
inhabitantsKeys();


// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */



/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
