$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    
    $("#enviarCorreo").click(function(){
      alert("El correo fue enviado correctamente...");
    });

    $("h4").on("dblclick" , function(){
      $(this).css({"color":"#f00"});
    });

    $(".card-title").click(function(){
      $(this).next("p").toggle();
    });

})
