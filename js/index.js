$(document).ready(function () {


  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown(200);

  },function(){
    $(this).find(".sub").stop().slideUp(300);
  });


    $(".tab li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".panel li").removeClass("active");
    $("#" + result).addClass("active"); 
  
  });

  /* 커뮤니케이션 */

  $(".title").click(function(){

    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().slideToggle();  


});



});


