let myName = 'Rajan'
let mychai = 'chai'
console.log(myName.trueLength);


let myHero = ['thor','spidarman',]

let heroPower ={
    thor:'hammar',
    spidarman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spidarman}`);

    }
}
  
Object.prototype.rajan = function(){   // inject object in acces all type  like array string function  just use keword {prototype}
    console.log(`rajan is present in all object`);
}

Array.prototype.myArray = function(){
    console.log(`rajan say hello`);
}
//heroPower.rajan()

myHero.rajan()
myHero.myArray()
// heroPower.myArray()   // this all able to acces becouse this is out off bouldry



// Inheritance


const user ={
    name:'chai',
    email:'@gahmil.com'
}
const Teacher = {
    mkevideo:true
}
const teSupport = {
    isAlive: false
}

const TaSupport = {
    makeassigement: 'js assign',
    fulltime: true,
    __proto__: teSupport
}

Teacher.__proto__ = user


// morden syntax

Object.setPrototypeOf(teSupport, Teacher)

let anotherUserName = "chaiaurcode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUserName.trueLength()

"Rajan".trueLength()
"ice".trueLength()