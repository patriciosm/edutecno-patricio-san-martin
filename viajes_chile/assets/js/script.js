$(function () {
    $(".accordion")
    .mouseenter(function(){
        $(this).find(".card-body").css({"background-color":"#fff","color":"#090909"});
    })
    .mouseleave(function(){
        $(this).find(".card-body").css({"background-color":"inherit","color":"#fff"});
    });

})