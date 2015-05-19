var geometry = require('./index.js');
// console.log( 'The area of a circle of radius 4 is '
//            + geometry.circlearea(4));

// console.log( 'The circumfrence of a circle of radius 4 is ',
//            geometry.circlecircumfrence(4));

// console.log( 'The area of a square with sides of 4 ',
//            geometry.squarearea(4));

console.log( 'The roots of ax2 + bx + c are: ',
           geometry.quadratic(1,-4,4));

console.log( 'The volume of a sphere with radius 5 is: ',
           geometry.spherevolume(5));

console.log( 'The margin of error is: ',
           geometry.marginerror(10,0.8));
