


$(document).ready(function() {
			$(".mainmenu").click(function(){ 
				if($(this).children("div.submenu").css("display") == "none") {
					$(this).css('background-image', 'url(minus.png)');
					$(this).children("div.submenu").show();
				} else {
					$(this).css('background-image', 'url(plus.png)');
					$(this).children("div.submenu").hide();
				}
			});
		});




/*FORM 1 SCRIPT*/




/*END OF FORM 1 SCRIPT*/