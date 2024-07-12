  /******         Invoked Function Expressions                    ***** */


   (function chai(){
     // name IIFE
        console.log(`DB connection`);  
    } )  ();                                               // u can write this way v


(  (name) =>{
    // without name IIFE
    console.log(`DB Connection to........${name}`);
}
) ('Rajan Yadav')                                                          // and also this way just rember u can use user before ; this sin......