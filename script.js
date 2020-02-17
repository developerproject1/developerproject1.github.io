$('.circle-1').mouseover(function(){
    $(this).find('img').attr('src', '/img/object.png');
});

$('.circle-1').mouseout(function(){
    $(this).find('img').attr('src', '/img/Vector Smart Object.png');
});

$('.circle-2').mouseover(function(){
    $(this).find('img').attr('src', '/img/Vector Smart Object6.png');
});

$('.circle-2').mouseout(function(){
    $(this).find('img').attr('src', '/img/Vector Smart Object-1.png');
});

$('.circle-3').mouseover(function(){
    $(this).find('img').attr('src', '/img/Vector Smart Object7.png');
});

$('.circle-3').mouseout(function(){
    $(this).find('img').attr('src', '/img/Vector Smart Object-2.png');
});

$('.circle-4').mouseover(function(){
    $(this).find('img').attr('src', '/img/Vector Smart Object8.png');
});

$('.circle-4').mouseout(function(){
    $(this).find('img').attr('src', '/img/Vector Smart Object-3.png');
});



$('.indicator-turn').html('0' + ($('.item2.active').index() + 1) + '/');
$('#carouselExampleIndicators').on('slid.bs.carousel', function() { 
	$('.indicator-turn').html('0' + ($('.item2.active').index() + 1 + '/'));

});