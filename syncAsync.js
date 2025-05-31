function firstFunction(){
    console.log('First function');    
}

function secondFunction(){
    console.log('Second function');    
}

function mainFunction(){
    console.log('Main Function');
    setTimeout(firstFunction, 0);
    secondFunction();
}

mainFunction();

// Output: setTimeout is a browserAPI, javascript will put setTimeout into Callback queue and other items will 
            // execute in callstack. AFter callstack is empty then javascript will pick from callback queue and starts excecuting it.
// Main Function
// Second function
// First function
