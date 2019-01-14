window.onload = function()
{
	var oLeft = document.querySelectorAll(".recomend-right-up-item");
	var oRight = document.querySelectorAll(".recomend-right-pic");
	var arr = document.getElementsByClassName("box-con");
	var oTurningItem = document.querySelectorAll(".turning-item");
	var oTurningItemA = document.querySelector(".turning-item-a");
	// 求出每行能放多少个图片
	// 1,获取容器宽度
	var container = document.querySelector(".container").offsetWidth;
	// 2，获取单个图片宽度
	var imgWidth = arr[0].offsetWidth;
	// 3,求能存放的个数
	var count = parseInt(container/imgWidth);

	// console.log(count)

	// 创建记录高度的数组
	var arrHeight = [];
	for(let i = 0;i<oLeft.length;i++)
	{
		oLeft[i].onmouseenter = function()
		{
			for(let j = 0;j<oRight.length;j++)
			{
				oRight[j].style.display = "none";
			}
			oRight[i].style.display = "block";
		}
	}
	
	for( var i = 0 ; i < arr.length ; i++  ){
		if( i < count ){
			// 记录第一排的高度
			arrHeight[i] = arr[i].offsetHeight;
		}else{
			// 从第二排开始寻找最矮得列增加图片
			var minHeight = Math.min.apply(null,arrHeight);
			// 找到最矮列的下标 minIndex
			var minIndex;
			for( var j = 0 ; j < arrHeight.length ; j++ ){
				if( arrHeight[j] == minHeight ){
					minIndex = j;
				}
			}

			// 将当前图片插入至最小高度的位置
			arr[i].style.position = "absolute";
			arr[i].style.left = arr[0].offsetWidth*minIndex + "px";
			arr[i].style.top = minHeight + "px";

			console.log(minIndex);
			// 更新高度数组
			arrHeight[minIndex] += arr[i].offsetHeight;

		}
	}
	console.log(arrHeight);
//	for(let m = 0;m < oTurningItem.length;m++)
//	{
//		oTurningItem[m].onclick = function()
//		{
//			for(let n = 0;n < oTurningItem.length;n++)
//			{
//				oTurningItem[n].style.background = "white";
//				oTurningItem[n].style.color = "black";
//			}
//			oTurningItem[m].style.background = "black";
//			oTurningItem[m].style.color = "white";
//		}
//		
//	}
		$(".turning-item").click(function(){
			$(this).css({
				"background":"black",
				"color":"white"
			}).siblings().css({
				"background":"white",
				"color":"black"
			})

		})

	
	
	
	
}
