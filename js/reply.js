//javascript for post a reply, uses datasets

function reply() {
  // document.addEventListener("DOMContentLoaded", function () {
      var icons = document.querySelectorAll(".replyIcon");
      for (x = 0; x < icons.length; x++) {
          icons[x].addEventListener("click", function (e) {
              var box = this.parentElement.parentElement.parentElement.nextElementSibling;
              box.toggle('showBox');
          });
      }
  // });
}
