export{};

// <type> // Angle Bracket Syntax
let username: any;
username = 'Alejo';

let message: string = (<string>username).length > 4 ? 
                `Welcome ${username}`: 'User is too short';

console.log('>>messageAngleBracket:', message);

let usernameWithId: any = 'Alejo';
usernameWithId = (<string>usernameWithId).substring(0,5);
console.log('>>Username only:', usernameWithId);

//Syntax "as"
message = (username as string).length > 5?
            `Welcome ${username}`: 'User is too short';
console.log('>>messageAs', message);
