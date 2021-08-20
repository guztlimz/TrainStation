let painel = document.getElementById("painelText")

if(painel.textContent.length > 5){


   let painelLenght = painel.textContent.length

   let distance = 300

   if(painelLenght>15){

      let add = 20*(painelLenght - 15)
      distance+=add
      console.log(distance)
   }
   painel.animate([
      // keyframes
      
      { transform: 'translateX('+distance+'px)' },
      { transform: 'translateX(-0px)' },
      { transform: 'translateX(-'+distance+'px)' }
    ], {
      // timing options
      duration: 5000,
      iterations: Infinity
    });
}

let door = document.getElementById("oneDoor")
let door2 = document.getElementById("twoDoor")

function doorTransition(){
   setTimeout(function() { 
      openDoor()
      setTimeout(function() { 
         closeDoor()
         setTimeout(function() { 
            doorTransition()
         }, 2000);
      }, 5000);
   }, 5000);
}

function closeDoor(){
   door.style.transform ='translateX(-0%)'
   door2.style.transform ='translateX(0%)'
}

function openDoor(){
   door.style.transform ='translateX(-95%)'
   door2.style.transform ='translateX(95%)'
}

closeDoor()
doorTransition()

// let morning = document.getElementById("morning").style.opacity
// let noon = document.getElementById("noon").style.opacity
// let night = document.getElementById("night").style.opacity
// let sunrise = document.getElementById("sunrise").style.opacity

function backgroundTransition(){

   document.getElementById("morning").style.opacity = 0
   document.getElementById("noon").style.opacity = 1
   setTimeout(function(){
      document.getElementById("noon").style.opacity = "0"
      document.getElementById("night").style.opacity = "1"
   
      
      setTimeout(function(){
         document.getElementById("night").style.opacity = "0"
         sunrise = document.getElementById("sunrise").style.opacity = "1"
      
         setTimeout(function(){
         
            sunrise = document.getElementById("sunrise").style.opacity = 0
            document.getElementById("morning").style.opacity = 1

            setTimeout(function(){
            
               backgroundTransition()
            }, 30000)

         }, 30000)

      }, 30000)

   }, 30000)

}
backgroundTransition()

function musicTransition(){
   setTimeout(function() {
      let musics = [
         {
            'id':1,
            'nameSong':'And So It Begins Inspired By Crush-Sometimes',
            'src':'songs/And-So-It-Begins-Inspired-By-Crush-Sometimes.mp3'
         },
         {
            'id':2,
            'nameSong':'Calm Waters',
            'src':'songs/purrple-cat-calm-waters.mp3'
         },
         {
            'id':3,
            'nameSong':'Dreams Come True',
            'src':'songs/purrple-cat-dreams-come-true.mp3'
         },
         {
            'id':4,
            'nameSong':'Equinox',
            'src':'songs/purrple-cat-equinox.mp3'
         },
         {
            'id':5,
            'nameSong':'Field of Fireflies',
            'src':'songs/purrple-cat-field-of-fireflies.mp3'
         },
         {
            'id':6,
            'nameSong':'Floating Castle',
            'src':'songs/purrple-cat-floating-castle.mp3'
         },
         {
            'id':7,
            'nameSong':'Forget Me Not',
            'src':'songs/purrple-cat-forget-me-not.mp3'
         }
      ]

      let srcMusic = document.getElementById("musicNow")

      srcMusic.src = musics[0].src

      srcMusic.muted = false;

      let musicDuration = srcMusic.duration
      console.log(musicDuration)
      
      setTimeout(function() { 
         
      }, musicDuration);
      
   }, 500);
}



//musicTransition()