// Last version:
/*function makePerson(first, last, age) {
    return{
        first : first,
        last  : last,
        age   : age,
        isAlive: true
    };
}*/

function makePerson(first, last, age) {
    return{
        first,
        last,
        age,
        isAlive: true
    };
}

// JavaScrip will interpret that you want to add a key with the value
//of the name of the key. 

//A method is a function you are storing as property in a obeject. 
 /*const mathStuff = {
    x : 200, 
    add:function(a, b) {
        return a + b;
    },
    square : function(a) {
        return a * a;
    }
 }*/

// A nice shorthand when a key in an object represents a function.
//Do not use arrow functions. 
const mathStuff = {
    x : 200, 
    add(a, b) {
        return a + b;
    },
    square(a) {
        return a * a;
    }
 }

 //Computed property names. 
 // Is a consise way of adding a key to an object where the key name
 //is a variable. 

 // Old way to make keys dynamic. 
 /*function makeColor(name, hex) {
    const color = {};
    color[name] = hex;
    color[hex] = name;
    return color;
 }*/


 // New ways to make key dynamic.
 function makeColor(name, hex) {
    return {
    [name] : hex,
    [hex] : name
    };
 }

 //We can code within the the [] brackets, keep it simple to avoid 
 //issuses with scope.

 //Object Enhacements Exercise. 

 // Same keys and values
/*function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }*/

  function createInstructor(firstName, lastName) {
    return {
        [firstName] : lastName,
        [lastName] : firstName
    };
  }

  // Computed property names.
  /*var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"*/

const favoriteNumber = 42;

const instructor = {
    firstName : "Colt",
    [favoriteNumber] : "That is my favorite number!"
}

/*Object Methods

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}*/

var instructorII = {
  firstName : "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return "Says bye!";
  }
}

/*createAnimal function

Write a function which generates an animal object. The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered.

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"}*/

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}