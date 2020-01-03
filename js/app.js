var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
//When clicking on control list items
$(".controls").on("click", "li", function() {
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //Cache current color
  color = $(this).css("background-color");

  
}); 

//When new color is pressed
$("#revealColorSelect").click(function(){
  //Show color selects or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

function changeColor() {
  //Update the new color span
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + ", " + g + ", " + b + ")");
}
//When color sliders change
$("input[type=range]").change(changeColor);  
$("#clearCanvas").click(function(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
})
//When add color is pressed
$("#addNewColor").click(function(){
  //Append the color to the controls url
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select the new color
  $newColor.click();

});
  
  

//On mouse events on the canvas
$canvas.mousedown (function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
     //Draw lines
    if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
   }   
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

 




