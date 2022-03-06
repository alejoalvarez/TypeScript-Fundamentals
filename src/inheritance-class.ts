export {}

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

// Superclass
abstract class Item{
    protected _id: number;
    protected _title: string;  

    constructor(id:number, title: string){
        this.id = id;
        this.title = title;
    }

    get id(){
        return this._id;
    }

    set id(id:number){
        this._id = id;
    }

    get title(){
        return this._title;
    }

    set title(title: string){
        this._title = title;
    }

}

class Picture extends Item{
    //Properties    
    private _orientation: PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation){
        super(id,title);        
        this._orientation = orientation;
    }

    

    get orientation(){
        return this._orientation;
    }

    set orientation(orientation: PhotoOrientation){
        this._orientation = orientation;
    }

    //Behavior
    toString(){
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album extends Item{        
    private _pictures: Picture[];

    constructor(id:number, title: string){
        super(id,title);        
        this._pictures = []
    }    

    addPicture(picture: Picture){
        this._pictures.push(picture);
    }
}

const album: Album = new Album(1, "Album1");
const picture: Picture = new Picture(1, 'Picture 1', PhotoOrientation.Landscape);
album.addPicture(picture);
console.log('>>Album:', album)
console.table({album});

picture.id = 100;
picture.title = 'Another album';
album.title = 'Another title';
console.log('>>Album', album)