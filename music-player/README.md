# MusicPlayer Demo
A demo of a MusicPlayer tag that mimics the functionality and structure of a music
player. Interactable through a command line interface from the console when the 
HTML file is open. The music player can be interacted by calling the following
methods on the **mpUI** variable in the console.

## Playback Methods
### playSong(libI, projI)
* **libI**: The index of a Project within the MusicPlayer library  
* **projI**: The index of a song within the Project at the specified **libI**  

Attempts to play a song at the **projI** index of the Project at the **libI** index 
in the library. Also sets the playback of the MusicPlayer to the Project at **libI**

### queueSong(libI, projI)
* **libI**: The index of a Project within the MusicPlayer library  
* **projI**: The index of a song within the Project at the specified **libI**  

Given the index of a project in the library and the index of a song in 
that project, adds the song to the queue

### playNext()
Plays the next song. If there are songs in the queue, plays the next song in the
queue. If not, plays the next song in the current project being played if any.

### toggleLoop()
Turns the loop flag on and off.

### pause()
Ends the playback of the current album.


## Library Editing Methods
### addProj(proj)
* **proj**: A Single, EP, or Album object *(Please refer to their respective class files for reference)*  

Adds the given Project object to the library.

### removeProj(i)
* **i**: The index of a project in the library  

Attempts to remove the Project in the MusicPlayer library at index **i**.

### addSongToProj(libI, song, projI)
* **libI**: The index of a Project within the MusicPlayer library  
* **song**: A Song object *(Please refer to the Song.js file for reference)*  
* **projI**: An optional index to specify where in the project to add the song  

Attempts to add a song to the project at the **libI** index in the library. Will
insert into a specific index if a **projI** index is specified.

### removeSongFromProj(libI, projI)
* **libI**: The index of a Project within the MusicPlayer library  
* **projI**: The index of a song within the Project at the specified **libI**

Attempts to remove the Song at index **projI** in the Project at index **libI**
in the MusicPlayer library


## Display Methods
### displayProjects()
Displays the projects in the library and the index they're stored at.

### displayProj(i)
* **i**: The index of a project in the library  

Displays the songs of the Project at the index **i** in the library at displays the
index they're stored at in the Project.

### displayQueue()
Displays the contents of the MusicPlayer queue as well as the order they're queued
in.

