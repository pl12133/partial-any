'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;
const partial = require('../lib/');

describe('partial-any', () => {

  it('should return a function when called with a function', () => {
    expect(partial(partial)).to.be.a('function')
  })
  it('should be able to create equivilent functions', () => {
    const addAndMultiply = (x, y, z) => x + y * z;
    const first  = partial(addAndMultiply, undefined, 2, 3);
    const second = partial(addAndMultiply, 1, undefined, 3);
    const third  = partial(addAndMultiply, 1, 2, undefined);
    const one = first(1);
    const two = second(2);
    const three = third(3);
    expect(one === two && two === three).to.be.ok;
  })
  it('should apply all arguments to returned function', () => {
    const cat = (...args) => {
      return args;
    }
    const tenNumbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]
    const tenLetters = ['a', 'b', 'c', 'd', 'e', 'd', 'c', 'b', 'a']
    const partNumbers = partial(cat, ...tenNumbers);
    expect(partNumbers(...tenLetters)).to.deep.equal(tenNumbers.concat(tenLetters));
  })
  it('should be chainable with itself', () => {
    const fn = partial(partial(partial(partial)));
    const otherFn = fn(fn(fn(fn)));
    const add = (a, b) => a + b;

    expect(otherFn(add, 1)(2)).to.equal(otherFn(add, undefined, 2)(1))
  })
  it('should return undefined if arguments are undefined', () => {
    expect(partial(undefined)).to.be.undefined;
    expect(partial(partial, undefined)).to.not.throw(Error);
  })
  it('should throw an error if its first argument is not a function or undefined', () => {
      expect(partial(partial, 'oops')).to.throw(TypeError);
  })
});
