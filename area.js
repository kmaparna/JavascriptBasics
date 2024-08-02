/* Area of a square */
/* Area = Side * Side */
function calculateAreaofSquare(side){
    let result;
    result = side * side;
    return result;
    }
    
  console.log('Calculate Area of Square', calculateAreaofSquare(4));
  
  /* Perimeter of a square */
  /* Perimeter = 4 * Side */
  function calculatePerimeterofSquare(side){
    let result;
    result = 4 * side;
    return result;
    }
    
  console.log('Calculate Perimeter of Square', calculatePerimeterofSquare(4));
  
  /* Area of a rectangle */
  /* Area = length * breadth */
  function calculateArea(length, width){
  let result;
  result = length * width;
  return result;
  }
  
  console.log('Calculate Area of rectangle', calculateArea(8,2));
  
  /* Calculate Area of Circle given radius */
  function calculateCircleAreaWithRadius(radius){
    const pie = Math.PI;
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
  
  /* Calculate Perimeter of Circle given radius */
  function calculateCirclePerimeterWithRadius(radius){
    const pie = Math.PI;
    let result = 2 * pie * radius;
    return result;
    }
    
  console.log('Calculate circle perimeter with Radius', calculateCirclePerimeterWithRadius(2));
  
  /* Calculate Perimeter of rectangle */
  function calculateRectanglePerimiter(length, width){
    let result = 2 * (length + width);
    return result;
    }
    
  console.log('Calculate Perimeter of rectangle', calculateRectanglePerimiter(4, 3));