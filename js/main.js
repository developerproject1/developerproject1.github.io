// function toggleNavBar() {
//   document.getElementById("sidebar").classList.toggle("active");
// }

$(document).ready(function () {

var bar = new ProgressBar.Circle(pbCircle, {
  color: '#000',
  strokeWidth: 1,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 2000,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#eda44c', width: 1 },
  to: { color: '#eda44c', width: 1 }, 
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
  }
});
	bar.animate(1);
 // Number from 0.0 to 1.0
// stroke-dashoffset: 310.985;
	let variable = 1;
 $("#carouselExampleCaptions").on('slide.bs.carousel', function () {
 	$('#carouselExampleCaptions').find('.progressbar-circle').find('path').animate({'stroke-dashoffset': 311.061}, 0)
 		bar.animate(variable);
	});

$('.carousel').carousel({
  interval: 2000
})

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

 

 $('.carousel-mehsul').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    padding:10,
    dots:true,
    items:4,	
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
    
    
    
})

});

