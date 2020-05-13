var body = document.body,
    docElm=document.documentElement,
    required=docElm.offsetHeight/4,
    button=document.getElementById("top_btn"),
    scrollPosition;
    
    window.addEventListener("scroll",function(event){
        scrollPosition=body.scrollTop;
        button.className= (scrollPosition>required) ? "visible" : "invisible";

    })

  button.addEventListener("click", function(event){
    event.preventDefault;
    body.scrollTop="0";
  });

var shift=1,
    down;

button.addEventListener("mouseover",function(event){
  console.log("hover");
  var hop=setInterval(frame,5),
      down=30;
function frame(){
  if(down==50){
    clearInterval(hop);
  }
  else{
    down+=shift;
    button.style.bottom=down;
  }
  console.log(button.style.bottom);
}
});

button.addEventListener("mouseout",function(event){
  console.log("out");
  var hop=setInterval(frame,5);
      down=50;
      button.style.bottom=down; 
function frame(){
  if(down==30){
    clearInterval(hop);
  }
  else{
    down-=shift;
    button.style.bottom=down;
  }
  console.log(button.style.bottom);
}
});


