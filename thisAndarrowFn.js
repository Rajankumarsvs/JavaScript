const user ={
   
        username:"rajan",
        price:989,

        welcomeMassage: function(){
                             console.log(`${this.username} , welcome to website`);
                            
        }

        
}

//user.welcomeMassage()


   function chai1(){
        let username = "Rajan"
        console.log(this.username); // this keyword is not working is function this working in OBject only
   }
//chai()

  const chai = ()  => {
      let username ="Rajan "
      console.log(this.username);
  }

 // chai()

 const addTwo = (num1, num2) =>{
        return num1 + num2
 }

 //console.log(addTwo(123,213));


 const addTwo1 = (num1, num2) => ( num1 + num2)  // this () use to aviod the write {} and return 
 
 const addTwo2 = (num1, num2)  => ({username:"Rajan "})  // this way to write code the return Object
 //console.log(addTwo1(123,213));

// console.log(addTwo2(2,24));





  
