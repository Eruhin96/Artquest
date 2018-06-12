$(document).ready(function(){
	$('div.solution div.entry input').on('keyup', function(){
		$('div.solution div.hint').css('display','none');
		$('div.solution div.submit').css('display','unset');
		});
		
	});