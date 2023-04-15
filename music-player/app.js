// MusicPlayer Demo Main File
const statusLog = document.querySelector("#playerStatus");

// UI Class for MusicPlayer
class MusicPlayerUI {
    constructor(statusLog, library) {
        this.statusLog = statusLog;
        this.mp = new MusicPlayer(library);
    }

    // Library Editing
    // Given a project, adds the project to the library
    addProj(proj) {
        try {
            this.mp.addProj(proj);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode("Added "));
            this.createProjSpan(li, proj);
            li.appendChild(document.createTextNode("to library"));
            li.classList.add("case-status");

            this.statusLog.appendChild(li);
        } catch (e) {
            this.displayError(e);
        }
    }

    // Given the index of a project in the library, attempts to remove the
    // project at the index
    removeProj(i) {
        try {
            const status = this.mp.removeProj(i);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(status));
            li.classList.add("case-status");
            this.statusLog.appendChild(li);
        } catch (e) {
            this.displayError(e);
        }
    }

    // Given the index of a project in the library, a song, and an index within the project
    // at the index in the library, attempts to add the given song to the project
    addSongToProj(libI, song, projI = null) {
        try {
            this.mp.addSongToProj(libI, song, projI);
            const proj = this.mp.getProj(libI);

            const li = document.createElement("li");
            li.classList.add("case-status");
            li.appendChild(document.createTextNode("Added "));
            this.createSongSpan(li, song);
            li.appendChild(document.createTextNode("to "));
            this.createProjSpan(li, proj);

            this.statusLog.appendChild(li);
        } catch (e) {
            this.displayError(e);
        }
    }

    // Given the index of a project in the library and the index of a song in that
    // project, attempts to remove a song at that index
    removeSongFromProj(libI, projI) {
        try {
            this.mp.removeSongFromProj(libI, projI);

            const proj = this.mp.getProj(libI);
            const li = document.createElement("li");

            li.classList.add("case-status");
            li.appendChild(document.createTextNode(`Removed song at index ${projI} from `));
            this.createProjSpan(li, proj);

            this.statusLog.appendChild(li);
        } catch (e) {
            this.displayError(e);
        }
    }

    // Playback Methods
    // Given the index of a project in the library and index of a song in that project
    // plays the song and updates the music player to be playing the project
    playSong(libI, projI) {
        try {
            const song = this.mp.playSong(libI, projI);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode("Now playing "));
            this.createSongSpan(li, song);

            this.statusLog.appendChild(li);
        } catch (e) {
            this.displayError(e);
        }
    }

    // Given the index of a project in the library and the index of a song in 
    // that project, adds the song to the queue
    queueSong(libI, projI) {
        try {
            const song = this.mp.queueSong(libI, projI);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode("Added "));
            this.createSongSpan(li, song);
            li.appendChild(document.createTextNode("to the queue"));

            this.statusLog.appendChild(li);
        } catch (e) {
            this.displayError(e);
        }
    }

    // Plays the next song in the queue if available
    playNext() {
        try {
            const song = this.mp.playNext();
            const li = document.createElement("li");

            if (song === "END") {
                li.appendChild(document.createTextNode("Playback ended"));
                li.classList.add("case-status");
            } else {
                li.appendChild(document.createTextNode("Now playing "));
                this.createSongSpan(li, song);
            }

            this.statusLog.appendChild(li);
        } catch (e) {
            this.displayError(e);
        }
    }

    // Toggles the loop flag
    toggleLoop() {
        this.mp.toggleLoop();
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`Toggled loop to ${this.mp.loop ? "on" : "off"}`));
        this.statusLog.appendChild(li);
    }

    // Pauses the playback of the current album
    pause() {
        try {
            this.mp.pause();
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(`Playback halted`));
            li.classList.add("case-status");
            this.statusLog.appendChild(li);
        } catch (e) {
            this.displayError(e);
        }
    }

    // Display functions
    // Displays the projects in the library as well as the indices they are stored
    // at
    displayProjects() {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode("Library:"));
        const ul = document.createElement("ul");
        li.appendChild(ul);

        for (let i = 0; i < this.mp.library.length; i++) {
            const proj = this.mp.getProj(i);
            console.log(proj);
            const projLi = document.createElement("li");
            projLi.appendChild(document.createTextNode(`${i}: `));
            this.createProjSpan(projLi, proj);
            ul.appendChild(projLi);
        }

        this.statusLog.appendChild(li);
    }

    // Given the index of a project, displays the contents of the project
    displayProj(i) {
        if (i < 0 || i > this.mp.library.length - 1) {
            this.displayError(new Error(`Please provide a valid index for a project in the library`));
            return;
        }

        const proj = this.mp.getProj(i);
        const li = document.createElement("li");
        li.appendChild(document.createTextNode("Displaying: "));
        this.createProjSpan(li, proj);
        const ul = document.createElement("ul");
        ul.classList.add("proj");
        li.appendChild(ul);

        for (let i = 0; i < proj.songs.length; i++) {
            const song = proj.songs[i];
            const songLi = document.createElement("li");
            songLi.appendChild(document.createTextNode(`${i}: `));
            this.createSongSpan(songLi, song);
            ul.appendChild(songLi);
        }

        this.statusLog.appendChild(li);
    }

    // Displays the queue 
    displayQueue() {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode("Queue: "));
        const ul = document.createElement("ul");
        ul.classList.add("queue");
        li.appendChild(ul);

        for (let i = 0; i < this.mp.queue.length; i++) {
            const song = this.mp.queue[i];
            const songLi = document.createElement("li");
            songLi.appendChild(document.createTextNode(`${i}: `));
            this.createSongSpan(songLi, song);
            ul.appendChild(songLi);
        }

        this.statusLog.appendChild(li);
    }

    // Given an error, displays the error message
    displayError(e) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(e.message));
        li.classList.add("error");
        this.statusLog.appendChild(li);
    }

    // Helper Functions
    // Given a string for text content and a string for a class name,
    // returns a span with the text content and class
    createSpan(text, className) {
        const span = document.createElement("span");
        span.appendChild(document.createTextNode(text + " "));
        span.classList.add(className);
        return span;
    }

    // Given a song and an li, creates spans and text to display the relevant 
    // info of the song and appends the information to the li
    createSongSpan(li, song) {
        li.appendChild(this.createSpan(`${song.title}`, "song"));
        li.appendChild(document.createTextNode("by "));
        li.appendChild(this.createSpan(`${song.artist}`, "artist"));
    }

    // Given a project and an li, creates spans and text to display the relevant
    // info of the project and appends the information to the li
    createProjSpan(li, proj) {
        li.appendChild(this.createSpan(`${proj.title}`, `${proj.projType}`));
        li.appendChild(document.createTextNode("by "));
        li.appendChild(this.createSpan(`${proj.artist}`, "artist"));
    }
}

// Project + Song Assignments/Declarations
const single = new Single("Strike (Holster)", "Lil Yachty", [
    new Song("Strike (Holster)", "Lil Yachty")
]);
const ep = new EP("Couples Therapy", "Marietta / Modern Baseball", [
    new Song("Yeah Yeah, Utah", "Marietta"),
    new Song("Green Call Her Sims", "Marietta"),
    new Song("Hope", "Modern Baseball"),
    new Song("It's Cold Out Here", "Modern Baseball")
]);
const album = new Album("Lift Yr. Skinny Fists Like Antennas to Heaven",
    "Godspeed You Black Emperor!", [
    new Song("Storm", "Godspeed You Black Emperor!"),
    new Song("Static", "Godspeed You Black Emperor!"),
    new Song("Sleep", "Godspeed You Black Emperor!"),
    new Song("Antennas to Heaven", "Godspeed You Black Emperor!")
]);

// App initialization
const mpUI = new MusicPlayerUI(statusLog, [album, ep, single]);

