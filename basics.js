var n = 10;

/* Addition */
function AdditionofNumbers() {
  var m = 20;
  var sum = n + m;
  console.log("Sum of two numbers is: " + sum);
}

AdditionofNumbers();

console.log("Value of n is: " + n);

/* Area */
function calculateArea(length, width){
let result;
result = length * width;
return result;
}

console.log('Calculate Area', calculateArea(8,2));

/* Calculate Area of Circle given radius */
function calculateCircleAreaWithRadius(radius){
  const pie = 3.14;
  let result = pie * (radius * radius);
  return result;
  }
  
console.log('Calculate circle Area with Radius', calculateCircleAreaWithRadius(2));

/* Calculate Area of Circle given diameter */
function calculateCircleArea(diameter){
  const pie = 3.14;
  let result = pie * (diameter);
  return result;
  }
  
console.log('Calculate circle Area with Diameter', calculateCircleArea(4));