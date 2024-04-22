$("html").mousemove(function(e) {
    xpos = e.pageX;
    ypos = e.pageY;
   
   $("body").addClass("go");
   
   var position = {
     'left' : xpos,
     'top' : ypos
   }
 
   $(".pulse").css(position);
 });