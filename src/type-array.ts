// []

// explicit type
let users: string[];
users = ['Alejo1', 'Alejo2', 'Alejo'];
// users = [1, true, 'test']; // Error

// inferred type
let otherUsers = ['user1', 'user2', 'user3'];
// otherUsers = [1, true, 'test']; // Error

// Array<type>
let pictureTitles: Array<string>;
pictureTitles = ['picture1', 'picture2', 'picture3'];

// get values in an Array
console.log('first user', users[0]);
console.log('fist title', pictureTitles[0]);

// Properties in Array
console.log('users.length', users.length);

// Functiosn in Arrays
users.push('userNew');
users.sort();
console.log('users', users);