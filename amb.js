function jsDropDown(imgid,newimg){
	document.getElementById(imgid).src = "./" + newimg + ".png";
}

function myFunction() {
    document.getElementById("jsDropDown").classList.toggle("show");
}
