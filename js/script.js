var imageWidth = 480

$(document).ready(function(){
  var numberOfImages = $(".slider img").length
  setSliderWidth(numberOfImages)
  $( "#next" ).click(function() {
    $( ".slider" ).animate({ "left": "-="+imageWidth+"px" }, "slow" );
  })
  $( "#previous" ).click(function() {
    $( ".slider" ).animate({ "left": "+="+imageWidth+"px" }, "slow" );
  })
})


function setSliderWidth(numberOfImages) {
  $(".slider").width(numberOfImages*imageWidth)
}
