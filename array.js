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

   //Using square bracket to Access Elements in an Array
   const array = [10, 20, 30, 40, 50];
    const item = array[3];
    console.log(item); //Output: 40

    //Using for loop to Access Elements in an Array
    const looparray = [100, 200];
    looparray.forEach((element, index) => {
      console.log(`The Element at index ${index}: ${element}`);
    });  //forloop Modifies the same looparray.
    //Output: 
    //The Element at index 0: 100
    // The Element at index 1: 200

    //Using map to Access Elements in an Array
    const maparray = [10, 20];
    const newarray = maparray.map((element, index) => {
        return `The Element at index ${index}: ${element}`;
    }); //map creates a new array and updates item of the new array.
    console.log(newarray);

    //Output: 
    // [
    //The Element at index 0: 100
    // The Element at index 1: 200
    //]
   

    //Using find() Method in array
    const findArray = [20, 30, 40];
    const findResult = findArray.find((element) => element > 20) //Returns first element in the array that satisfies a provided testing function
    console.log('Find item greater than 20 using find: ', findResult);

    //Output: 
    //Find item greater than 20: 30

    //Using Destructuring Assignment in array
    let [firstFruit, , thirdFruit] = ["apple", "banana", "Pear"];
    console.log('First Fruit:', firstFruit);
    console.log('Second Fruit:', );
    console.log('Third Fruit:', thirdFruit);

    //Output: 
    // First Fruit: apple
    // Second Fruit:
    // Third Fruit: Pear

    //Using Destructuring Assignment in array
    let [firstFruit1, , thirdFruit1] = ["apple", "banana"];
    console.log('First Fruit:', firstFruit1);
    console.log('Second Fruit:', );
    console.log('Third Fruit:', thirdFruit1);

    //Output: 
    // First Fruit: apple
    // Second Fruit:
    // Third Fruit: undefined

    //Using filter Method in array
    const filterArray = [10,20,30,40,50];
    const filterResult = filterArray.filter((element) => element > 20);
    console.log('Find item greater than 20 using filter: ', filterResult);

    //Output:
    //[30,40,50]

//Accessing array
let text="Engineer";
/* uncomment while executing */
//text[11] = "F";
//console.log("Accessing text: ", text);
/* uncomment while executing */

//Output: Uncaught TypeError: Cannot create property '11' on string 'Engineer'

let text1="Engineer";
/* uncomment while executing */
// text1[1] = "F";
// console.log("Accessing text: ", text);
/* uncomment while executing */

//Output: Uncaught TypeError: Cannot assign to read only property '1' of string 'Engineer'

//javascript with
const withArray = [2,4,6,8];
//Replace 6 with 10 in the array. We can use with if we do not want to mutate the original array
//withArray[2] = 10, will give the same result but it updates the original array
const newWithArray = withArray.with(2, 10); //with(index, newitemtobereplaced)
console.log("newWithArray ", newWithArray);
//Output: [2, 4, 10, 8]
const newNegativeWithArray = withArray.with(-2, 12); //with(index, newitemtobereplaced)
console.log("newNegativeWithArray ", newNegativeWithArray);
//Output: [2, 4, 12, 8]
//We can use javascript at to fetch the items from the array
console.log("with array at index -2", withArray.at(-2));
//Real-time usecase
const multipliedarray = withArray.with(-1, 14).map(x => x * 2)
console.log("change witharray index -1 to 14 and multiply with array by 2", multipliedarray);


