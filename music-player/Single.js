// Single Class File
class Single extends Project {
    constructor(title, artist, songs) {
        super(title, artist, songs);
    }

    // Returns that this Project is a Single
    get projType() {
        return "single";
    }
}

