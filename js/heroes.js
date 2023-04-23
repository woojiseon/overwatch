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
    $(".panel ul").removeClass("active");
    $("#" + result).addClass("active"); 
  
  });

  $(".panel ul li").hover(function(){

    $(this).css("border-color","orangered");
  }, function(){
    $(this).css("border-color","white");
  });

});


