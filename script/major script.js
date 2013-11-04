// JavaScript Document
$(document).ready(function(e) {
            	var activePage = new String("pgBtHome");
				var loadPage = new String('');
				$('.pageSelButton').click(function(event){
					changePage(event);
				});
				//resizes menu text for smaller devices
				$(window).resize(function() {
                    if(document.height < 480 || document.width < 875){
					$('.pageSelButton').css("font-size","12px");
					}
					else{
						$('.pageSelButton').css("font-size","25px");
					}
				});
				//gets clicked buttons id, then loads the appropriate page
				function changePage(event){
				activePage = $(event.target).attr('id');
				$('#contentContainer').fadeOut('slow',function(){
					$('#contentContainer').load("pages/"+$(event.target).attr('id')+".php");
					$('#contentContainer').fadeIn('slow');
					activePage = $(event.target).attr('id');
					selectedButton();
				 	});
				}
				//Not sure how to overload in javascript and dont have the time
				function changePageNonEvent(selection){
				activePage = selection;
				$('#contentContainer').fadeOut('slow',function(){
					$('#contentContainer').load("pages/"+selection+".php");
					$('#contentContainer').fadeIn('slow');
					activePage = selection;
					selectedButton();
				 	});
				}
			
				// 3 photos for the image slide in the array.
				var projectImages = new Array();
				var currentImage = 0;
				projectImages[0] = "./media/images/projects/radica.jpg"
				projectImages[1] = "./media/images/projects/raSalesBonus.jpg"
				projectImages[2] = "./media/images/projects/confound.jpg"
				//the array is advanced to change the image
				//1 being forward 2 being backwards
				function ImageSlider(key){
					switch(key){
					case 1:
						var imgSel = 0;
						if(currentImage == 2){
							imgSel = 0;
						}
						else{
							imgSel = currentImage+1;
						}

						break;
					case 2:
						var imgSel = 0;
						if(currentImage == 0){
							imgSel = 2;
						}
						else{
							imgSel = currentImage-1;
						}
						break;	
					}
											currentImage = imgSel;
						//fading for maxium transition
						$('#imgSlider').fadeOut('fast',function(){
						$('#imgSlider').attr('src',projectImages[imgSel]);
						$('#imgSlider').fadeIn('slow');
						});
				}
				//detects key presses for image slider
	
				$("#contentContainer").swipe({ swipe:function(event,direction,distance,duration,fingerCount){
						if(fingerCount == 1 || fingerCount == 0){
							if(activePage == "pgBtProjects"||activePage == "pgBtHome"){
								if(direction == "right"){
									ImageSlider(1);
								}
								else if(direction == "left"){
									ImageSlider(2);
								}
							}
					}
					else if(fingerCount == 2){
						var forwardPage;
						var backwardPage;
						switch(activePage){
							case "pgBtHome":
								forwardPage = "pgBtAbout";
								backwardPage = "pgBtContact";
							break;
							case "pgBtAbout":
								forwardPage = "pgBtProjects";
								backwardPage = "pgBtHome";
							break;
							case "pgBtProjects":
								forwardPage = "pgBtServices";
								backwardPage = "pgBtAbout";
							break;
							case "pgBtServices":
								forwardPage = "pgBtContact";
								backwardPage = "pgBtProjects";
							break;
							case "pgBtContact":
								forwardPage = "pgBtHome";
								backwardPage = "pgBtServices";
							break;
						}
						if(direction == "right"){
									changePageNonEvent(forwardPage);
								}
								else if(direction == "left"){
									changePageNonEvent(backwardPage);
								}
					}
					}});
				 
				$(document).keyup(function(event){
					if(activePage == "pgBtProjects"||activePage == "pgBtHome"){
						if(event.keyCode == 37){
							ImageSlider(1);
						}
						else if(event.keyCode == 39){
							ImageSlider(2);
						}
					};
			});
			//changes the color to show the selected button to page
			function selectedButton(){
				switch(activePage){
					case "pgBtHome":
					$('#pgBtHome').css('color',"#FFF");
					$('#pgBtAbout').css('color',"#996600");
					$('#pgBtProjects').css('color',"#996600");
					$('#pgBtServices').css('color',"#996600");
					$('#pgBtContact').css('color',"#996600");
					break;
					case "pgBtAbout":
					$('#pgBtHome').css('color',"#996600");
					$('#pgBtAbout').css('color',"#FFF");
					$('#pgBtProjects').css('color',"#996600");
					$('#pgBtServices').css('color',"#996600");
					$('#pgBtContact').css('color',"#996600");
					break;
					case "pgBtProjects":
					$('#pgBtHome').css('color',"#996600");
					$('#pgBtAbout').css('color',"#996600");
					$('#pgBtProjects').css('color',"##FFF");
					$('#pgBtServices').css('color',"#996600");
					$('#pgBtContact').css('color',"#996600");
					break;
					case "pgBtServices":
					$('#pgBtHome').css('color',"#996600");
					$('#pgBtAbout').css('color',"#996600");
					$('#pgBtProjects').css('color',"#996600");
					$('#pgBtServices').css('color',"#FFF");
					$('#pgBtContact').css('color',"#996600");
					break;
					case "pgBtContact":
					$('#pgBtHome').css('color',"#996600");
					$('#pgBtAbout').css('color',"#996600");
					$('#pgBtProjects').css('color',"#996600");
					$('#pgBtServices').css('color',"#996600");
					$('#pgBtContact').css('color',"#FFF");
					break;
				}
			}

			});