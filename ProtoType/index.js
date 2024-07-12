 // New keyword use 
 
 
 function multipley5(num){
    return num*5
}

console.log(multipley5(5));

multipley5.power= 2

console.log(multipley5.power);
console.log(multipley5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)

chai.printMe()