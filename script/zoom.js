$('.children').draggable();


$('.parent').bind('mousewheel DOMMouseScroll', function(event){
  event.preventDefault();
    if (event.originalEvent.wheelDelta > 0 ||   event.originalEvent.detail < 0) {
        console.log($('.children').css('zoom'))// scroll up
      zz = $('.children').css('zoom')
       $('.children').css('zoom',parseFloat(zz) + 0.1) 
    }
    else {
      console.log(0)// scroll down
      zz = $('.children').css('zoom')
      $('.children').css('zoom',parseFloat(zz) - 0.1) 
    }
});



$('.user1').draggable();
$('.user2').draggable();

$('.user1').on('mouseup',function(){
  console.log($(this).css('top'))
  console.log($(this).css('left'))
})