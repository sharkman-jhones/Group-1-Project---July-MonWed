/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(function(){
  $('#loginform').submit(function(e){
    return false;
  });
  
  $('#modaltrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
});



//$(".login").leanModal({closeButton: ".modal_close"});

/*$(function(){
  $('#loginform').submit(function(e){
    return false;
  });*/
//$(".login").on("click", function() {
  //$("#lean_overlay").trigger("click");
 //$("#loginmodal").append('#lean_overlay');
// $("#loginmodal").leanModal();
//});
//});