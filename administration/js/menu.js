let 
	elburger = null,
	elnav = null,
	elauth = null;


window.onload = function() {
	elburger = document.getElementsByClassName("btn__burger")[0];
	elnav = document.getElementsByClassName("header__navigate")[0];
	elauth = document.getElementsByClassName("header__authentication")[0];
}

function burger(e){
	elburger.classList.toggle("active");
	elnav.classList.toggle("show");
	elauth.classList.toggle("show");
}