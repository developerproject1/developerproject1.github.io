

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
