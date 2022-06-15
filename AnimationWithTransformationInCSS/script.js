
function transformOriginRotate()
			{
				var box1 = document.getElementById('transform-origin1');
				var box2 = document.getElementById('transform-origin2');
				var box3 = document.getElementById('transform-origin3');
				var box4 = document.getElementById('transform-origin4');
				
				var button=document.getElementById('buttonsTransform-origin');
				
				var flag=false;
	
					button.addEventListener('click',function(event)
					{

						if (!flag)
						{	
							
								box1.style.transform = "rotate(30deg)";
								box2.style.transform = "rotate(30deg)";
								box3.style.transform = "rotate(30deg)";
								box4.style.transform = "rotate(30deg)";
							flag=true;
						}
						else
						{
								box1.style.transform = "rotate(0deg)";
								box2.style.transform = "rotate(0deg)";
								box3.style.transform = "rotate(0deg)";
								box4.style.transform = "rotate(0deg)";
							flag=false;
						}
						
					});
			}
			function transformStyle3d()
			{
			var box2 = document.getElementById('transform-styleParent');
			box2.style.transformStyle = 'preserve-3d';
						
			}
			function transformStyleFlat()
			{
			var box2 = document.getElementById('transform-styleParent');
			box2.style.transformStyle = 'flat';
			}
			function view()
			{
				var show = document.getElementById('showCodeItem');
				var code= document.getElementById('codeRacketExample');
				
				code.style.display = 'none';
					show.elem = code;
					show.addEventListener('click',function(event)
					{
						var style = event.target.elem.style;
	
						if (style.display=='none')
							style.display = 'block';
						else
							style.display = 'none';
					});
				
			}
			function main()
			{
			view();
			transformOriginRotate();
			}
			

