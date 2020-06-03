$(document).ready(function () {
  $('.carousel').carousel({
    interval: 3000
  })
  $(".icon-block").click(function () {
    $(".lang-dropdown").slideToggle()
  })


  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".header").addClass("header-active")
    } else {
      $(".header").removeClass("header-active")
    }
  })


  // $(".video-layer").click(function () {
  //   $("#video-section .item").removeClass("video-active")
  //   $("body").css({
  //     overflow: "visible"
  //   })
  //   $("#video-section .item").css({
  //     height: "140px"
  //   })
  //   $(".video-layer").css({
  //     display: "none"
  //   })
  // });

  var players = document.querySelectorAll('.youtube-player')

  var loadPlayer = function (event) {
    var target = event.currentTarget
    var iframe = document.createElement('iframe')
    iframe.classList.add('youtube-iframe')

    iframe.height = target.clientHeight
    iframe.width = target.clientWidth
    iframe.src = 'https://www.youtube.com/embed/' + target.dataset.videoId + '?autoplay=1'
    iframe.setAttribute('frameborder', 0)
    iframe.setAttribute('allowfullscreen', "")

    target.classList.remove('pristine')

    if (target.children.length) {
      target.replaceChild(iframe, target.firstElementChild)
      target.replaceChild(iframe, target.children[1])
    } else {
      target.appendChild(iframe)
    }
  }



  // var config = { once: true }

  Array.from(players).forEach(function (player) {
    player.addEventListener('click', loadPlayer)
  })
})