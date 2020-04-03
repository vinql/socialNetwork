function loadDoc(lastPost_id, button, pageType, optionalId, controllerPath) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var lastContent = document.getElementById("postsRender").innerHTML
      document.getElementById("postsRender").innerHTML= lastContent + this.responseText;
    }
  };
  var urlRequest =  controllerPath + "?lastPost_id=" + lastPost_id + "&pageType=" + pageType 
  				   + "&optionalId=" + optionalId 
  xhttp.open("GET", urlRequest, true);
  xhttp.send();

  button.style.display = 'none';
}

function showOnProfile(user_id, controllerPath) {
	 var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("postsRender").innerHTML= this.responseText;
	    }
	  };
	  var urlRequest =  controllerPath + "?id=" + user_id
	  xhttp.open("GET", urlRequest, true);
	  xhttp.send();
}

function postCommentary(controllerPath) {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var lastContent = document.getElementById("commentaries").innerHTML;
        document.getElementById("commentaries").innerHTML = this.responseText + lastContent;
      }
    };

    var content = document.getElementById("userCommentary").value
    var urlRequest =  controllerPath + "?content=" + content
    xhttp.open("GET", urlRequest, true);
    xhttp.send();
}

function resetCommentaryInput() {
  var content = document.getElementById("userCommentary").value = ""
}