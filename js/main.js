

	function scrolling(){ 
         if ($(window).scrollTop()>30){

            $("#nav-menu").addClass("fixednav");
              // $(".info").addClass("d-none");
              $(".euro").attr('src', 'img/goy.png');

         }
          if ($(window).scrollTop()<30){
                  $("#nav-menu").removeClass("fixednav" );
                          // $(".info").removeClass("d-none");
                  $(".euro").attr('src', 'img/ag.png');
         }
      
     }
        $(window).scroll(function(){
            scrolling();
        });

         scrolling();


   $('.sub-menu-parent').click(function () {
                $(this).find('.sub-menu').toggleClass('d-block');
          })
              
$(".navbar-toggler").click(function(){
    $(".right-menu").css({right:"0"})
      $(".popup-layer").css({display:"block"})
      $("body").css({overflow:"hidden"})
  });

   $(".right-menu .close-icon i").click(function(){
       $(".right-menu").css({right:"-100%"})
       $(".popup-layer").css({display:"none"})
       $("body").css("overflowY","scroll")
  })
  
  $(".right-menu .nav-item .nav-link").click(function(){
      $(this).parent().siblings().find(".sub-menu").slideUp();
      $(this).next().slideToggle();
  });
  
  $(".right-menu .nav-menu").click(function(){
      $(this).siblings().find(".menu").slideUp();
      $(this).find(".menu").slideToggle();
  });
  
    $(".popup-layer").click(function(){
            $(".order-block").css("display","none")
            $(".popup-layer").css("display","none")
            $("body").css("overflowY","scroll")
            $(".right-menu").css({right:"-100%"})
        });