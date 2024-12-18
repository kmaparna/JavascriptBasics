function x(){
    var a = 10;
    function y(){
        console.log(a);
    }
    y();
}
x(); //output: 10


function x1(){
    let a = 10;
    function y(){
        console.log(a);
    }
    y();
}
x1(); //output: 10


function x2(){
    var i=10;
    setTimeout(() => {
        console.log(i)
    }, 1000);
    console.log('outside function');
}

x2(); 
//output:
//outside function
//10


function x3(){
    for(var i=0;i<=5;i++){
        setTimeout(() => {
            console.log(i)
        }, i* 1000);
    }
}

x3();
//output: 6 printed for 5 times


//Create a function to display numbers from 1-5 with delay same as number.
function x4(){
    for(let i=0;i<=5;i++){
        setTimeout(() => {
            console.log(i)
        }, i* 1000);
    }
}

x4(); //output: 0 1 2 3 4 5

function x5(){
    for(let i=0;i<=5;i++){
        function closureex(x){
        setTimeout(() => {
            console.log(x)
        }, x* 1000);
    }
    closureex(i);
    }
}

x5(); //output: 0 1 2 3 4 5

function x6(){
    var a=1000;
    function innerfn(){
        console.log('Return function', a);
    }
    return innerfn;    
}

x6(); //output: returns only function
x6()(); //output: Return function 1000
var outterfn = x6();
outterfn(); //output: Return function 1000

function x7(){
    var c= 50;
    function x7inner(b){
    
    function innerfn(){
        console.log(a, b, c);
    }
    let a=1000;
    return innerfn;    
}
return x7inner;
}

x7()(200)('hello'); //1000 200 50

//function to incremet and decrement counter using closue
function Counter(){
    var count = 0;
    this.incrementCounter = function(){
count++;
console.log('Increment count', count);
    }

    this.decrementCounter = function(){
        count--;
        console.log('Decrement count', count);
            }
}

var counter1 = new Counter(); // Counter acts as constructor, so new keyword
counter1.incrementCounter();
counter1.decrementCounter();

//Garbage collection example
function garbagecoll(){
    var a = 10, b=200;
    return function innerfn(){
        console.log(a);
    }
}

var garbagefn = garbagecoll();
garbagefn();
//output: 10 
//if i try to access console.log(b) while debugging at line121 it throws reference error, because while forming 
//closure b is unused and thrown into garbage to avoid memory leak.




