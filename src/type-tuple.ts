export {}; 

// [1, 'user']
let user: [number, string];
user = [1, 'Alejo'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuples with several values
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'alejo1', true];
console.log('userInfo', userInfo);

// Array of Tuples
let array: [number, string][] = [];
array.push([1, 'alejo11']); // 0
array.push([2, 'alejo22']); // 1
array.push([3, 'alejo33']); // 2
console.log('array', array);

// functions on Array
// alejo33 -> alejo33001

array[2][1] = array[2][1].concat('001'); // alejo33001
console.log('array', array);