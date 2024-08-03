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