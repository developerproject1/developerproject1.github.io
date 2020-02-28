// function toggleNavBar() {
//   document.getElementById("sidebar").classList.toggle("active");
// }

$(".toggle-btn").click(function () {
	$("#sidebar").toggleClass("active");
	$("#overlay").toggleClass("blackoverlay");
});

$("#overlay").click(function () {
	$("#sidebar").removeClass("active");
	$("#overlay").removeClass("blackoverlay");
});


$(".lang").click(function () {
	$('.opened').slideToggle();
	$('.nextpng img').toggleClass("iconrotate");
});