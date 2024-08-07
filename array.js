// Declaration of an Array: 2 ways
// let arrayName = [value1, value2, ...]; // Method 1
// let arrayName = new Array(); // Method 2

// Initializing while declaring
    // Creates an array having elements 10, 20, 30, 40, 50
    var arrayOfNumbers = new Array(10, 20, 30, 40, 50);
    
    // Creates an array of 5 undefined elements
    var arrayOfUndefinedItems = new Array(5);
    
    // Creates an array with element Apple
    var fruitsArray = new Array("Apple");
    console.log(arrayOfNumbers) //Output: [10, 20, 30, 40, 50]
    console.log(arrayOfUndefinedItems) //Output:[empty × 5]
    console.log(fruitsArray) //Output:['Apple']

    // String written inside quotes
    var x = "Welcome to Javascript!";
    console.log(x); //Output:Welcome to Javascript!
    
      // Declare an object
    var y = new String("Welcome to basics");
   console.log(y); //Output: (forms object) -> String {'Welcome to basics'}
   // 0: "W" 1: "e" ..... length: 17