$(document).ready(function(){

	$('p#name').text(sessionStorage.username);
	var level = sessionStorage.level;
	var counter = 0;
	var query = firebase.database().ref(level).orderByKey();
	var indicesClue = [];
	var indicesClue2 = [];

	query.once("value").then(function(snapshot) {

	var word = snapshot.child('woord').val().toUpperCase();
	var wordLength = parseInt(word.replace(/ /g,'').length);
	//var letterPos = word.indexOf();
	
	for (var i = 0; i < word.length; i++) {
		var letterAtI = word.charAt(i);
		if(letterAtI !== ' ') {
			//console.log(word.charAt(i));
			$('div.final-word').append('<div id="" class="letter"><input type="text" maxlength="1" value="" disabled><span></span></div>');
			}
		else {
			$('div.final-word').append('<div id="space" style="visibility:hidden;width:20px;" class="letter"><input type="text" maxlength="1" disabled><span></span></div>');
			}
		}

	    snapshot.forEach(function(childSnapshot) {
	    	var clue = childSnapshot.child('clue').val();
	    	var imageURL = childSnapshot.child('link foto').val();
		    var key = childSnapshot.key;
		    var clue2 = childSnapshot.child('clue2').val();
		    counter++;
		    if(childSnapshot.hasChildren()){
			    var letter = childSnapshot.child('letter').val().toUpperCase();

		    	$('div.clues').append( 
		    	'<div class="background list" style="background-image:url(' + imageURL + ');">' +
					'<div class="container hidden">' +

						'<div class="riddle">' +
								'<p>"' + clue + '"</p>' +
						'</div>' +

						'<div class="solution">' +
							'<div class="entry">' +
								'<input data-index="'+ index(letter, word, indicesClue) +'" type="text" placeholder="Vul titel kunstwerk in" method="GET"></input>' +
								
								'<div class="hint">' +
									'<svg id="" height="1792" viewBox="0 0 1792 1792" width="1792" xmlns="http://www.w3.org/2000/svg"">' +
										'<path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/>' +
									'</svg>' +
								'</div>' +
								'<div class="submit">' +
									'<svg height="1792" viewBox="0 0 1792 1792" width="1792" xmlns="http://www.w3.org/2000/svg"><path d="M1413 896q0-27-18-45l-91-91-362-362q-18-18-45-18t-45 18l-91 91q-18 18-18 45t18 45l189 189h-502q-26 0-45 19t-19 45v128q0 26 19 45t45 19h502l-189 189q-19 19-19 45t19 45l91 91q18 18 45 18t45-18l362-362 91-91q18-18 18-45zm251 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>' +
								'</div>' +
								'<div class="correct">' +
									'<svg contentScriptType="text/ecmascript" contentStyleType="text/css" enable-background="new 0 0 2048 2048" height="2048px" id="Layer_1" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="121.0 0 1550.0 2048" width="1550.0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"><path d="M1671,694c0,26.667-9.333,49.333-28,68l-724,724l-136,136c-18.667,18.667-41.333,28-68,28s-49.333-9.333-68-28l-136-136  l-362-362c-18.667-18.667-28-41.333-28-68s9.333-49.333,28-68l136-136c18.667-18.667,41.333-28,68-28s49.333,9.333,68,28l294,295  l656-657c18.667-18.667,41.333-28,68-28s49.333,9.333,68,28l136,136C1661.667,644.667,1671,667.333,1671,694z"/></svg>' +
								'</div>' +
								'<div class="incorrect">' +
									'<svg contentScriptType="text/ecmascript" contentStyleType="text/css" enable-background="new 0 0 2048 2048" height="2048px" id="Layer_1" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="110.0 0 1188.0 2048" width="1188.0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"><path d="M1298,1450c0,26.667-9.333,49.333-28,68l-136,136c-18.667,18.667-41.333,28-68,28s-49.333-9.333-68-28l-294-294l-294,294  c-18.667,18.667-41.333,28-68,28s-49.333-9.333-68-28l-136-136c-18.667-18.667-28-41.333-28-68s9.333-49.333,28-68l294-294L138,794  c-18.667-18.667-28-41.333-28-68s9.333-49.333,28-68l136-136c18.667-18.667,41.333-28,68-28s49.333,9.333,68,28l294,294l294-294  c18.667-18.667,41.333-28,68-28s49.333,9.333,68,28l136,136c18.667,18.667,28,41.333,28,68s-9.333,49.333-28,68l-294,294l294,294  C1288.667,1400.667,1298,1423.333,1298,1450z"/></svg>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="list-view">' +
						'<p>Clue ' + counter + '</p>' +
					'</div>' +
				'</div>');

		   		$('div.features').append('<p id="'+counter+'" data-index="'+index(letter, word, indicesClue2)+'" data-acquired="not-yet" class="hidden">"' + clue2 + '"</p>');
			    };
		  	});


		});
	function showMenu(){
		$('div.word-container').toggleClass('visible');
		}
	function closeMenu(){
		$('div.word-container').removeClass('visible');
		}
	function showSettings(){
		$('div.settings').removeClass('hidden');
		}
	function hideSettings(){
		$('div.settings').addClass('hidden');
		}
	function id(param){
		return $(param).data("index");
		};

	function index(letter, word, indices){
		var index = word.indexOf(letter);
		var times = $.grep(word, function (elem) {
		    return elem === letter;
			}).length;

		for(var i = 0; i<times; i++){
			if ($.inArray(index, indices) > -1){
				index = word.indexOf(letter, index+1);
				}
			}
		indices.push(index);
		return index+1;
		};

	function prevSecondClue(rank){
		var eq = parseInt(rank)-1;
		var size = $('div.features p[data-acquired="yes"]').length;
		var first = parseInt($('div.features p[data-acquired="yes"]').first()[0].id)-1;
		var last =  parseInt($('div.features p[data-acquired="yes"]').last()[0].id);

		$('div.final-word div.letter input').css("border", "1.5px none orange");

		if(eq == first){eq = last};
		$('span#clue2').text("Clue " + eq);
		//$('span#clue2').text(last);
		//$('span#clue2').text($('div.features p').eq(eq-1).attr("data-acquired")+"yaa");
		//
		for(var i = 1; i < last; i++){
			if($('div.features p').eq(eq-i).attr("data-acquired") == "yes"){
				var index = parseInt($('div.features p').eq(eq-i).attr("data-index"));
				$('div.features p').addClass('hidden');
				$('div.features p').eq(eq-i).removeClass('hidden');
				$('span#clue2').text("Clue " + $('div.features p:not(.hidden)')[0].id);
				$('div.final-word div.letter input').css("border", "1.5px none orange");
				$('div.final-word div.letter:nth-of-type('+index+') input').css("border", "1.5px solid orange");
				return;
				}
			else{
				var index = parseInt($('div.features p').eq(last-1).attr("data-index"));
				$('div.features p').addClass('hidden');
				$('div.features p').eq(last-1).removeClass('hidden');
				$('span#clue2').text("Clue " +  (last));
				$('div.final-word div.letter input').css("border", "1.5px none orange");
				$('div.final-word div.letter:nth-of-type('+index+') input').css("border", "1.5px solid orange");
				}
			}
		};

	function nextSecondClue(rank){
		var eq = parseInt(rank)-1;
		var size = $('div.features p[data-acquired="yes"]').length - 1;
		var first = parseInt($('div.features p[data-acquired="yes"]').first()[0].id)-1;
		var last = parseInt($('div.features p[data-acquired="yes"]').last()[0].id);


		if(eq == last){eq = -1};
		$('span#clue2').text("Clue " + (eq+2));
		//$('span#clue2').text(first);
		//$('span#clue2').text($('div.features p').eq(eq+1).attr("data-acquired")+"yaa");
		//
		for(var i = 1; i < last+1; i++){
			if($('div.features p').eq(eq+i).attr("data-acquired") == "yes"){
				var index = parseInt($('div.features p').eq(eq+i).attr("data-index"));
				$('div.features p').addClass('hidden');
				$('div.features p').eq(eq+i).removeClass('hidden');
				$('span#clue2').text("Clue " + $('div.features p:not(.hidden)')[0].id);
				$('div.final-word div.letter input').css("border", "1.5px none orange");
				$('div.final-word div.letter:nth-of-type('+index+') input').css("border", "1.5px solid orange");
				return;
				}
			else{
				var index = parseInt($('div.features p').eq(first).attr("data-index"));
				$('div.features p').addClass('hidden');
				$('div.features p').eq(first).removeClass('hidden');
				$('span#clue2').text("Clue " +  (first+1));
				$('div.final-word div.letter input').css("border", "1.5px none orange");
				$('div.final-word div.letter:nth-of-type('+index+') input').css("border", "1.5px solid orange");
				}
			}
		};

	$('div.features svg#up').on('click', function(){
			//$('p#home, p#back').text($(this).siblings('div.features p:not(.hidden)')[0].id);
			prevSecondClue($(this).siblings('div.features p:not(.hidden)')[0].id);
			});
	$('div.features svg#down').on('click', function(){
			//$('p#home, p#back').text($(this).siblings('div.features p:not(.hidden)')[0].id);
			nextSecondClue($(this).siblings('div.features p:not(.hidden)')[0].id);
			});

	$('div.clues').on('focus', 'div.solution div.entry input', function(){
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

	$('div.clues').on('keyup', 'div.solution div.entry input', function(){
		if($(this).val().length == 0){
			$(this).nextAll('div.solution div.hint').css('display','unset');
			$(this).nextAll('div.solution div.submit').css('display','none');
			$(this).parents('div.container div.solution').css('backgroundColor', 'rgba(255,255,255,0.8)');
			$(this).parent('div.entry').css('backgroundColor', 'transparent');
			//$('div.word-container div#score span').html($(this).val().length);
			}

		else {
			$(this).nextAll('div.solution div.hint').css('display','none');
			$(this).nextAll('div.solution div.submit').css('display','unset');
			$(this).parents('div.container div.solution').css('backgroundColor', 'transparent');
			$(this).parent('div.entry').css('backgroundColor', 'rgba(255,255,255,0.8)');
			//$('div.word-container div#score span').html($(this).val().length);

			$('div.clues').on('keyup', 'div.solution div.entry input', function (e) {
			    if(e.keyCode  == 13){

			        //Disable textbox to prevent multiple submit
			        $(this).attr("disabled", "disabled");

			        if($(this).val().toUpperCase() == "RIJKSMUSEUM"){						
			        	var index = (id(this));	
						var rank = $(this).parents('div.background').index();
			        	
			        	setTimeout(function(){
			        		showMenu();
			        		$('div.final-word div.letter:nth-of-type('+index+') input').removeAttr('disabled');
			        		//getSeocondClue();
			        		$('div.features P').eq(rank).attr("data-acquired", "yes");
				    		$('div.features p').addClass('hidden');
			        		$('div.features p').eq(rank).removeClass('hidden');
			        		if($('div.features p[data-acquired="yes"]').length > 1){
				        		$('div.features svg#up').removeClass('hidden');
				        		$('div.features svg#down').removeClass('hidden');
					        	}		
    						$('span#clue2').text("Clue " + (rank+1));
						        },300);
						


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

	$('div.clues').on('click', 'div.solution div.submit',function(){
		if($(this).siblings('div.solution div.entry input').val().toUpperCase() == "RIJKSMUSEUM"){
			var index = id($(this).siblings('div.solution div.entry input'));	
			var rank = $(this).parents('div.background').index();		
			
			setTimeout(function(){
				showMenu();
				$('div.final-word div.letter:nth-of-type('+index+') input').removeAttr('disabled');
				//getSeocondClue();
        		$('div.features P').eq(rank).attr("data-acquired", "yes");
	    		$('div.features p').addClass('hidden');
        		$('div.features p').eq(rank).removeClass('hidden');
        		if($('div.features p[data-acquired="yes"]').length > 1){
	        		$('div.features svg#up').removeClass('hidden');
	        		$('div.features svg#down').removeClass('hidden');
		        	}		
				$('span#clue2').text("Clue " + (rank+1));
			        },300);
	        


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

	$('div.clues').on('click', 'div.background.list div.list-view', function(){
		$(this).parent('div.background.list').removeClass('list');
		$(this).prev('div.container.hidden').removeClass('hidden');
		$(this).addClass('hidden');

		$('div.background.list').not($(this).parent('div.background.list')).addClass('hidden');
		//$('div.level').css('display', 'none');

		$('div.header div p#home').addClass('hidden');
		$('div.header div p#back').removeClass('hidden');
		closeMenu();
		hideSettings();
		});

	$('div.header div p#back').click(function(){
		closeMenu();
		hideSettings();
		$('div.background').addClass('list');
		$('div.container').addClass('hidden');
		$('div.background div.list-view').removeClass('hidden');

		$('div.background.list.hidden').removeClass('hidden');
		//$('div.level').css('display', 'unset');

		$('div.header div p#home').removeClass('hidden');
		$('div.header div p#back').addClass('hidden');
		});

	$('div.header div svg, div.header div svg~p' ).click(function(){
		showMenu();
		hideSettings();
		});

	$('div#settings p, div#settings svg').click(function(){
		showSettings();
		});

	$('div.settings svg#close').click(function(){
		$('div.settings').addClass('hidden');
		});

	});