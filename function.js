function greet()
{
   console.log("hiii "); 
}
greet();    
function logGreet(fn)
{
    fn();
}
logGreet(greet);


//Function Expression

var greetmsg = function(){
    console.log("Hello ");
}

logGreet(greetmsg);

//using function expression on fly means in  call
logGreet(function(){
    console.log("Hello from function fly");
} );