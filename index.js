 
 var timer=60;
 var hitvalue=0; //we made it global bcz we have to match this with bubbble and it have to be global to be accsed//
 var score =0;

 function makeBubble() {
  let bubbles = "";

  for (let index = 0; index < 126; index++) {
    var rn = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".gamearea").innerHTML = bubbles;
}

   
  function clock(){
     timefunc=setInterval(function(){ 
        if (timer>0){
            timer--
        document.querySelector("#timer").innerHTML=timer;
        }
       else {
        clearInterval(timefunc)
        document.querySelector(".gamearea").innerHTML=`<h2> The Game is Over</h2>`
       }
    },1000)


  }

  
   
  function newHits(){
     hitvalue = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML= hitvalue;
  }

   
  function increaseScore(){
    score+=10;
    document.querySelector("#score").innerHTML=score;
    
  }

 document.querySelector(".gamearea").addEventListener("click",function(a){
    

    var clickedNum= Number(a.target.textContent);

    if (clickedNum===hitvalue){
        increaseScore();
        makeBubble();
        newHits();
    }
 });





clock();
makeBubble();
newHits();