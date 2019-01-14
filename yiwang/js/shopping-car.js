window.onload = function(){
	var oIn = document.querySelector(".In");
	var oIn1 = document.querySelector(".In1");
	var oListPrice = document.querySelector(".list-price");
	var oDownScPrice = document.querySelector(".down-sc-price");
	var oItemPrice = document.querySelectorAll(".item-price-pri");
	console.log(parseInt(oItemPrice[0].innerHTML));
	var oDelete = document.querySelectorAll(".delete");
	var oLi = document.querySelectorAll(".content-list-item");
	var aLi = document.querySelector(".content-list");
	var oListBtn = document.querySelector(".list-btn");
	var oDownScBtn = document.querySelector(".down-sc-btn");
	var aliH = aLi.offsetHeight;
	var oItemIn = document.querySelectorAll(".item-in");
	var checkboxes = document.getElementsByName("work");
	var oDel = document.querySelector(".del");
	var oP = document.createElement("p");
	var count = oDelete.length;
	var sum = 0;
	function allCheck(){
		for(var i = 0;i < checkboxes.length;i ++)
    	{
        	checkboxes[i].checked = true;
        	sum += parseInt(oItemPrice[i].innerHTML);
        	oListPrice.innerHTML = sum;
        	oDownScPrice.innerHTML = sum;
  		}
	}
	function Check(){
        	checkboxes[0].checked = true;
        	sum = parseInt(oItemPrice[0].innerHTML);
        	oListPrice.innerHTML = sum;
        	oDownScPrice.innerHTML = sum;
  	
	}
	function Check1(){
        	checkboxes[1].checked = true;
        	sum = parseInt(oItemPrice[1].innerHTML);
        	oListPrice.innerHTML = sum;
        	oDownScPrice.innerHTML = sum;
  	
	}
	function Uncheck(){
      		  checkboxes[0].checked = false;
      		  oListPrice.innerHTML = 0;
      		  oDownScPrice.innerHTML = 0;
	 	 
		}
	function Uncheck1(){
      		  checkboxes[1].checked = false;
      		  oListPrice.innerHTML = 0;
      		  oDownScPrice.innerHTML = 0;
	 	 
		}
	
	function allUncheck(){
   			 for(var i = 0;i < checkboxes.length;i ++){
      		  checkboxes[i].checked = false;
      		  oListPrice.innerHTML = 0;
      		  oDownScPrice.innerHTML = 0;
  	 	 	}
		}
	oIn.checkOrUncheck = function( obj )
	{
		if(obj.checked)
		{
       	 allCheck();
       	 oIn1.checked=true;
       	 sum =0;
		}
		else
		{
       	 allUncheck();
       	 oIn.checked=false;
    	}
	}
	oIn1.checkOrUncheck = function( obj )
	{
		oListBtn.style.background = "#cf680a";
    	oDownScBtn.style.background = "#cf680a";
		if(obj.checked)
		{
       	 allCheck();
       	 oIn.checked=true;
       	 sum =0;
		}
		else
		{
       	 allUncheck();
       	 oIn.checked=false;
    	}
	}
	oIn.onclick = function()
	{
    	
    	oListBtn.style.background = "#cf680a";
    	oDownScBtn.style.background = "#cf680a";
    	oDel.onclick = function()
    	{
    		count--;
    		var d = confirm("你确定要移除吗？")
    		{
    			if(d == true)
    			{
    				aLi.style.display = "none";
    			}
    			else{
    				aLi.style.display = "block";
    			}
    		}
    		if(count==0)
			{
				oP.innerHTML="失效商品";
				aLi.appendChild(oP);
				console.log(aLi)
				aLi.innerHTML = oP.innerHTML;
			}
    		
    	}
    	
	}
	oIn1.onclick = function()
	{
    	
    	oListBtn.style.background = "#cf680a";
    	oDownScBtn.style.background = "#cf680a";
    	oDel.onclick = function()
    	{
    		var d = confirm("你确定要移除吗？")
    		{
    			if(d == true)
    			{
    				aLi.style.display = "none";
    			}
    			else{
    				aLi.style.display = "block";
    			}
    		}
    		
    	}
    	
	}
	
	for(let j = 0;j< oDelete.length;j++)
	{
		oDelete[j].onclick = function()
		{
			count--;
			var r = confirm("你确定要移除吗？");
			if(r == true)
			{
				oLi[j].style.display = "none";
				aliH =aliH - 162;
				aLi.style.height = aliH + "px";
				oLi[j].style.borderBottom = "none";
			}
			else{
				oLi[j].style.display = "block";
			}
//			console.log(count);
			if(count==0)
			{
				oP.innerHTML="失效商品";
				aLi.appendChild(oP);
				console.log(aLi)
				aLi.innerHTML = oP.innerHTML;
			}
		}
	}
//	for(let m = 0;m < oItemIn.length;m++)
//	{
//		oItemIn[m].onclick = function()
//		{
//		if(oItemIn[m].checked)
//		{
//			sum += parseInt(oItemPrice[m].innerHTML);
//			oListPrice.innerHTML = 0;
//		}
//		}
//	}
oItemIn[0].check = function( obj )
{
	if(obj.checked)
		{
       	 Check();
       	 sum =0;
		}
		else
		{
       	 Uncheck();
    	}
		
}
oItemIn[1].check1 = function( obj )
{
	if(obj.checked)
		{
       	 Check1();
       	 sum =0;
		}
		else
		{
       	 Uncheck1();
    	}
		
}
	
	
}
