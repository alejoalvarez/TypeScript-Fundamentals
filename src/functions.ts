//create a picture

type SquareSize = '100x100' | '400x400' | '900x900';

function createPicture(title: string, date: string, size: SquareSize){
    console.log('>>Create picture:', 'title:', title, 'date:', date, 'size:', size )
}

createPicture('Picture1','2022-03','400x400');

// Optional parameters
function createPictureOptional(title: string, date: string, size?: SquareSize){
    console.log('>>Create picture:', 'title:', title, 'date:', date, 'size:', size )
}

createPictureOptional('Picture2','2022-03','900x900');
createPictureOptional('Picture2','2022-03');
createPictureOptional('Picture2','2022-03',undefined);

function createPictureOptional2(title: string, date: string, size: SquareSize){
    console.log('>>Create picture:', 'title:', title, 'date:', date, 'size:', size )
}

createPictureOptional2('Picture2',undefined, '100x100');

// fat array function
let createPic= (title: string, date: string, size:SquareSize): object =>{
    // way 1
    //return {
    //    title:title,
    //    date:date,
    //    size:size
    //}

    // way 2 and best way 
    return{ title, date, size};
}

const picture = createPic('Alejo2', '2022-03-11','900x900');
console.log('>>Picture:', picture)
