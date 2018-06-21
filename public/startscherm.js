$(document).ready(function(){
	$('input[type=text]').on('keyup', function(){
		if($('input[type=text]').val().length > 0){
			$('input#naambutton').click(function(){
				$('div.naam').css('display', 'none');
				$('div.difficulty').css('display', 'unset');
				
				if (typeof(Storage) !== "undefined") {
				    // Code for sessionStorage/sessionStorage.
				    sessionStorage.username =  $('input[type=text]').val();
					} 
				else {
					//Sorry! No Web Storage support..
					}
				});

			$('input[type=text]').on('keypress', function (e) {
			    if(e.keyCode  == 13){
			    	sessionStorage.username = $('input[type=text]').val();
			        //Disable textbox to prevent multiple submit
			        $(this).attr("disabled", "disabled");
					$('div.naam').css('display', 'none');
					$('div.difficulty').css('display', 'unset');
			        $(this).removeAttr("disabled");
			        }
			   	});
			}
		});

	$('a.difficultybuttons').click(function(){
		$('div.naam').css('display', 'none');
		$('div.difficulty').css('display', 'none');
		$('div.start').css('display', 'unset');
		if($(this).text().toUpperCase() == 'MAKKELIJK'){sessionStorage.level = 'Easy';}
		else if($(this).text().toUpperCase() == 'GEMIDDELD'){sessionStorage.level = 'Medium';}
		else if($(this).text().toUpperCase() == 'MOEILIJK'){sessionStorage.level = 'Hard';}
		});
});
