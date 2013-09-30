// JavaScript Document			function goToImageLink(event){
			function goToImageLink(event){
				$('#imgSlider').attr('src')
				switch($('#imgSlider').attr('src')){
					case "./media/images/projects/raSalesBonus.png":
					window.open('https://github.com/JohnEarle/WindowsFormsApplication3/commit/409045987f07be60b2bac099868d77c9ebd6e720');
					break;
					case "./media/images/projects/radica.png":
					window.open('http://radicatech.com');
					break;
					case "./media/images/projects/confound.png":
					window.open('https://github.com/JohnEarle/WebAssignment1');
					break;
					}
				}