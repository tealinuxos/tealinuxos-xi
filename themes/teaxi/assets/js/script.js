$(document).ready(function() {
    $.sidebarMenu($('.sidebar-menu'))

    // $(window).resize(function(){
    //     if($(document).width() > 1087){
    //         $("#sidebar").css('margin-left', 0);
    //     }
    //     if($(document).width() < 1087){
    //         $("#sidebar").css('margin-left', '-250px');
    //     }
    // });
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        // $(".navbar-menu").toggleClass("is-active");
        if($('#sidebar').hasClass('is-active')){
            $('#sidebar').removeClass('is-active');
            $('#sidebar').css('margin-left','-280px');
        }
        else{
            $('#sidebar').addClass('is-active');
            $("#sidebar").css('margin-left', 0);
        }


    });
    $(".dropdown").click(function() {
        $(".dropdown").toggleClass("is-active");
    });
    
    // var show = $("ul.bd-category-list").css("display");
    // console.log(show);
    // $(".bd-category").click(function(){
    //     // if(show == 'none'){
    //     //     $(this).find('ul.bd-category-list').css('display','block').addClass('is-current');
    //     // }
    //     // else{
    //     //     $(this).find('ul.bd-category-list').css('display','none').removeClass('is-current');
    //     // }
    //     $(this).find('ul.bd-category-list').toggle();
    // }); 
    $('.menu li:has(ul)').click(function (e) { 
        e.preventDefault();
        if($(this).hasClass('is-current')){
            $(this).removeClass('is-current');
            $(this).children('ul').slideUp();
        }
        else{
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('is-current');
            $(this).addClass('is-current');
            $(this).children('ul').slideDown();
        }
    });
});