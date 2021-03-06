$(function () {
    $(".accordion")
    .mouseenter(function(){
        $(this).find(".card-body").css({"background-color":"#fff","color":"#090909"});
    })
    .mouseleave(function(){
        $(this).find(".card-body").css({"background-color":"inherit","color":"#fff"});
    });

    $(".navbar-nav .nav-item")
    .mouseenter(function(){
        $(this).addClass("item-hover");
    })
    .mouseleave(function(){
        $(this).removeClass("item-hover");
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(".nav-link").click(function(event){
        event.preventDefault();
        var enlace = this.hash;

        $("html").animate(
            {
                scrollTop: $(enlace).offset().top,
            },800
        );
    })
})