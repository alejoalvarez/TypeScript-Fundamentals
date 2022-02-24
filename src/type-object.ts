// Type: object
let user: object;
user = {}; // Object

user = {
    id: 1,
    username: 'Alejo',
    firstName: 'chiki',
    isPro: true
};

console.log('user', user);
// Object vs object(Clase JS vs tipo TS)
const myObj = {
    id: 1,
    username: 'Alejo',
    firstName: 'chiki',
    isPro: true
};

const isInstance = myObj instanceof Object; // clase Object JavaScript

console.log('isInstance', isInstance);
console.log('user.username', myObj.username);