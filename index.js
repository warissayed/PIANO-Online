const  pianoKeys = document.querySelectorAll(".piano-keys .key");
const  volumeslider = document.querySelector(".volume-slider input");
const  keycheackbox = document.querySelector(".key-checkbox input");

 audio = new Audio("tunes/a.wav");// default audio is a


const playTune = (key) =>{

 audio.src = `tunes/${key}.wav`;// audio mapping based on key
  audio.play();// audio play
 
  const clickeffect = document.querySelector(`[data-key="${key}"]`);

  clickeffect.classList.add("active");
  setTimeout(()=>{
    clickeffect.classList.remove("active");
  },150);
}

pianoKeys.forEach(key =>{ 

key.addEventListener("click",() => playTune(key.dataset.key));// passing data key value 

 });

const passkey = (e) => {
   playTune(e.key);
}

const handelvolume = (e) => {
  audio.volume = e.target.value;
}
const showHide = () => {
   pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keycheackbox.addEventListener("click" , showHide)
volumeslider.addEventListener("input" , handelvolume)
document.addEventListener("keydown",passkey)




















// var btnNumber = document.querySelectorAll(".key").length

// for (let i= 0; i < btnNumber; i++) {
//   document.querySelectorAll(".key")[i].addEventListener("click",function () {
//     var btninnerHtml = this.innerHTML
//     console.log(btninnerHtml);

//       switch (btninnerHtml) {
//       case "a": 
//         var a = new Audio("./tunes/a.wav");
//         a.play();
        
//         break;
    
//       default:
//         break;
//     }
//   })
  
// }