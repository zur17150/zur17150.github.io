let playing = true;

function toggleGif(){

let gif = document.getElementById("welcomeGif");
let btn = document.getElementById("gifBtn");

if(playing){
gif.style.visibility="hidden";
btn.innerHTML="Play";
playing=false;
}
else{
gif.style.visibility="visible";
btn.innerHTML="Pause";
playing=true;
}

}