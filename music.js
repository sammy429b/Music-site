var mySong = document.getElementById("mySong");
var playicon = document.getElementById('playicon')

playicon.onclick= function(){

    if(song.paused)
    {
        mySong.play();
        icon.src="playbtn.png";
    }
    else
    {
        mySong.pause();
        icon.src="pausebtn.png";
    }
}
<script >
var mySong = document.getElementById("mySong");
var playicon = document.getElementById("playicon");

playicon.onclick = function(){
mySong.play();
}
</script>