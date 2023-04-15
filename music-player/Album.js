// Album Class File
class Album extends Project {
    constructor(title, artist, songs) {
        super(title, artist, songs);
    }

    // Returns that this Project is an Album
    get projType() {
        return "album";
    }
}

