$(document).ready(function(){
	$('input[type=text]').on('keyup', function(){
		if($('input[type=text]').val().length > 0){
			$('input#naambutton').click(function(){
				$('div.naam').css('display', 'none');
				$('div.difficulty').css('display', 'unset');
				});

			$('input[type=text]').on('keypress', function (e) {
			    if(e.keyCode  == 13){

			        //Disable textbox to prevent multiple submit
			        $(this).attr("disabled", "disabled");
					$('div.naam').css('display', 'none');
					$('div.difficulty').css('display', 'unset');

			        $(this).removeAttr("disabled");
			         }
			   	});
			}
		});

	$('input.difficultybuttons').click(function(){
		$('div.naam').css('display', 'none');
		$('div.difficulty').css('display', 'none');
		$('div.start').css('display', 'unset');
		});
});