// Project Class File
// The project class is to act as a purely abstract parent class for the Single,
// EP, and Album classes
class Project {
    constructor(title, artist, songs) {
        this.title = title;
        this.artist = artist;
        this.songs = songs;
    }

    // Getters
    // Returns the type of project the object is. In this case,
    // this getter will be considered purely virtual and should 
    // only return proper input for a Single, EP, or Album
    get projType() {
        return;
    }


    // Project Editing
    // Given a song object, adds the song to the project's songs. If an
    // index for the song is also give, adds the song to the songlist
    // at that index
    addSong(song, i = this.songs.length) {
        if (!(song instanceof Song))
            throw new TypeError(`Only Song objects may be added to a(n) ${this.projType}.`);

        if (i < 0 || i > this.songs.length)
            throw new RangeError(`Index ${i} is out of range for ${this.projType} ${this.title}.`);

        this.songs.splice(i, 0, song);
    }

    // Given the index of a song in a project, attempts to remove the song
    // from the project
    removeSong(i) {
        if (i < 0 || i > (this.songs.length - 1))
            throw new RangeError(`Index ${i} is out of range for ${this.projType} ${this.title}.`)

        this.songs.splice(i, 1);
    }
}

