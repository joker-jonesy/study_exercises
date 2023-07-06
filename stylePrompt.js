
document.body.querySelector(".burger").addEventListener("click", function(){
   if(document.body.querySelector(".sideNav").style.left!=="0px"){
      document.body.querySelector(".sideNav").style.left="0px"
   }else{
      document.body.querySelector(".sideNav").style.left="-100%"
   }
});