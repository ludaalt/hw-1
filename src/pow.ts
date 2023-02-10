const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};

const getPow = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
  return Math.pow(a, b);
};

const pow = curry(getPow);

export default pow;
