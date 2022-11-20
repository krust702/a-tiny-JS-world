import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Inhabitant {
   constructor(species, name, gender, legs, saying) {
      this.species = species;
      this.name = name;
      this.gender = gender;
      this.legs = legs;
      this.saying = saying;
      this.spec = [
         { spec: "species", info: "I am a" },
         { spec: "name", info: "My name is" },
         { spec: "gender", info: "Gender" },
         { spec: "legs", info: "Legs:" },
         { spec: "saying", info: "Devise" },
      ]

   }
   getInhabitantInfo() {
      return this.spec.map(({ spec, info }) => `${info} ${this[spec]}`).join("; ");
   };
};

class Human extends Inhabitant {
   constructor() {
      super("human", name, 2, saying)
      this.hands = 2;
      this.spec = [
         ...this.spec,
         { spec: "hands", text: "I have hands" }
      ]
   }
}

class Man extends Human {
   constructor(name, saying) {
      super(name, "male", saying)
   }
}

class Woman extends Human {
   constructor(name, saying) {
      super(name, "female", saying);
   }
}

class Animal extends Inhabitant {
   constructor(species, name, gender, saying) {
      super(species, name, gender, 4, saying);
      this.spec = [
         ...this.spec
      ]
   }
}

class Cat extends Animal {
   constructor(name, gender) {
      super("cat", name, gender, "Meow");
   }
}

class Dog extends Animal {
   constructor(name, gender) {
      super("dog", name.gender, "Gav")
   }
}

let inhabitants = [
   new Woman("Lilia", "Hi"),
   new Man("Pavlo", "rusni 3.14zda"),
   new Woman("Agripina", "Aspirina"),
   new Dog("Spike", "male"),
   new Cat("Kitty", "female"),
]

inhabitants.forEach((inhab) => {
   print(inhab.getInhabitantInfo())
})


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
