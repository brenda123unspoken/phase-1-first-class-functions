 //anonymous function

const chai = ("chai") 
const spies =("chai-spies")   //takes no arguments
    
        console.log("chai-use spies");
    


const spy = (chai.spy); 
 //returned function assigned to a new variable
console.log (spy);


//named function
//function takes no arguments, returns itself
function returnsANamedFunction() {
   
        console.log("This is a named function");

}
returnsANamedFunction();


//callback function

// Define the function, takes the function "callback" as an argument
function recievesAFunction(callback) {
  
        // Call the callback function
        callback();
    } 

//define the callback function
function callback() {
    console.log("This is a callback function!");
}

// Call the function with the callback
recievesAFunction(callback) ;
//anonymous function

const returnsAnonymousFunction = () => {   //takes no arguments
    return () => {
        console.log("This is an anonymous function");
    };
};

const newFunction = returnsAnonymousFunction();  //returned function assigned to a new variable
newFunction();
