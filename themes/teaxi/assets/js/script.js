$(document).ready(function() {
    $.sidebarMenu($('.sidebar-menu'))
    var current_title = $(document).attr('title');
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('nav').addClass('green');
            $('.navbar-brand a').css('color', '#fff');
        } else {
            $('nav').removeClass('green');
            if(current_title == 'TeaLinux OS'){
                $('.navbar-brand a').css('color', '#1e3338ff');
            }
        }
    }); 

    var current_title = $(document).attr('title');
    if(current_title == 'TeaLinux OS'){
        $('.navbar').css('background-color','transparent');
    } else{
        $('.navbar-brand a').css('color', '#fff');
        $('nav').css('box-shadow', '0 7px 6px -6px #777');
        $('.navbar').css('background-color','#39c892ff');
    }
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

    // if($(".content-tab:first").is("#Deskripsi")){
    //     $(".content-tab:first").css('display', 'block');
    // }
    // else{
    //     $(".content-tab").css('display', 'none');
    // }
    // $(".content-tab:last").css('display', 'none');

    // $('.tabs ul li').on('click', function(){
    //     var id = $(this).attr('name');
    //     var i, x, tablinks;
    //     x = $('.content-tab');
    //     tablinks = $('.tab');
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //     }
    //     for (i = 0; i < x.length; i++) {
    //         tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    //     }
    //     $('#'+id).css("display",'block');
    //     event.currentTarget.className += " is-active";
    // });
});