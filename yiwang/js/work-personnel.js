window.onload = function()
{
	var oWuse = document.querySelector(".wuse");
	var oAixin = document.querySelector(".aixin");
	var oLike= document.querySelector(".like");
	var oLeft = document.querySelector("#left");
	var oFangDaJing = document.querySelector(".fangdajing");
	var oBigImg = document.querySelector(".BigImg");
	var oMark = document.querySelector(".mark");
	var oDown = document.querySelectorAll(".down");
	var oPrice = document.querySelectorAll(".price");
	var oShare = document.querySelector(".share");
	var oSharePic = document.querySelector(".share-pic");
	var oWeibo = document.querySelector(".weibo");
	var oQq = document.querySelector(".qq");
	var oQzone = document.querySelector(".qzone");
	var oWechat = document.querySelector(".wechat");
	function red()
	{
		oWuse.style.opacity="0";
		oAixin.style.opacity="1";
	}
	oLike.onmouseenter = function()
	{
		red();
	}
	oLike.onmouseleave = function()
	{
		oAixin.style.opacity="0";
		oWuse.style.opacity="1";
	}
	
	var oJianTou = document.querySelector(".jiantoutou");
	var oJianTou1 = document.querySelector(".jiantou1");
	console.log(oJianTou1);
	var oKuangCon = document.querySelector(".kuang-tipContent");
	oJianTou.onclick = function()
	{
		oJianTou.style.display="none";
		oJianTou1.style.display="block";
		oKuangCon.style.display="block";
		
	}
	oJianTou1.onclick = function()
	{
		oJianTou1.style.display="none";
		oJianTou.style.display="block";
		oKuangCon.style.display="none";
		
	}
	
	oLeft.onmouseover = function()
	{
		oMark.style.display = "block";
		oFangDaJing.style.display = "block";
	}
	oLeft.onmouseout = function()
	{
		oMark.style.display = "none";
		oFangDaJing.style.display = "none";
	}
	oLeft.onmousemove = function(event){
		var evt = event || window.event;

		//定义灰框位置x
		var x = evt.offsetX - oMark.offsetWidth / 2 + 7;
		var y = evt.offsetY - oMark.offsetHeight / 2 +25;
		//console.log(oLeft.offsetWidth)
		
		//判断x坐标左右边界
		if(x <= 7){
			x = 7;
		}else if( x >= oLeft.offsetWidth - oMark.offsetWidth+7 ){
			x = oLeft.offsetWidth - oMark.offsetWidth+7;
		}

		//判断y坐标上下边界
		if( y <= 25 ){
			y = 25;
		}else if( y >= oLeft.offsetHeight - oMark.offsetHeight + 25 ){
			y = oLeft.offsetHeight - oMark.offsetHeight + 25;
		}

		//设置灰块儿位置
		oMark.style.top = y + "px";
		oMark.style.left = x + "px";

		// 求移动的比例
		var blX = x /(oLeft.offsetWidth - oMark.offsetWidth);
		var blY = y /(oLeft.offsetHeight - oMark.offsetHeight );
		// console.log(blX,blY);
		// 求大图的实际距离
		var bigX = -blX * (oBigImg.offsetWidth - oFangDaJing.offsetWidth);
		var bigY = -blY * (oBigImg.offsetHeight - oFangDaJing.offsetHeight);

		// 设置大图的位置
		oBigImg.style.left = bigX + "px";
		oBigImg.style.top = bigY + "px";

	}
	var index = 0;
	for(let m = 0;m < oPrice.length;m++)
	{
		oPrice[m].onclick = function()
		{
			changeImg(m);
		}
	}
	 // 封装切换图片的函数
   function changeImg(currentIndex){
           //获取当前下标
           index = currentIndex;
           // 清除元素所有样式
	       for(let j=0;j<oDown.length;j++)
	       {
	       	oPrice[j].style.borderBottom="none";
            oDown[j].style.display="none";
        	}
        // 当前需要显示的图片
        oDown[index].style.display="block";
//       background: #cf680a; 
        oPrice[index].style.borderBottom="4px solid #000";
//      oItem[index].setAttribute("class","active");
       	}
	oShare.onmouseenter = function()
	{
		oSharePic.style.display = "block";
	}
	oShare.onmouseout = function()
	{
		oWeibo.style.display = "none";
		oQq.style.display = "none";
		oQzone.style.display = "none";
		oWechat.style.display = "none";
	}
	
}
