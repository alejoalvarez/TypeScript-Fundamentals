// explicit type
// number type
let phone : number;
phone = 12345;
//phone = "Hello"; // Error

//inferred type
let phoneNumber = 12345;
phoneNumber = 123;
// phoneNumber = true // Error by type

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let isBoolean2 : Boolean;

// boolean type
let isBoolean = true; // inferred type
isBoolean = false;
let isPro : boolean; // explicit type
isPro = true;
//isPro = 10; // Error

// Strings
let username: string = 'Alejo';
username = "Alejo1"
//username = true // Error

// Template String and back-tick (`)
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    phone: ${phone}
    isPro: ${isBoolean}
`;

console.log("UserInfo:", userInfo);