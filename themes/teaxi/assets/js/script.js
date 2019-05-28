$(document).ready(function() {
    $.sidebarMenu($('.sidebar-menu'));

    var pathname = window.location.pathname;
    var number = pathname.split("/");
    
    var dataTitle = [
        "Kenalan dengan TealinuxOS",
        "Instalasi TealinuxOS",
        "Migration and Upgrade",
        "Pengenalan Dekstop Environment",
        "Pengaturan dan Pilihan",
        "Pengenalan Aplikasi Bawaan",
        "Koneksi Jaringan dan Internet",
        "Print dan Scan",
        "Mengelola Aplikasi Terinstall",
        "Menjaga Keamanan Komputer",
        "Perangkat Keras"
    ];

    var i;
    var lenD=dataTitle.length;
    var title= $("title");
    for(i=0;i<dataTitle.length;i++){
        if(number[3] == i+1){
            title.html(dataTitle[i]);
        }
    }

    var title = $(this).attr('title');
    var titleMenu = document.querySelectorAll('.title-menu');

    for(i=0;i<lenD;i++){
        if(dataTitle[i]==title){
            titleMenu[i].setAttribute('class','title-menu active');
            titleMenu[i].children[1].setAttribute('class','sidebar-submenu menu-open');
        }
    }

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

    // $(".dropdown").click(function() {
    //     $(".dropdown").toggleClass("is-active");
    // });
    
    // $('.menu li:has(ul)').click(function (e) { 
    //     e.preventDefault();
    //     if($(this).hasClass('is-current')){
    //         $(this).removeClass('is-current');
    //         $(this).children('ul').slideUp();
    //     }
    //     else{
    //         $('.menu li ul').slideUp();
    //         $('.menu li').removeClass('is-current');
    //         $(this).addClass('is-current');
    //         $(this).children('ul').slideDown();
    //     }
    // });
});
