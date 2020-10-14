//QandA
//usually missing a return 
//usually see a .this
//




function Person(name, age){
this.name = name;
this.age = age;
this.stomach = [];
}
//create eat method 
Person.prototype.eat = function(edible){
    if(this.stomach.length <= 10){
        this.stomach.push(edible);
    }
}
//give the person the ability to poop, this will empty their tomach
Person.prototype.poop = function(){
    this.stomach = [];
}
Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
}
//creating our object here
const personOne = new Person("Grady", 25);
//invoke methods
personOne.eat("Pineapple");
personOne.eat("broccoli");

console.log(personOne.stomach)

personOne.poop();
console.log(personOne.stomach);
console.log(personOne.toString());
//note: left of the dot, implicit binding, *left of the string 

console.log('another examples---------------------')


function Pet(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.phrase = attributes.phrase;
}

Pet.prototype.speak = function(){
    return `&{this.name} says ${this.phrase}`
}

//now we create a child
function BabyPet(attribues){
    Pet.call(this, attribues);//binding .this to the parent.

}

//also had to tell the pet to inherit the method by:
BabyPet.prototype = Object.create(Pet.prototype);//giving the baby pet the abilityt to speak 

//now we create our object
const bigPet = new Pet({
    name: 'ada',
    age: 3,
    phrase: 'bark bark',
})

const littlePet = new BabyPet({
    name: 'noa',
    age: 1,
    phrase: 'woof woof',
})
//if worked little and big pet should be able to speak

console.log(bigPet.speak())
//this key word in the method is being assigned here -when the fucntion is invoked we look to the left of the dot, thats what this refers to
console.log(littlePet.speak())


//explicit

function speak(){
    console.log(this.bark);
}

const Ada = []