
<head>
	<link href='http://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="fancybox/source/jquery.fancybox.css" type="text/css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/pgBtHome.css" />
    <link href='http://fonts.googleapis.com/css?family=Francois+One' rel='stylesheet' type='text/css' />
    <link rel="stylesheet" type="text/css" href="css.css" />
    <link href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
        <script type="text/javascript" src="fancybox/source/jquery.fancybox.pack.js"></script>
    	<script>
			$(document).ready(function(e) {
            	var activePage = new String("pgBtHome");
				var loadPage = new String('');
				
				$('.pageSelButton').click(function(event){
					changePage(event);
				});

				$(window).resize(function() {
                    if(document.height < 480 || document.width < 875){
					$('.pageSelButton').css("font-size","12px");
					}
					else{
						$('.pageSelButton').css("font-size","25px");
					}
				});

				function changePage(event){
				activePage = $(event.target).attr('id');
				$('#contentContainer').fadeOut('slow',function(){
					$('#contentContainer').load("pages/"+$(event.target).attr('id')+".php");
					$('#contentContainer').fadeIn('slow');
					activePage = $(event.target).attr('id');
					selectedButton();
				 	});
				}
	
				//Fancy Box For Projects Page
				var projectImages = new Array();
				var currentImage = 0;
				projectImages[0] = "./media/images/projects/radica.png"
				projectImages[1] = "./media/images/projects/raSalesBonus.png"
				projectImages[2] = "./media/images/projects/confound.png"
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
						currentImage = imgSel;
						$('#imgSlider').fadeOut('fast',function(){
						$('#imgSlider').attr('src',projectImages[imgSel]);
						$('#imgSlider').fadeIn('slow');
						});
						break;
					case 2:
						break;	
					}
				}
				$(document).keyup(function(event){
					if(activePage == "pgBtProjects"||activePage == "pgBtHome"){
						if(event.keyCode == 37){
							ImageSlider(1);
						};
					};
			});
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
	</script>
</head>
<body>
<div id="menubar">
	<div id="logoContainer">
    	<img id="menuLogo" src="media/images/logo.png" />
    </div>

    <div id="menuItems">
    	<h2 id="pgBtHome" class="pageSelButton">
    		Home
    	</h2>
    
    	<h2 id="pgBtAbout" class="pageSelButton">
    		About me
    	</h2>
    
    	<h2 id="pgBtProjects" class="pageSelButton">
    		Projects
    	</h2>
    
    	<h2 id="pgBtServices" class="pageSelButton">
    		Services
    	</h2>
    
    	<h2 id="pgBtContact" class="pageSelButton">
    		Contact
    	</h2>
    </div>
</div>
<div id="contentContainer">

</div>
</body>
