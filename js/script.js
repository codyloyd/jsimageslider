var imageWidth = 800

$(document).ready(function(){
  var numberOfImages = $(".slider img").length
  var counter = 0
  setSliderWidth(numberOfImages)
  $( "#next" ).click(function() {
    counter = (counter + 1) % 4
    window.clearTimeout(timer)
    setTimer()
    slideNext()
    })

  $( "#previous" ).click(function() {
    counter = (counter + 3) % 4
    clearTimeout(timer)
    setTimer()
    slidePrev()
  })
  setTimer()
  colorNavDot(1)
})

function colorNavDot(child){
  var number = $(".slider img:nth-child("+child+")").attr("alt")
  $(".dot").css({"background":"none"})
  $("#"+number).css({"background-color":"#ccc"})
}

var timer

function setTimer(){
  timer = window.setTimeout(function(){
                 slideNext()
                 setTimer()
               }, 7000);
}

function slideNext(){
  colorNavDot(2)
  $( ".slider" ).animate({"left": "-="+imageWidth+"px"},
                          1500,
                          function(){
                            $(".slider img:first").appendTo(".slider")
                            $(".slider").css({"left":"0"})
                          })
}

function slidePrev(){
  colorNavDot(4)
  $(".slider img:last").prependTo(".slider")
  $(".slider").css({"left":"-"+imageWidth+"px"})
  $( ".slider" ).animate({ "left": "+="+imageWidth+"px" },
                           1500,
                           function(){
                           })
}

function setSliderWidth(numberOfImages) {
  $(".slider").width(numberOfImages*imageWidth)
}
