$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000); 
 });
});

$(document).ready(function(){
	$("#myInput").on("keyup", function() {
	  var value = $(this).val().toLowerCase();
	  $(".dropdown-menu li").filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	  });
	});
  });

var coll = document.getElementsByClassName("collapsible");
var i;
  
for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
	  this.classList.toggle("active");
	  var content = this.nextElementSibling;
	  if (content.style.maxHeight){
		content.style.maxHeight = null;
	  } else {
		content.style.maxHeight = content.scrollHeight + "px";
	  } 
	});
  }
  function openLink(evt, link) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(link).style.display = "block";
	evt.currentTarget.className += " active";
  } 