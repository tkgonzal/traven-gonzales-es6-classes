// MusicPlayer Class File
class MusicPlayer {
    // Takes a library, which is an array of project objects
    constructor(library) {
        this.library = library;
        this.queue = [];
        this.loop = false;
        // the following are used to indicate the current songs playing
        this.currProj = null;
        this.currSong = null;
    }

    // MusicPlayer state editing
    // Given the index of a project and index of a song in that project,
    // plays the song. Returns the song the project index of the project
    // at the library index
    playSong(libI, projI) {
        if (libI < 0 || libI > (this.library.length - 1))
            throw new RangeError(`Index ${libI} is out of range for music player library.`);
        const proj = this.library[libI];
        if (projI < 0 || projI > (proj.songs.length - 1))
            throw new RangeError(`Index ${projI} is out of range for ${proj.projType} ${proj.title}.`);

        this.currProj = libI;   // Index of project in library
        this.currSong = projI;  // Index of song in project

        return proj.songs[projI];
    }

    // Pauses the playback of the current album
    pause() {
        if (this.currProj !== null) {
            this.currProj = null;
            this.currSong = null;
        } else {
            throw new Error("Cannot pause when no project is playing");
        }
    }

    // Plays the next song. If there are songs in queue, plays the next queued song.
    // If there are more songs in the project to be played, plays the next song.
    // If there are no songs left to be played, resets the play tracker, unless
    // the loop flag is on, then play resumes from top of project.
    playNext() {
        if (this.queue.length > 0)
            return this.queue.shift();

        if (this.currProj === null)
            throw RangeError(`No project is being played and there are no songs in queue`);

        const proj = this.library[this.currProj];
        if (this.loop) {
            this.currSong = (this.currSong + 1) % proj.songs.length;
            return proj.songs[this.currSong];
        } else {
            if (++this.currSong >= proj.songs.length) {
                this.currProj = null;
                this.currSong = null;
                return "END";
            }
            return proj.songs[this.currSong];
        }
    }

    // Toggles the loop flag
    toggleLoop() {
        this.loop = !this.loop;
    }

    // Given the index of a project in the library and an index of a song in the
    // project, attempts to add the sond to the queue
    queueSong(libI, projI) {
        if (libI < 0 || libI > (this.library.length - 1))
            throw new RangeError(`Index ${libI} is out of range for music player library.`);
        const proj = this.library[libI];
        if (projI < 0 || projI > (proj.songs.length - 1))
            throw new RangeError(`Index ${projI} is out of range for ${proj.projType} ${proj.title}.`);

        const queuedSong = this.library[libI].songs[projI];
        this.queue.push(queuedSong);
        return queuedSong;
    }

    // Library Editing
    // Given the index of a project in the library, returns the project at that
    // index
    getProj(i) {
        if (i < 0 || i > (this.library.length - 1))
            throw new RangeError(`Index ${i} is out of range for music player library.`);

        return this.library[i];
    }

    // Given a project, attempts to add it to the library
    addProj(proj) {
        if (!this.isValidProj(proj))
            throw new TypeError(`Only Single, EP, and Album objects may be added to the libary.`);

        this.library.push(proj);
        return proj;
    }

    // Given an index of a project in the library, attempts remove the project
    // at the index
    removeProj(i) {
        if (i < 0 || i > (this.library.length - 1))
            throw new RangeError(`Index ${i} is out of range for music player library.`);
        if (i === this.currProj)
            throw new Error("Cannot delete the album currently being played");

        this.library.splice(i, 1);
        return `Removed project in library at index ${i}`;
    }

    // Given the index of a project in the library, a song, and an index within the project
    // at the index in the library, attempts to add the given song to the project
    addSongToProj(libI, song, projI = null) {
        if (libI < 0 || libI > (this.library.length - 1))
            throw new RangeError(`Index ${libI} is out of range for music player library.`);

        const proj = this.library[libI];
        try {
            if (projI === null) {
                proj.addSong(song);
            } else {
                proj.addSong(song, projI);
            }

            return song;
        } catch (e) {
            throw e;
        }
    }

    // Given the index of a project in the library and the index of a song in that
    // project, attempts to remove a song at that index
    removeSongFromProj(libI, projI) {
        if (libI < 0 || libI > (this.library.length - 1))
            throw new RangeError(`Index ${libI} is out of range for music player library.`);
        if (libI === this.currProj || this.currSong === projI)
            throw new Error("Cannot remove from album currently being played");

        try {
            const proj = this.library[libI];

            proj.removeSong(projI);

            return `Removed song at index ${projI} in ${proj.getProj} ${proj.title}`;
        } catch (e) {
            throw e;
        }


    }

    // Helper Functions
    // Given a value, checks if the value is an Album, EP, or Single
    isValidProj(proj) {
        return proj instanceof Single || proj instanceof EP || proj instanceof Album;
    }
}

