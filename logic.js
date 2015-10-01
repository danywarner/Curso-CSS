function fblogin(){
	alert("logeado");
}
function twtlogin(){
	alert("logeado");
}

function run(){
	var facebookButton=document.getElementById("fblogin");
	var twitterButton=document.getElementById("twtlogin");
	facebookButton.addEventListener("click",fblogin,false);
	twitterButton.addEventListener("click",twtlogin,false);
}

window.addEventListener("load",run,false);