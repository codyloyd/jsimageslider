var imageWidth = 480

$(document).ready(function(){
  var numberOfImages = $(".slider img").length
  var counter = 0
  setSliderWidth(numberOfImages)
  $( "#next" ).click(function() {
    counter = (counter + 1) % 4
    $( ".slider" ).animate({"left": "-="+imageWidth+"px"},
                            "slow",
                            function(){
                              $(".slider img:first").appendTo(".slider")
                              $(".slider").css({"left":"0"})
                            })
    })

  $( "#previous" ).click(function() {
    counter = (counter + 3) % 4
    $(".slider img:last").prependTo(".slider")
    $(".slider").css({"left":"-480px"})
    $( ".slider" ).animate({ "left": "+="+imageWidth+"px" },
                             "slow",
                             function(){
                             })
  })
})


function setSliderWidth(numberOfImages) {
  $(".slider").width(numberOfImages*imageWidth)
}
