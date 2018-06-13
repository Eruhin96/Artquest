$(document).ready(function(){
	$('div.solution div.entry input').on('focus', function(){
		if($(this).val().length == 0){
			$('div.solution div.hint').css('display','unset');
			$('div.solution div.submit').css('display','none');
			$('div.solution').css('backgroundColor', 'rgba(255,255,255,0.8)');
			$('div.solution div.entry').css('backgroundColor', 'transparent');
			}

		else{
			$('div.solution div.hint').css('display','none');
			$('div.solution div.submit').css('display','unset');
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
			$('div.menu div#tally p').html($(this).val().length);
			}

		else {
			$('div.solution div.hint').css('display','none');
			$('div.solution div.submit').css('display','unset');
			$('div.solution').css('backgroundColor', 'transparent');
			$('div.solution div.entry').css('backgroundColor', 'rgba(255,255,255,0.8)');
			$('div.menu div#tally p').html($(this).val().length);
			}
		});

	$('div.background.inactive div.list-view').click(function(){
		$(this).parent('div.background.inactive').removeClass('inactive');
		$(this).prev('div.container.hidden').removeClass('hidden');
		$(this).addClass('hidden');

		$('div.background.inactive').not($(this).parent('div.background.inactive')).css('display','none');
		});

	$('div.menu div img').click(function(){
		$('div.container div.word-container').toggleClass('visible');
		});
	});