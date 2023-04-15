// EP (Extended Play) Class File
class EP extends Project {
    constructor(title, artist, songs) {
        super(title, artist, songs);
    }

    // Returns that this Project is an EP
    get projType() {
        return "EP";
    }
}

