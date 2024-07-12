 const myNums=[1,2,3,4,5,6,7,8,9,10]

//  const newNums= muNums.filter(  (num) =>num > 4  )
 
   

//    const newNums= [ ]
  
//    muNums.forEach(  (num) =>{
//     if(num>4){
//         newNums.push(num)
//     }
//    }  )

//    console.log(newNums);

//const newNums=myNums.map( (number) =>  number*6   )  // this code run

// const newNums=myNums.map(  (n) =>{      //  this is block scope so you can write return then run the program
//     return n+1
// }   )
// console.log(newNums);

const newNums= myNums
                             .map(  (num) => num  * 10    ) // all types return what about you Do......
                             .map(  (num) => num + 5 )
                            .filter(  (num) => num >= 40  )  // filter is useing true and false
                            
                             console.log(newNums);  


// Reduse

// simple function

//const myNums =[1,2,3,4]

// const myTotal= myNums.reduce( function (acc, currval) {
//         console.log(`acc:${acc} and currvalue: ${currval}`);
//     return acc + currval 

// }, 0 )

// ARROW Function

// const myTotal=myNums.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currvalu: ${currval}`);
//     return acc + currval } ,  0 )


// console.log(myTotal);


// const shoppingCart=[
//     {
//         itemName:"js course",
//         price:1999
//     },
//     {
//         itemName:"java course",
//         price:9999
//     },
//     {
//         itemName:"c++ course",
//         price:5999
//     },
//     {
//         itemName:"c course",
//         price:1199
//     },
// ]


// const bill= shoppingCart.reduce( (acc, item) => acc + item.price,   0 )

// console.log(bill);





