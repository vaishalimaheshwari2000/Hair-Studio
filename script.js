var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");
sideNav.style.display="none";
menuBtn.onclick = function(){
  
  if(sideNav.style.right  == "-250px"){
    menu.src="./img/menu.png"; 
    sideNav.style.position = "none";
    sideNav.style.display="none";
    sideNav.style.right="0"; 
    sideNav.style.transition="0.5s"; 
    menuBtn.style.left="10px";
}
    
      else
      {
      menu.src="./img/close.png";
      sideNav.style.position ="fixed";
       sideNav.style.display="block";
      menuBtn.style.left="200px";
        sideNav.style.right = "-250px";  }

}

$(document).ready(function(){
 $('.carousel').carousel();
});