$(document).ready(function() {
    $.sidebarMenu($('.sidebar-menu'));
    $.menu($('.menu'));

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
    var judulMenu = document.querySelectorAll('.judul-menu');

    for(i=0;i<lenD;i++){
        if(dataTitle[i]==title){
            titleMenu[i].setAttribute('class','title-menu active');
            judulMenu[i].setAttribute('class','judul-menu active');
            titleMenu[i].children[1].setAttribute('class','sidebar-submenu menu-open');
        }
    }

    // $(document).on("scroll", onScroll);
    
    // //smoothscroll
    $('ul.sidebar-menu li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('ul.sidebar-menu li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-70
        }, function () {
            window.location.hash = target.top-70;
            // $(document).on("scroll", onScroll);
        });
    });

    $('ul.menu li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('ul.menu li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-70
        }, function () {
            window.location.hash = target.top-70;
            // $(document).on("scroll", onScroll);
        });
    });

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

    // function onScroll(event){
    //     var scrollPos = $(document).scrollTop();
        
    //     // console.log(scrollPos)
    //     $('.sidebar-menu .title-menu ul.sidebar-submenu li a').each(function () {
    //         var currLink = $(this);
    //         var refElement = $(currLink.attr("href"));
    //         console.log(refElement);
    //         // var refElementSub = refElement.substring(1);
    //         var refElementTop = refElement.position().top;
    //         if ( refElementTop <= scrollPos) {
    //             $('.sidebar-menu .title-menu ul.sidebar-submenu li a').removeClass("active");
    //             currLink.addClass("active");
    //         }
    //         else{
    //             currLink.removeClass("active");
    //         }
    //     });
    // }

});
