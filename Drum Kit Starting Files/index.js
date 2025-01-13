for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",done);
}
function done(){
    var ck=this.innerHTML;
    clicked(ck);
    brighten(ch);
}
document.addEventListener("keypress",pressed1);
    function pressed1(evt){
    clicked(evt.key);
    brighten(evt.key);
    }
function clicked(ch){
  switch(ch){
    case "w":
      var j=new Audio('/sounds/tom-1.mp3');
      j.play();
      break;
    case "a":
        var j=new Audio('/sounds/tom-2.mp3');
        j.play();
        break;
    case "s":
        var j=new Audio('/sounds/tom-3.mp3');
        j.play();
        break;
    case "d":
        var j=new Audio('/sounds/tom-4.mp3');
        j.play();
        break;
    case "j":
        var j=new Audio('/sounds/snare.mp3');
        j.play();
        break;
    case "k":
        var j=new Audio('/sounds/crash.mp3');
        j.play();
        break;
    case "l":
        var j=new Audio('/sounds/kick-bass.mp3');
        j.play();
        break;
    default:
  }
}
function brighten(ch){
   document.querySelector("."+ch).classList.add("pressed");
   setTimeout(function (){
    timebri(ch)
        },100);
function timebri(ch){
    document.querySelector("."+ch).classList.remove("pressed");
}
}
