export {}

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Properties
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    //Behavior
    toString(){
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album{
    private id: number;
    private title: string;
    private pictures: Picture[];

    constructor(id:number, title: string){
        this.id = id;
        this.title = title
        this.pictures = []
    }

    addPicture(picture: Picture){
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, "Album1");
const picture: Picture = new Picture(1, 'Picture 1', PhotoOrientation.Landscape);
album.addPicture(picture);
console.log('>>Album:', album)
console.table({album});