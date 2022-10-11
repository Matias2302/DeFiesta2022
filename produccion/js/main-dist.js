window.onscroll = function() {
  NavFixed()
};

function NavFixed (){
  if(document.documentElement.scrollTop > 350){
    document.getElementById("nav").className = "alt";
  }else{
    document.getElementById("nav").className = "";
  }
  
}



/////Tarjetas
function flip(e) {
  var a = e.currentTarget;
  "card" === a.className &&
    ("rotateY(180deg)" == a.style.transform
      ? (a.style.transform = "rotateY(0deg)")
      : (a.style.transform = "rotateY(180deg)"));
}

////////MODALES

var btn = document.querySelectorAll(".gallery figure img");
var modals = document.querySelectorAll('.modal-background');
var spans = document.getElementsByClassName("close");

for (var i = 0; i<btn.length; i++){
	btn[i].onclick = function(e){
		e.preventDefault();
		modal = document.querySelector(e.target.getAttribute("href"));
		modal.style.display = "grid";
	}
}


// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
      for (var index in modals) {
          if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
      }
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal-background')) {
      for (var index in modals) {
          if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
      }
  }
}

