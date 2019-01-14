window.onload=function(){
	var oDownThree = document.querySelector(".down-three");
	var oDownThree = document.querySelector(".down-three1");
	var oP = document.querySelector(".down-three p");
	var oP2 = document.querySelector(".down-three1 p");
	var oP1 = document.querySelector(".down-four p");
	var oIn= document.querySelector(".yanzhengma");
	var oIn1= document.querySelector(".yanzhengma1");
	var oFourIn= document.querySelector(".four-in");
	var oUnL= document.querySelector(".underLine");
	var oUnL1= document.querySelector(".underLine1");
	var oUnL2= document.querySelector(".underLine2");
	var oBottom = document.querySelector(".bottom");
	var oBottom1 = document.querySelector(".bottom1");
	var oBj2 = document.querySelector(".down-two-item2");
	var oBj1= document.querySelector(".down-two-item1");
	var oDwt= document.querySelector(".dwT");
	var oNewsTip = document.querySelector(".news-tip");
	var oNewsTip1 = document.querySelector(".news-tip1");
	var oDengLu = document.querySelector(".denglu");
	var oYiJian = document.querySelector(".yijian");
	var oDuanXin = document.querySelector(".duanxin");
	var reg = /^[1-9]\d{10}$/;
	var reg1 = /^\w+@(qq|128)+\.com$/;
	oIn.onclick = function()
	{
		oUnL.style.transform = "rotateX(0deg)";
		oP.style.top="-15px";
		oP.style.fontSize="12px";
		oP.style.color="#cf680a";
	}
	oFourIn.onclick = function()
	{
		oUnL1.style.transform = "rotateX(0deg)";
		oP1.style.top="-15px";
		oP1.style.fontSize="12px";
		oP1.style.color="#cf680a";
	}
	oIn1.onclick = function()
	{
		oUnL2.style.transform = "rotateX(0deg)";
		oP2.style.top="-15px";
		oP2.style.fontSize="12px";
		oP2.style.color="#cf680a";
	}
	oP.onclick = function()
	{
		oUnL.style.transform = "rotateX(0deg)";
		oP.style.top="-15px";
		oP.style.fontSize="12px";
		oP.style.color="#cf680a";
		oIn.focus();
	}
	oP1.onclick = function()
	{
		oUnL1.style.transform = "rotateX(0deg)";
		oP1.style.top="-15px";
		oP1.style.fontSize="12px";
		oP1.style.color="#cf680a";
		oFourIn.focus();
	}
	oP2.onclick = function()
	{
		oUnL2.style.transform = "rotateX(0deg)";
		oP2.style.top="-15px";
		oP2.style.fontSize="12px";
		oP2.style.color="#cf680a";
		oIn1.focus();
	}
	oBj2.onclick = function()
	{
		oBottom1.style.display="block";
		this.style.borderBottom="3px solid black";
		oBj1.style.borderBottom="none";
		oBottom.style.display="none";
	}
	oBj1.onclick = function()
	{
		oBottom.style.display="block";
		this.style.borderBottom="3px solid black";
		oBj2.style.borderBottom="none";
		oBottom1.style.display="none";
		
	}
	oDengLu.onclick = function()
	{
		if(reg.test(oIn.value) || reg1.test(oIn.value))
		{
			oNewsTip.style.display="none";
		}
		else{
			oNewsTip.style.display="block";
		}
	}
	oYiJian.onclick = function()
	{
		if(reg.test(oIn1.value) || reg1.test(oIn.value))
		{
			oNewsTip1.style.display="none";
		}
		else{
			oNewsTip1.style.display="block";
		}
	}
	oDuanXin.onclick = function()
	{
		if(reg.test(oIn1.value) || reg1.test(oIn.value))
		{
			oNewsTip1.style.display="none";
		}
		else{
			oNewsTip1.style.display="block";
		}
	}




}



