window.onload = function()
{
	var oLeftOne = document.querySelector(".welcome-left-one");
	var oLeftTwo = document.querySelector(".welcome-left-two");
	var oLefThree = document.querySelector(".welcome-left-three");
	var oWelRg = document.querySelector(".welcome-right");
	var oWelRg1 = document.querySelector(".welcome-right1");
	var oWelRg2 = document.querySelector(".welcome-right2");
	var oBanner = document.querySelector(".banner");
    var oImg = document.querySelectorAll(".banner-pic img");    
    var oItem = document.querySelectorAll(".banner-circle ul li");
    var oFinalImg1 = document.querySelector(".final-img01");
    var oFinalImg3 = document.querySelector(".final-img03");
//	广受欢迎部分
	oLeftOne.onmouseenter = function()
	{
		oWelRg.style.display="block";
		oWelRg1.style.display="none";
		oWelRg2.style.display="none";
	}
	oLeftTwo.onmouseenter = function()
	{
		oWelRg.style.display="none";
		oWelRg1.style.display="block";
		oWelRg2.style.display="none";
	}
	oLefThree.onmouseenter = function()
	{
		oWelRg.style.display="none";
		oWelRg1.style.display="none";
		oWelRg2.style.display="block";
	}
//	banner轮播
    // 定义变量存下标
    var index = 0;
	for(let i = 0;i < oItem.length;i++)
	{
		oItem[i].onclick = function()
		{
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
	
	var oRightDown = document.querySelector(".makeArt-down-right");
	var oRigntDownImg = document.querySelectorAll(".img-down");
	var index1=0;
    // 封装切换图片的函数
   function changeImg1(currentIndex){
           //获取当前下标
           index1 = currentIndex;
           // 检测是否到达最右边的图片
           if( index1 >= oRigntDownImg.length)
           {
               index1 = 0;
           }
           // 检测是否到达最左边的图片
           if( index1 < 0)
           {
               index1 = oRigntDownImg.length-1;
           }
           // 清除元素所有样式
	       for(let n=0;n<oRigntDownImg.length;n++)
	       {
            oRigntDownImg[n].style.opacity="0";
        	}
        // 当前需要显示的图片
        oRigntDownImg[index1].style.opacity="1";

       	}

      // 封装函数实现自动播放
    function autoPlay1(){
        timer = setInterval(function(){
            index1++;
            changeImg1(index1);
        },3000)
    }
    autoPlay1();
	
	oFinalImg3.onmouseenter = function()
	{
		oFinalImg1.style.display = "block";
	}
	
	oFinalImg3.onmouseout = function()
	{
		oFinalImg1.style.display = "none";
	}
	
	
	
}
