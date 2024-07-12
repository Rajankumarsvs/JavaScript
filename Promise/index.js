const promiseNum1 = new Promise( (resolve,reject) =>{
    // Do an async task
    //DB calls , cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseNum1.then(function(){
    console.log("Promise consumed");
}) 


new Promise(function(resolve, reject){
    setTimeout(function(){
           console.log("async task 2");
           resolve()
    }, 1000)
}).then(function(){
    console.log("async resolve 2");
})


const PromiseNum3 = new Promise(function(resolve,reject){
    setTimeout( function(){
         resolve({username:"rajan",email:"rajan@example.com"})
    },1000)
})

PromiseNum3.then(function(user){
    console.log(user);
})


Promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Rajan yadav", password:"3234"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
 Promisefour
 .then((user) =>{
    console.log(user);
    return user.username
}).then( (myUser) =>{
    console.log(myUser);
}).catch(function(error){
    console.log(error);
}).finally( () => console.log("the promise is either resolve or rejected"));

//  // you can try any one async catch ya then, finally  

const promiseNum5 = new Promise( function(resolve, reject){
    setTimeout( function(){
        let error = true
        if(!error){
            console.log({username:"Js", password:"32421"});
        }else{
            reject('ERROR: Js went wrong')
        }
    }, 1000)
});
                 // you can try any one async catch ya then, finally
async function consumepromiseNum5(){
   try{
    const response = await promiseNum5
    console.log(response);
   } catch (error){
    console.log(error);
   }
}
consumepromiseNum5()




// async function getAllUser (){
//   try{
//     const response = await fetch('https://api.github.com/users/RajanKumarsvs')
//     const data = await response.json()
//     console.log(data);
//   } catch (error){
//     console.log("E: ", error);
//   }
// }

//getAllUser()


fetch('https://api.github.com/users/RajanKumarsvs')
.then( (response) =>{
    return response.json()
})
.then( (data) =>{
console.log(data);
})
.catch((error) => console.log(error))