// setTimeout(() =>{                        // this function run one time after given time
//   console.log("Rajan Yadav");
// }, 2000)

sayRajan = () =>{
      
   // console.log("Rajan jii");                 // ya create variabale and store function then call
}

setTimeout(sayRajan,3000)

const changeText = function(){
    document.querySelector('h1').
    innerHTML = "Best js code "
}

const changeMe = setTimeout(changeText, 
    2000)

 document.querySelector('.stop').
 addEventListener ('click', function(e){
    clearTimeout(changeMe)
    console.log("STOPED");
 })