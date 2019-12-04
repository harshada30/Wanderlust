function myFunction() {
  	var hide = document.getElementById("hide");
    var moreText = document.getElementById("more");
  	var btnText = document.getElementById("myBtn");

  	if (hide.style.display === "none") {
    		hide.style.display = "inline";
    		btnText.innerHTML = "Read more"; 
    		moreText.style.display = "none";
  	} else {
    		  hide.style.display = "none";
    			btnText.innerHTML = "Read less"; 
    			moreText.style.display = "inline";
    	}
}