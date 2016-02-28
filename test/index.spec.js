'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;
const partial = require('../lib/');

describe('partial-any', () => {
  const addAndMultiply = (x, y, z) => x + y * z;

  it('should be able to create equivilent functions', () => {
    const first  = partial(addAndMultiply, undefined, 2, 3);
    const second = partial(addAndMultiply, 1, undefined, 3);
    const third  = partial(addAndMultiply, 1, 2, undefined);
    let one = first(1);
    let two = second(2);
    let three = third(3);
    return expect(one === two && two === three).to.be.ok;
  });

});
