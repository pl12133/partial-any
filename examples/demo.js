'use strict';
const partial = require('../lib/');

let debug = partial(console.log, 'DEBUGGING:');
debug('Easy debugging messages');

let delayedFiveSeconds = partial(setTimeout, undefined, 5000);
delayedFiveSeconds(() => console.log('I take 5 seconds to print!'));

let triangleArea = (base, height) => base * height / 2;

let threeFootBaseTriangleArea = partial(triangleArea, 3);

let fiveFootHeightTriangleArea = partial(triangleArea, undefined, 5);

console.log('Triangles are equal area?: ', threeFootBaseTriangleArea(5) === fiveFootHeightTriangleArea(3));
