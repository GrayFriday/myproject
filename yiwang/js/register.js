window.onload=function(){
	var oDownTwo = document.querySelector(".down-two");
	var oP = document.querySelector(".down-two p");
	var oP1 = document.querySelector(".down-four p");
	var oIn= document.querySelector(".in");
	var oFourIn= document.querySelector(".four-in");
	var oUnL= document.querySelector(".underLine");
	var oUnL1= document.querySelector(".underLine1");
	var oNewsTip = document.querySelector(".news-tip");
	var reg = /^[1-9]\d{10}$/;
	var reg1 = /^\w+@(qq|128)+\.com$/;
//	console.log(reg.test(12345678912));
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
	oIn.onblur = function()
	{
		if(reg.test(oIn.value) || reg1.test(oIn.value))
		{
			oNewsTip.style.display="none";
		}
		else{
			oNewsTip.style.display="block";
			oIn.value="";
		}
	}

		
		







}
$(".regiest").click(function(){
			var userVal = $(".in").val();
			var psdVal = $(".four-in").val();
			console.log(userVal,psdVal)
		})
		$.ajax({
			url:`https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=${userVal}&passwd=${psdVal}`,
			type:"get",
			success:function( res ){
				// console.log(res)
				if(res.code == 200){
				window.open("https://www.baidu.com/")
				}else if( res.code == 202 ){
					alert(111);
				}
			}
		})
