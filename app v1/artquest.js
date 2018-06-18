$(document).ready(function(){


	function showFinalWord(){
		$('div.word-container').toggleClass('visible');
		}

	$('div.solution div.entry input').on('focus', function(){
		if($(this).val().length == 0){
			$('div.solution div.hint').css('display','unset');
			$('div.solution div.submit').css('display','none');
				$('div.solution div.correct').css('display','none');
				$('div.solution div.incorrect').css('display','none');
			$('div.solution').css('backgroundColor', 'rgba(255,255,255,0.8)');
			$('div.solution div.entry').css('backgroundColor', 'transparent');
			}

		else{
			$('div.solution div.hint').css('display','none');
			$('div.solution div.submit').css('display','unset');
			$('div.solution div.correct').css('display','none');
			$('div.solution div.incorrect').css('display','none');
			$('div.solution').css('backgroundColor', 'transparent');
			$('div.solution div.entry').css('backgroundColor', 'rgba(255,255,255,0.8)');
			}
		});

	$('div.solution div.entry input').on('keyup', function(){
		if($(this).val().length == 0){
			$('div.solution div.hint').css('display','unset');
			$('div.solution div.submit').css('display','none');
			$('div.solution').css('backgroundColor', 'rgba(255,255,255,0.8)');
			$('div.solution div.entry').css('backgroundColor', 'transparent');
			//$('div.menu div#tally p').html($(this).val().length);
			}

		else {
			$('div.solution div.hint').css('display','none');
			$('div.solution div.submit').css('display','unset');
			$('div.solution').css('backgroundColor', 'transparent');
			$('div.solution div.entry').css('backgroundColor', 'rgba(255,255,255,0.8)');
			//$('div.menu div#tally p').html($(this).val().length);

			$(this).on('keyup', function (e) {
			    if(e.keyCode  == 13){

			        //Disable textbox to prevent multiple submit
			        $(this).attr("disabled", "disabled");

			        if($(this).val().toUpperCase() == "RIJKSMUSEUM"){
						$('div.solution div.hint').css('display','none');
						$('div.solution div.submit').css('display','none');
						$('div.solution div.correct').css('display','unset');
						$('div.solution div.correct svg').css('cursor','default');
						$('div.solution div.incorrect').css('display','none');
						setTimeout(function(){showFinalWord();},300);
						}
					else{
						$('div.solution div.hint').css('display','none');
						$('div.solution div.submit').css('display','none');
						$('div.solution div.correct').css('display','none');
						$('div.solution div.incorrect').css('display','unset');
						//$(this).parent().parent().effect('shake', 15, 1);
				        $(this).removeAttr("disabled");
						}
			        }
			    else {
					$('div.solution div.correct').css('display','none');
					$('div.solution div.incorrect').css('display','none');
				    }
			   	});
			}
		});

	$('div.solution div.submit').click(function(){
		if($(this).siblings('div.solution div.entry input').val().toUpperCase() == "RIJKSMUSEUM"){
	        $(this).siblings('div.solution div.entry input').attr("disabled", "disabled");
			$('div.solution div.hint').css('display','none');
			$('div.solution div.submit').css('display','none');
			$('div.solution div.correct').css('display','unset');
			$('div.solution div.correct svg').css('cursor','default');
			$('div.solution div.incorrect').css('display','none');
			setTimeout(function(){showFinalWord();},300);
			}

		else{
			$('div.solution div.hint').css('display','none');
			$('div.solution div.submit').css('display','none');
			$('div.solution div.correct').css('display','none');
			$('div.solution div.incorrect').css('display','unset');
			//$(this).parent().parent().effect('shake', 15, 1);
			}
		});

	$('div.background.list div.list-view').click(function(){
		$(this).parent('div.background.list').removeClass('list');
		$(this).prev('div.container.hidden').removeClass('hidden');
		$(this).addClass('hidden');

		$('div.background.list').not($(this).parent('div.background.list')).addClass('hidden');
		$('div.level').css('display', 'none');

		$('div.menu div p#score').addClass('hidden');
		$('div.menu div p#back').removeClass('hidden');
		});

	$('div.menu div p#back').click(function(){
		$('div.background').addClass('list');
		$('div.container').addClass('hidden');
		$('div.background div.list-view').removeClass('hidden');

		$('div.background.list.hidden').removeClass('hidden');
		$('div.level').css('display', 'unset');

		$('div.menu div p#score').removeClass('hidden');
		$('div.menu div p#back').addClass('hidden');
		});

	$('div.menu div svg, div.menu div svg~p' ).click(function(){
		showFinalWord();
		});
		
	});