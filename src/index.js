'use strict';

const partial = (fn, ...partialArgs) => {
  if (fn === undefined) {
    return undefined;
  }
  if (typeof fn !== 'function') {
    throw new TypeError('partial: First argument must be a function');
  }
  return (...restArgs) => {
    var arg = 0;
    for ( var i = 0; i < partialArgs.length && arg < restArgs.length; i++ )
      if ( partialArgs[i] === undefined )
        partialArgs[i] = restArgs[arg++];
    return fn(...partialArgs.concat(restArgs.slice(arg)));
  };
};

module.exports = partial;
