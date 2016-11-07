$(document).ready(function(){
	
	//最上面的
	var head=$(".head")
	
	 $(window).scroll(function(){
   
	  var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层
        if($(".banner").offset().top<=obj.scrollTop)
        {
          head.css("display","block")
        }
        else 
        {
           head.css("display","none")

        }
})
	
	
	//选项卡
      
   $(".xxk a").on("mouseover",function(){
   	  a=$(".xxk a").index($(this))
      $(".xxk ul").eq(a).show();
    })
   $(".xxk a").on("mouseout",function(){
       $(".xxk ul").eq(a).hide();
   })

	
	
	
	
//	回到顶部

		jQuery.backtop($(".youbot"),500)
		 $(window).scroll(function(){
 
  	  var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层
        if($(".banner").offset().top<=obj.scrollTop+100)
        {
           $(".youbot").css("display","block")
        }
        else 
        {
           $(".youbot").css("display","none")

        }
  })
//轮播图

 			
 		
// 	choose
   	var lis=$(".choose .ti ul li");
   	var zz=$("span",lis);
   	tabcontent=$(".ti-content")
   	lis.eq(0).css({"background":"#fff","border-top-color":"#79be0b"});
   	zz.eq(0).css("display","block")
   	tabcontent.eq(0).css("display","block")
   	lis.click(function(){
   		lis.css({"background":"#fafafa","border-top-color":"#ebebeb"});
   		tabcontent.css("display","none")
   		var index=lis.index($(this))
   		lis.eq(index).css({"background":"#fff","border-top-color":"#79be0b"});
   		zz.eq(index).css("display","block")
   		tabcontent.eq(index).css("display","block")
   	})
})
