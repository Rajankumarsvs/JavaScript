class user {
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`username is: ${this.username}`);
    }
}

class Techer extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai = new Techer ("chai", 'chai@gmail.com','2334')

chai.addCourse()

const tea = new user ('username')

tea.logMe()


