// implement caching/Memoize function

const letsMemoize = (fn) => {
  const res = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(this, ...args);
    }
    return res[argsCache];
  };
};

const calcSquare = (num1, num2) => {
  for (let i = 0; i < 1000000; i++) {}
  return num1 * num2;
};

const memoizedSquare = letsMemoize(calcSquare);

console.log('start first-', performance.now());
console.log('result--1->', memoizedSquare(9467, 7649));
console.log('end first', performance.now());

console.log('start second-', performance.now());
console.log('result--2->', memoizedSquare(9467, 7649));
console.log('end second', performance.now());
