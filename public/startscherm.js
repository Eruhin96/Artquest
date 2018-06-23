$(document).ready(function(){
	$('input[type=text]').on('keyup', function(){
		if($('input[type=text]').val().length > 0){
			$('input#naambutton').click(function(){
				$('div.naam').css('display', 'none');
				$('div.difficulty').css('display', 'unset');
				
				if (typeof(Storage) !== "undefined") {
				    // Code for localStorage/sessionStorage.
				    localStorage.username =  $('input[type=text]').val();
					} 
				else {
					//Sorry! No Web Storage support..
					}
				});

			$('input[type=text]').on('keypress', function (e) {
			    if(e.keyCode  == 13){
			    	localStorage.username = $('input[type=text]').val();
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
		localStorage.level = $(this).text();
		});
});
