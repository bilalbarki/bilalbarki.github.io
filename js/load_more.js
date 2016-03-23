//javascript for load more button

window.onload = function () {
    event_setup();
}

function load_more(res) {
  var x = document.getElementById("loadMore");
  var iterator=1; //iterator for iterating through json files
  x.onclick = function() {
    x.disabled = true;
    x.toggle('offButton');
    window.setTimeout(function() {
      ajaxGet("js/statuses-" + iterator + ".json", function(res) {
       
        var bilal=JSON.parse(res);
        //for (i=0;i<10;i++){
          for (i = 0; i < 10; i++) { //as load more button shows 10 more statuses
          var theData=bilal['statuses'][i];
          var element=document.getElementById("moreHere");
          var theTemplateScript = document.getElementById('header').innerHTML;
          var theTemplate = Handlebars.compile(theTemplateScript);
          element.innerHTML = element.innerHTML + theTemplate(theData);
        }
        iterator++;
        if(bilal['last_page'])
          x.style.display = "none";
        reply();
      });
      x.disabled = false;
      x.toggle('offButton');
    }, 2000);
  }
}

function event_setup() {
  post_a_status();
  load_more();
  reply();
}
