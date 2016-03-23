//function to get a file using ajax

function ajaxGet(url, onSuccess) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState==4)
    	onSuccess(xhttp.responseText);
  }
  xhttp.open("GET", url, true);
  xhttp.send();
}
