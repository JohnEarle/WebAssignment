// JavaScript Document
//This Is the functonality of the Keep Connected widget. It must be started after the dom of anypage its on is loaded
			$(document).ready(function(e) {
			$('.keepConnected').click(function(event){
				alert('heyy');
					switch($(event.target).attr('id')){
					case 'facebookIcon':
					window.open('https://www.facebook.com/JohnChristopherEarle');
					break;
					case 'linkedInIcon':
					window.open('http://ca.linkedin.com/pub/john-earle/71/620/391/');
					break;
					case 'twitterIcon':
					window.open('https://twitter.com/BlackJohnEarle','John Earle Twitter');
					break;
					}
				});
			});