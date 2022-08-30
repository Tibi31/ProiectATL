console.log("Hello from JavaScrip!");
const songlist = [
    {
        imagelink: "assets/voodoo.png",
        title: "Oare",
        album: "Voodoo",
        duration: "2:57"
    },   
    {
        imagelink: "assets/inapoi la viata.jpg",
        title: "Antetokumpo",
        album: "Inapoi La Viata",
        duration: "4:57"
    },   
    {
        imagelink: "assets/kendrick.jpg",
        title: "N95",
        album: "Mr.Morale & The Big Steppers",
        duration: "3:16"
    } ,
]   

Window.onload = function() {
    const songsWrapper = document.getElementById("songs-wrapper");
    songsWrapper.innerHTML="";
    songsWrapper.innerHTML = melodyComponent(1, songList[1]);
    }
    
    const melodyComponent = function (index, songInfo) {
        return `<div class="melody">
        <span class="song-nr">
        ${index}
        </span>
        <img src="${songInfo.imageLink}" class="song-cover">
        </img>
        <span class="song-title">
            ${songInfo.title}
            </span>
            <span class"song-album">
                ${spngInfo.album}
                </span>
                <span class="song-duration">
                ${songInfo.duration}
                </span>
    </div>`
    }
