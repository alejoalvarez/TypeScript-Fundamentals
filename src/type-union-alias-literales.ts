export {};

// 10, '10'
let idUser: number | string;
idUser = 10;
idUser = '10';

// Find an username by Id
function getUsernameById(id: number | string): string {
    // business logical, find the user
    console.log('>>id union:', id);   
    return 'alejo1';
}

getUsernameById(20);
getUsernameById('45');

// Alias of types: TS
type IdUser = number | string; // define the alias
type Username = string;
let idUser2: IdUser;
idUser = 10;
idUser = '10';

// Find an username by Id
function getUsernameById2(id: IdUser): Username {
    // business logical, find the user
    console.log('>>id alias:', id);   
    return 'alejo2';
}

getUsernameById2(15);
getUsernameById2('85');

// literal types
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000'
//let smallPictures: SquareSize = '200x200' //Error
let smallPictures: SquareSize = '100x100'
let mediumPictures: SquareSize = '500x500'
let largePicture: SquareSize = '1000x1000'