// function toggleNavBar() {
//   document.getElementById("sidebar").classList.toggle("active");
// }
$(function() {
  $(".navigation-tab-item").click(function() {
    $(".navigation-tab-item").removeClass("active");
    $(this).addClass("active");
    $(".navigation-tab-overlay").css({
      left: $(this).prevAll().length * 103 + "px"
    });
  });
});

$("#newstab").click(function () {
    $("#blog").hide();
     $("#news").fadeIn();
});

$("#blogtab").click(function () {
    $("#news").hide();
    $("#blog").fadeIn();
});

$(document).ready(function () {

var bar = new ProgressBar.Circle(pbCircle, {
  color: '#000',
  strokeWidth: 1,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 4000,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#d2ab66', width: 1 },
  to: { color: '#d2ab66', width: 1 }, 
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
  interval: 4000
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
    dots:false,
    items:3,	
    nav:true,
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
});

// documenr ready 


function scrolling(){ 
         if ($(window).scrollTop()>30){
            // $("fixedcontainer").removeClass("" );
            $("#fixedcontainer").addClass("fixednav");
              // $(".info").addClass("d-none");
              $("#searching").attr('src', 'img/search22.png');

         }
          if ($(window).scrollTop()<30){
                  $("#fixedcontainer").removeClass("fixednav" );
                          // $(".info").removeClass("d-none");
                  $("#searching").attr('src', 'img/search.png');
         }
      
     }
        $(window).scroll(function(){
            scrolling();
        });



$( "#haqqında" ).hover(
  function() {
     $("#sirket .imgdrop img").attr("src","img/giltexabout.jpg");
  });

$( "#vakansiya" ).hover(
  function() {
     $("#sirket .imgdrop img").attr("src","img/vakansiya.jpg");
  });


$( "#sertfikat" ).hover(
  function() {
     $("#sirket .imgdrop img").attr("src","img/sertifikat.jpg");
  });

$( "#zavod" ).hover(
  function() {
     $("#sirket .imgdrop img").attr("src","img/fabrik1.jpg");
  });

$( "#satis" ).hover(
  function() {
     $("#sirket .imgdrop img").attr("src","img/satis.jpg");
  });
$( "#referanslar" ).hover(
  function() {
     $("#sirket .imgdrop img").attr("src","img/referans.jpg");
  });




$( "#yataq" ).hover(
  function() {
     $("#mehsul .imgdrop img").attr("src","img/yataq.jpg");
  });

$( "#uniforma" ).hover(
  function() {
     $("#mehsul .imgdrop img").attr("src","img/uniforma.jpg");
  });

$( "#desmal" ).hover(
  function() {
     $("#mehsul .imgdrop img").attr("src","img/desmal.jpg");
  });

$( "#iplik" ).hover(
  function() {
     $("#mehsul .imgdrop img").attr("src","img/iplik.jpg");
  });


$( "#foto" ).hover(
  function() {
     $("#gallery1 .imgdrop img").attr("src","img/newimg.jpg");
  });

$( "#video" ).hover(
  function() {
     $("#gallery1 .imgdrop img").attr("src","img/video.jpg");
  });
 

$( ".newdropdown .dropdown-item" ).mouseout(
  function() {
     $(".newdropdown .imgdrop img").attr("src","img/imgdrop.jpg");
   }); 








});

