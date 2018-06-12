$(document).ready(function(){
	$('div.solution div.entry input').on('keydown', function(){
		$('div.solution div.hint').css('display','none');
		$('div.solution div.submit').css('display','unset');
		$('div.solution').css('backgroundColor', 'transparent');
		$('div.solution div.entry').css('backgroundColor', 'rgba(255,255,255,0.8)');
		});

	$('div.solution div.entry input').on('focus', function(){
		$('div.solution div.hint').css('display','none');
		$('div.solution div.submit').css('display','unset');
		$('div.solution').css('backgroundColor', 'transparent');
		$('div.solution div.entry').css('backgroundColor', 'rgba(255,255,255,0.8)');
		});
	
	if($('div.solution div.entry input').val().length() == 0){
		$('div.solution div.entry input').on('focusout', function(){
			$('div.solution div.hint').css('display','unset');
			$('div.solution div.submit').css('display','none');
			$('div.solution').css('backgroundColor', 'rgba(255,255,255,0.8)');
			$('div.solution div.entry').css('backgroundColor', 'transparent');
			});
		};
	