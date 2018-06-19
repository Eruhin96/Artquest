$(document).ready(function(){

	$('p#name').text('lloydnyarko');

	function showMenu(){
		$('div.word-container').toggleClass('visible');
		}
	function closeMenu(){
		$('div.word-container').removeClass('visible');
		}

	$('div.solution div.entry input').on('focus', function(){
		if($(this).val().length == 0){
			$(this).nextAll('div.solution div.hint').css('display','unset');
			$(this).nextAll('div.solution div.submit').css('display','none');
			$(this).nextAll('div.solution div.correct').css('display','none');
			$(this).nextAll('div.solution div.incorrect').css('display','none');
			$(this).parents('div.container div.solution').css('backgroundColor', 'rgba(255,255,255,0.8)');
			$(this).parent('div.entry').css('backgroundColor', 'transparent');
			}

		else{
			$(this).nextAll('div.solution div.hint').css('display','none');
			$(this).nextAll('div.solution div.submit').css('display','unset');
			$(this).nextAll('div.solution div.correct').css('display','none');
			$(this).nextAll('div.solution div.incorrect').css('display','none');
			$(this).parents('div.container div.solution').css('backgroundColor', 'transparent');
			$(this).parent('div.entry').css('backgroundColor', 'rgba(255,255,255,0.8)');
			}
		});

	$('div.solution div.entry input').on('keyup', function(){
		if($(this).val().length == 0){
			$(this).nextAll('div.solution div.hint').css('display','unset');
			$(this).nextAll('div.solution div.submit').css('display','none');
			$(this).parents('div.container div.solution').css('backgroundColor', 'rgba(255,255,255,0.8)');
			$(this).parent('div.entry').css('backgroundColor', 'transparent');
			$('div.word-container div#score p').html($(this).val().length);
			}

		else {
			$(this).nextAll('div.solution div.hint').css('display','none');
			$(this).nextAll('div.solution div.submit').css('display','unset');
			$(this).parents('div.container div.solution').css('backgroundColor', 'transparent');
			$(this).parent('div.entry').css('backgroundColor', 'rgba(255,255,255,0.8)');
			$('div.word-container div#score p').html($(this).val().length);

			$(this).on('keyup', function (e) {
			    if(e.keyCode  == 13){

			        //Disable textbox to prevent multiple submit
			        $(this).attr("disabled", "disabled");

			        if($(this).val().toUpperCase() == "RIJKSMUSEUM"){						
			        	setTimeout(function(){showMenu();},300);
						$(this).nextAll('div.solution div.hint').css('display','none');
						$(this).nextAll('div.solution div.submit').css('display','none');
						$(this).nextAll('div.solution div.correct').css('display','unset');
						$(this).nextAll('div.solution div.correct').children('svg').css('cursor','default');
						$(this).nextAll('div.solution div.incorrect').css('display','none');
						$(this).parents('div.container').addClass('done');
						$(this).parents('div.container').siblings('div.list-view').addClass('done');
						}
					else{
						$(this).nextAll('div.solution div.hint').css('display','none');
						$(this).nextAll('div.solution div.submit').css('display','none');
						$(this).nextAll('div.solution div.correct').css('display','none');
						$(this).nextAll('div.solution div.incorrect').css('display','unset');
						//$(this).parents().effect('shake', 15, 1);
				        $(this).removeAttr("disabled");
						}
			        }
			    else {
					$(this).nextAll('div.solution div.correct').css('display','none');
					$(this).nextAll('div.solution div.incorrect').css('display','none');
				    }
			   	});
			}
		});

	$('div.solution div.submit').click(function(){
		if($(this).siblings('div.solution div.entry input').val().toUpperCase() == "RIJKSMUSEUM"){			
			setTimeout(function(){showMenu();},300);
	        $(this).siblings('div.solution div.entry input').attr("disabled", "disabled");
			$(this).prev('div.solution div.hint').css('display','none');
			$(this).css('display','none');
			$(this).siblings('div.solution div.correct').css('display','unset');
			$(this).siblings('div.solution div.correct').children('svg').css('cursor','default');
			$(this).siblings('div.solution div.incorrect').css('display','none');
			$(this).parents('div.container').addClass('done');
			$(this).parents('div.container').siblings('div.list-view').addClass('done');
			}

		else{
			$(this).prev('div.solution div.hint').css('display','none');
			$(this).siblings('div.solution div.submit').css('display','none');
			$(this).css('display','none');
			$(this).siblings('div.solution div.incorrect').css('display','unset');
			//$(this).parents().effect('shake', 15, 1);
			}
		});

	$('div.background.list div.list-view').click(function(){
		$(this).parent('div.background.list').removeClass('list');
		$(this).prev('div.container.hidden').removeClass('hidden');
		$(this).addClass('hidden');

		$('div.background.list').not($(this).parent('div.background.list')).addClass('hidden');
		$('div.level').css('display', 'none');

		$('div.header div p#home').addClass('hidden');
		$('div.header div p#back').removeClass('hidden');
		});

	$('div.header div p#back').click(function(){
		closeMenu();
		$('div.background').addClass('list');
		$('div.container').addClass('hidden');
		$('div.background div.list-view').removeClass('hidden');

		$('div.background.list.hidden').removeClass('hidden');
		$('div.level').css('display', 'unset');

		$('div.header div p#home').removeClass('hidden');
		$('div.header div p#back').addClass('hidden');
		});

	$('div.header div svg, div.header div svg~p' ).click(function(){
		showMenu();
		});
		
	});