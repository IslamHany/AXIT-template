/*global $, alert, console*/
$(function(){
    'use strict';
    //trigger nice scroll plugin
    $('html').niceScroll({
        cursorcolor:'#f7600e',
        cursorwidth:10,
        cursorborder:'1px solid #f7600e',
    });
    
    //change header height
    $('.header .overlay').height($(window).height());
     $('.header .overlay,.subscribe,.testim,.contact').width($(window).width());
     $(".header .intro").each(function(){
        $(this).css("paddingTop",($(window).height()-$('.header .intro').height())/2);
    });
    $(window).on("resize",function(){
         $('.header .overlay').height($(window).height());
         $(".header .intro").each(function(){
        $(this).css("paddingTop",($(window).height()-$('.header .intro').height())/2);
    });
    });
   $(window).scrollLeft(function(){
    $('.header,.subscribe,.testim,.contact,.footer').width($(window).width());
    });
    //scroll to features
    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $(".features").offset().top
        },1000);
    });
     $('.hire').click(function(){
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        },2000);
    });
    $('.wk').click(function(){
        $('html, body').animate({
            scrollTop: $(".mywork").offset().top
        },2000);
    });
    // show hidden items from work
   $(".show-more").click(function(){
       $(".mywork .hidden").slideDown(1500);
       $(this).css({display:'none'});
       $(".show-less").css({display:'inline-block'});
   });
    $(".show-less").on("click",function(){
       $(".mywork .hidden").slideUp(1500);
       $(this).css({display:'none'});
       $(".show-more").css({display:'inline-block'});
    });
    //check testimonials
    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');    function checkClients(){
            $('.client:first').hasClass('active')?leftArrow.fadeOut():leftArrow.fadeIn();
            $('.client:last').hasClass('active')?rightArrow.fadeOut():rightArrow.fadeIn();
    }
    checkClients();
    $(".testim i").click(function(){
        if($(this).hasClass('fa-chevron-right')){
            $('.testim .active').fadeOut(500,function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(500);
                checkClients();
            });
        }else{
            $('.testim .active').fadeOut(500,function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(500);
                checkClients();
            });
        }
    });
});