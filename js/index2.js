
$(document).ready(function () {


  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown(200);

  },function(){
    $(this).find(".sub").stop().slideUp(300);
  });


    $(".tab li").click(function(){




      // for(i=0;i<8;i++){
      //   $(".tab li").eq(i).find("img").attr({"data-alt":"tab"+i+".svg"});
      // };
  
      
      // inum=$(this).index();
      // $(this).find("img").attr({"data-alt":"tab"+inum+".svg"});
  
      // $(".i1").removeClass("active"); 

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

      
  
      let result = $(this).attr("data-alt");
      $(".tabContents div").removeClass("active");
      $("#" + result).addClass("active");
  
      });




    });

























