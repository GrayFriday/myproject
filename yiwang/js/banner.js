window.onload=function(){
	var oBanner = document.querySelector(".banner");
    var oImg = document.querySelectorAll(".banner-img");    
    var oItem = document.querySelectorAll(".banner-circle ul li");
    	 var oFirst=document.querySelector(".special-pic-one0");
    var oKuang=document.querySelectorAll(".special-pic-one");
//  var oLast=document.querySelector(".special-pic-one1");
    var oMeng=document.querySelectorAll(".mene");
    var oMengL=document.querySelector(".mene1");
    var oMengF=document.querySelector(".mene0");
    var oImg1=document.querySelectorAll(".special-pic-one-img");
    var oImgFirst=document.querySelector(".special-pic-one-img0");
    var oMenu = document.querySelector(".menu");
	var oNav = document.querySelector(".nav");
	var oBannerCircle = document.querySelector(".banner-circle");
	var oFinalImg1 = document.querySelector(".final-img01");
    var oFinalImg3 = document.querySelector(".final-img03");
	window.onscroll=function()
    {
        var height=document.documentElement.scrollTop+document.body.scrollTop;
        
        if(height>0)
        {
            oNav.style.display = "none";
            oMenu.style.display = "block";
            oMenu.style.position = "fixed";
            oMenu.style.top = "0px";
              oMenu.style.background = "#333333";
            oMenu.style.zIndex = "10";
            oBannerCircle.style.top = "380px";
        }
        else
        {
            oNav.style.display = "block";
            oMenu.style.display = "block";
            oMenu.style.position = "fixed";
            oMenu.style.top = "80px";
            oBannerCircle.style.top = "450px";
        }
    }
    // 定义变量存下标
    var index = 0;
//    鼠标点击单个按钮实现的切换效果
    for(let i = 0; i < oItem.length; i++){
        oItem[i].onclick =function(){
            changeImg(i);
        }
    }
    // 封装切换图片的函数
   function changeImg(currentIndex){
           //获取当前下标
           index = currentIndex;
           // 检测是否到达最右边的图片
           if( index >= oImg.length)
           {
               index = 0;
           }
           // 检测是否到达最左边的图片
           if( index < 0)
           {
               index = oImg.length-1;
           }
           // 清除元素所有样式
	       for(let j=0;j<oImg.length;j++)
	       {
            oImg[j].style.opacity="0";
//          oItem[j].setAttribute("class","");
			oItem[j].style.background="white";
        	}
        // 当前需要显示的图片
        oImg[index].style.opacity="1";
//       background: #cf680a; 
        oItem[index].style.background="#cf680a";
//      oItem[index].setAttribute("class","active");
       	}


      // 封装函数实现自动播放
    function autoPlay(){
        timer = setInterval(function(){
            index++;
            changeImg(index);
        },5000)
    }
  	autoPlay();
//  oBanner.onmouseover = function(){
//      clearInterval(timer);
//  }

    for(let m=0;m<oKuang.length;m++){
    oKuang[m].onmouseenter=function(){
    	for(var n=0;n<oKuang.length;n++)
    	{	
    		oMeng[n].style.width=290+"px";
    		oKuang[n].style.width=290+"px";
    		oImg1[n].style.left="-20%";
    		
    	}
    	oMeng[m].style.width=369+"px";
    	this.style.width=369+"px";
    	oImg1[m].style.left=0;
//  	oLast.style.width=123+"px";
    	oFirst.style.width=260+"px";
    }
     oKuang[m].onmouseleave=function(){
     	this.style.width=320+"px";
     	oImg1[m].style.left="-20%";
//  	oLast.style.width=183+"px";
    	oFirst.style.width=320+"px";
     	
     }
     
    }
    oFirst.onmouseenter=function(){
    	this.style.width=300+"px";
    	oMengF.style.width=300+"px";
//  	oLast.style.width=123+"px";
    }
     oFirst.onmouseleave=function(){
    	this.style.width=269+"px";
    	oMengF.style.width=269+"px";
//  	oLast.style.width=183+"px";
    }
	
		oFinalImg3.onmouseenter = function()
	{
		oFinalImg1.style.display = "block";
	}
	
	oFinalImg3.onmouseout = function()
	{
		oFinalImg1.style.display = "none";
	}
	


}
