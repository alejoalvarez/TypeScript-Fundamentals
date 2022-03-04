export {}

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity{
    id: number;
    title: string;
}

interface Album extends Entity{
    description: string;
}

interface Picture extends Entity{    
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1, 
    description:'description1',
    title: 'Anything'
}

const picture: Picture = {
    id: 2,
    title: 'Title1',
    orientation: PhotoOrientation.Panorama
}

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Sun';

console.log('>>Album:', album);
console.log('>>Picture:', picture);
console.log('>>NewPicture:', newPicture);