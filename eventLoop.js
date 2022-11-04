// what will be the Output ?

console.log('a');
setTimeout(() => console.log('Hello'), 0); // Not a part of JS it's a WebAPI - TaskQueue
Promise.resolve(() => console.log('Brother')).then((res) => res());
console.log('b');

//  t.me/dev_roshan
