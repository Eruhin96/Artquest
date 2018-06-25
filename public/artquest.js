$(document).ready(function(){
	
	//Initialize Firebase
	var config = {
	    apiKey: "AIzaSyC2zvJY8KAcoyGtK-EaEQO1ccfZXutskNg",
	    authDomain: "artquest-3935e.firebaseapp.com",
	    databaseURL: "https://artquest-3935e.firebaseio.com",
	    projectId: "artquest-3935e",
	    storageBucket: "artquest-3935e.appspot.com",
	    messagingSenderId: "1034727271143"
		};
	firebase.initializeApp(config);

	$('p#name').text(sessionStorage.username);
	var level = sessionStorage.level;
	var counter = 0;
	var query = firebase.database().ref(level).orderByKey();
	var indicesClue = [];
	var indicesClue2 = [];

	query.once("value").then(function(snapshot) {

	var word = snapshot.child('woord').val().toUpperCase();
	var egg = word.replace(/ /g,'');
	var wordLength = parseInt(egg.length);
	//var letterPos = word.indexOf();
	
	for (var i = 0; i < word.length; i++) {
		var letterAtI = word.charAt(i);
		if(letterAtI !== ' ') {
			//console.log(word.charAt(i));
			$('div.final-word').append('<div class="letter"><input type="text" maxlength="1" value="" disabled><span></span></div>');
			}
		else {
			$('div.final-word').append('<div id="space" style="visibility:hidden;width:20px;" class="letter"><input type="text" maxlength="1" disabled><span></span></div>');
			}
		}

	$('div.final-word').append('<div class="egg hidden"><p>'+egg+'</p></div>');


	    snapshot.forEach(function(childSnapshot) {
	    	var clue = childSnapshot.child('clue').val();
	    	var imageURL = childSnapshot.child('link foto').val();
		    var ans = childSnapshot.key;
		    var clue2 = childSnapshot.child('clue2').val();
		    var hint1 = childSnapshot.child('hint 1').val();
		    var hint2 = childSnapshot.child('hint 2').val();
		    var hint3 = childSnapshot.child('hint 3').val();
		    counter++;
		    if(childSnapshot.hasChildren()){
			    if(level != "Easy"){
			    	var letter = childSnapshot.child('letter').val().toUpperCase();}
			    else{letter = ""}

		    	$('div.clues').append( 
		    	'<div class="background list" style="background-image:url(' + imageURL + ');">' +
					'<div class="container hidden">' +

						'<div class="riddle">' +
								'<p>"' + clue + '"</p>' +
						'</div>' +

						'<div class="hints">' +
							'<p class="hint hidden" data-hint="off" id="1">' + hint1 + '</p>' +
							'<p class="hint hidden" data-hint="off" id="2">' + hint2 + '</p>' +
							'<p class="hint hidden" data-hint="off" id="3">' + hint3 + '</p>' +
						'</div>' +

						'<div class="solution">' +
							'<div class="entry">' +
								'<input data-index="'+ index(letter, word, indicesClue) +'" type="text" placeholder="Vul titel kunstwerk in" method="GET"></input>' +
								
								'<div class="hint">' +
									'<svg style="enable-background:new 0 0 250 250;" version="1.1" viewBox="0 0 250 250" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">' +
										'.st0{fill:#FCC12D;}' +
										'.st1{fill:#46E6F2;}' +
										'.st2{fill:none;stroke:#231F20;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}' +
										'.st3{fill:#FFFFFF;}' +
										'.st4{fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}' +
									'</style><path class="st0" d="M167.1,111c0-24.2-20.9-43.5-45.7-40.7c-18.5,2.1-33.6,16.9-36,35.4  c-1.5,11.5,1.9,22.2,8.3,30.4c7.3,9.4,11,21.2,11,33.2v1.7h42.8v-1.7c0-12.4,4.4-24.2,11.7-34.1C164.2,128.4,167.1,120.1,167.1,111z  " id="XMLID_19_"/><path class="st1" d="M146.2,182h-40.4c-3,0-5.5-2.4-5.5-5.5l0,0c0-3,2.4-5.5,5.5-5.5h40.4c3,0,5.5,2.4,5.5,5.5l0,0  C151.7,179.5,149.2,182,146.2,182z" id="XMLID_18_"/><path class="st1" d="M143.2,192.8h-34.5c-2.8,0-5-2.3-5-5v-0.6c0-2.8,2.3-5,5-5h34.5c2.8,0,5,2.3,5,5v0.6  C148.3,190.5,146,192.8,143.2,192.8z" id="XMLID_17_"/><path class="st1" d="M111.8,195.4v0.1c0,4.5,3.6,8.1,8.1,8.1h12.2c4.5,0,8.1-3.6,8.1-8.1v-0.1c0-1.4-1.2-2.6-2.6-2.6  h-23.2C113,192.8,111.8,194,111.8,195.4z" id="XMLID_16_"/><path class="st2" d="M164,107.9c0-24.2-20.9-43.5-45.7-40.7c-18.5,2.1-33.6,16.9-36,35.4  c-1.5,11.5,1.9,22.2,8.3,30.4c7.3,9.4,11,21.2,11,33.2v1.7h42.8v-1.7c0-12.4,4.4-24.2,11.7-34.1C161.1,125.3,164,116.9,164,107.9z" id="XMLID_15_"/><path class="st2" d="M140.1,189.6h-34.5c-2.8,0-5-2.3-5-5V184c0-2.8,2.3-5,5-5h34.5c2.8,0,5,2.3,5,5v0.6  C145.1,187.4,142.9,189.6,140.1,189.6z" id="XMLID_14_"/><path class="st2" d="M108.6,192.2v0.1c0,4.5,3.6,8.1,8.1,8.1h12.2c4.5,0,8.1-3.6,8.1-8.1v-0.1c0-1.4-1.2-2.6-2.6-2.6  h-23.2C109.8,189.6,108.6,190.8,108.6,192.2z" id="XMLID_13_"/><ellipse class="st3" cx="102.1" cy="91.9" id="XMLID_12_" rx="6.9" ry="11.8" transform="matrix(0.7723 0.6352 -0.6352 0.7723 81.5971 -43.9285)"/><polyline class="st4" id="XMLID_11_" points="132.1,130 123,167.1 114,130 "/><path class="st4" d="M106.7,125.5c4.1,0,4.1,3.4,8.1,3.4c4.1,0,4.1-3.4,8.1-3.4c4.1,0,4.1,3.4,8.1,3.4  c4.1,0,4.1-3.4,8.1-3.4" id="XMLID_10_"/><line class="st2" id="XMLID_9_" x1="123" x2="123" y1="56.5" y2="40.8"/><line class="st2" id="XMLID_8_" x1="150.9" x2="158" y1="60.2" y2="46.2"/><line class="st2" id="XMLID_7_" x1="169.9" x2="179.3" y1="75.9" y2="69.7"/><line class="st2" id="XMLID_6_" x1="176.7" x2="184.3" y1="97.8" y2="96.6"/><line class="st2" id="XMLID_5_" x1="95.1" x2="88" y1="60.2" y2="46.2"/><line class="st2" id="XMLID_4_" x1="76.1" x2="66.7" y1="75.9" y2="69.7"/><line class="st2" id="XMLID_3_" x1="69.3" x2="61.7" y1="97.8" y2="96.6"/><path class="st2" d="M143,178.8h-40.4c-3,0-5.5-2.4-5.5-5.5v0c0-3,2.4-5.5,5.5-5.5H143c3,0,5.5,2.4,5.5,5.5v0  C148.5,176.4,146,178.8,143,178.8z" id="XMLID_2_"/></svg>' + 
								'</div>' +
								'<div class="submit">' +
									'<svg height="1792" viewBox="0 0 1792 1792" width="1792" xmlns="http://www.w3.org/2000/svg"><path d="M1413 896q0-27-18-45l-91-91-362-362q-18-18-45-18t-45 18l-91 91q-18 18-18 45t18 45l189 189h-502q-26 0-45 19t-19 45v128q0 26 19 45t45 19h502l-189 189q-19 19-19 45t19 45l91 91q18 18 45 18t45-18l362-362 91-91q18-18 18-45zm251 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>' +
								'</div>' +
								'<div class="correct">' +
									'<svg data-correct="'+ ans +'" contentScriptType="text/ecmascript" contentStyleType="text/css" enable-background="new 0 0 2048 2048" height="2048px" id="Layer_1" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="121.0 0 1550.0 2048" width="1550.0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"><path d="M1671,694c0,26.667-9.333,49.333-28,68l-724,724l-136,136c-18.667,18.667-41.333,28-68,28s-49.333-9.333-68-28l-136-136  l-362-362c-18.667-18.667-28-41.333-28-68s9.333-49.333,28-68l136-136c18.667-18.667,41.333-28,68-28s49.333,9.333,68,28l294,295  l656-657c18.667-18.667,41.333-28,68-28s49.333,9.333,68,28l136,136C1661.667,644.667,1671,667.333,1671,694z"/></svg>' +
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

		//
		for(var i = 1; i < last; i++){
			if($('div.features p').eq(eq-i).attr("data-acquired") == "yes"){
				var index = parseInt($('div.features p').eq(eq-i).attr("data-index"));
				$('div.features p').addClass('hidden');
				$('div.features p').eq(eq-i).removeClass('hidden');
				$('span#clue2').text("Clue " + $('div.features p:not(.hidden)')[0].id);

			    if(level != "Easy"){
					$('div.final-word div.letter input').css("border", "1.5px none orange");
					$('div.final-word div.letter:nth-of-type('+index+') input').css("border", "1.5px solid orange");
				    }
				return;
				}
			else{
				var index = parseInt($('div.features p').eq(last-1).attr("data-index"));
				$('div.features p').addClass('hidden');
				$('div.features p').eq(last-1).removeClass('hidden');
				$('span#clue2').text("Clue " +  (last));

			    if(level != "Easy"){
					$('div.final-word div.letter input').css("border", "1.5px none orange");
					$('div.final-word div.letter:nth-of-type('+index+') input').css("border", "1.5px solid orange");
				    }
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
		//
		for(var i = 1; i < last+1; i++){
			if($('div.features p').eq(eq+i).attr("data-acquired") == "yes"){
				var index = parseInt($('div.features p').eq(eq+i).attr("data-index"));
				$('div.features p').addClass('hidden');
				$('div.features p').eq(eq+i).removeClass('hidden');
				$('span#clue2').text("Clue " + $('div.features p:not(.hidden)')[0].id);
			    
			    if(level != "Easy"){
				    $('div.final-word div.letter input').css("border", "1.5px none orange");
					$('div.final-word div.letter:nth-of-type('+index+') input').css("border", "1.5px solid orange");
					}
				return;
				}
			else{
				var index = parseInt($('div.features p').eq(first).attr("data-index"));
				$('div.features p').addClass('hidden');
				$('div.features p').eq(first).removeClass('hidden');
				$('span#clue2').text("Clue " +  (first+1));
			    
			    if(level != "Easy"){
				    $('div.final-word div.letter input').css("border", "1.5px none orange");
					$('div.final-word div.letter:nth-of-type('+index+') input').css("border", "1.5px solid orange");
					}
				}
			}
		};

	$('div.features svg#up').on('click', function(){
			prevSecondClue($(this).siblings('div.features p:not(.hidden)')[0].id);
			});
	$('div.features svg#down').on('click', function(){
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
			}

		else {
			$(this).nextAll('div.solution div.hint').css('display','none');
			$(this).nextAll('div.solution div.submit').css('display','unset');
			$(this).parents('div.container div.solution').css('backgroundColor', 'transparent');
			$(this).parent('div.entry').css('backgroundColor', 'rgba(255,255,255,0.8)');

			$('div.clues').on('keydown', 'div.solution div.entry input', function (e) {
				if(e.keyCode == 76 && e.shiftKey && e.ctrlKey){$(this).val($(this).parent('div.solution div.entry').children().children('div.correct svg').attr('data-correct'));}			// cheat--GOD MODE--
				});

			$('div.clues').on('keyup', 'div.solution div.entry input', function (e) {
				
				//$(this).val($(this).parent('div.solution div.entry').children().children('div.correct svg').attr('data-correct'));		// Demo   
			
			    if(e.keyCode  == 13){

			        //Disable textbox to prevent multiple submit
			        $(this).attr("disabled", "disabled");

			        if($(this).val().toUpperCase() == $(this).parent('div.solution div.entry').children('div.correct').children('div.correct svg').attr('data-correct').toUpperCase()  || $(this).val().toUpperCase() == $(this).parent('div.solution div.entry').children('div.correct').children('div.correct svg').attr('data-correct').toUpperCase() + " "){						
			        	var index = (id(this));	
						var rank = $(this).parents('div.background').index();
			        	
			        	setTimeout(function(){
			        		showMenu();
						    if(level != "Easy"){
						    	$('div.final-word div.letter:nth-of-type('+index+') input').removeAttr('disabled');
							    }
						    else{
								$('div.final-word div.letter input').removeAttr('disabled');
							    }

			        		$('div.features P').eq(rank).attr("data-acquired", "yes");
				    		$('div.features p').addClass('hidden');
			        		$('div.features p').eq(rank).removeClass('hidden');
			        		if($('div.features p[data-acquired="yes"]').length > 1){
				        		$('div.features svg#up').removeClass('hidden');
				        		$('div.features svg#down').removeClass('hidden');

							    $('div.final-word div.letter input').css("border", "1.5px none orange");
								$('div.final-word div.letter:nth-of-type('+index+') input').css("border", "1.5px solid orange");
					        	}		
    						$('span#clue2').text("Clue " + (rank+1));

							if($('div.features p[data-acquired="yes"]').length >= $('div.features p[data-acquired="not-yet"]').length){
								$('div.word-container a.enter').removeClass('hidden');
								}
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

	$('div.clues').on('click', 'div.solution div.hint svg', function(){
		$(this).parents('div.container div.solution').siblings('div.container div.hints').children('div.hints p[data-hint="off"]').first().attr('data-hint', 'on').removeClass('hidden');
		});

	$('div.clues').on('click', 'div.solution div.submit',function(){

		//$(this).siblings('div.solution div.entry input').val($(this).parent('div.solution div.entry').children().children('div.correct svg').attr('data-correct'));			// cheat

		if($(this).siblings('div.solution div.entry input').val().toUpperCase() == $(this).parent('div.solution div.entry').children().children('div.correct svg').attr('data-correct').toUpperCase() || $(this).siblings('div.solution div.entry input').val().toUpperCase() == $(this).parent('div.solution div.entry').children().children('div.correct svg').attr('data-correct').toUpperCase() + " " ){
			var index = id($(this).siblings('div.solution div.entry input'));	
			var rank = $(this).parents('div.background').index();		
			
			setTimeout(function(){
				showMenu();
			    if(level != "Easy"){
			    	$('div.final-word div.letter:nth-of-type('+index+') input').removeAttr('disabled');
				    }
			    else{
					$('div.final-word div.letter input').removeAttr('disabled');
				    }

        		$('div.features P').eq(rank).attr("data-acquired", "yes");
	    		$('div.features p').addClass('hidden');
        		$('div.features p').eq(rank).removeClass('hidden');
        		if($('div.features p[data-acquired="yes"]').length > 1){
	        		$('div.features svg#up').removeClass('hidden');
	        		$('div.features svg#down').removeClass('hidden');
		        	}		
				$('span#clue2').text("Clue " + (rank+1));

				if($('div.features p[data-acquired="yes"]').length >= $('div.features p[data-acquired="not-yet"]').length){
					$('div.word-container a.enter').removeClass('hidden');
					}
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

		$('div.header div p#home').addClass('hidden');
		$('div.header div p#back').removeClass('hidden');
		closeMenu();
		hideSettings();
		});

	$('div.word-container a.enter').on('click', function(){
		if($('a.enter').attr('data-clicked') == "once"){

			var times = $('div.final-word div.letter input').length;
			var answer = "";
			var egg = $("div.egg p").text();

			for(var i = 0; i<times; i++){
				answer = answer + $('div.final-word div.letter input').eq(i).val();
				}

			answer = answer.toUpperCase();
			if(answer == egg){
				//$('a.enter').html($("div.egg p").text());
				//congrats
				}
			}
		else{
			$('div.final-word div.letter input').removeAttr('disabled');
			$('div.word-container a.enter').html('Klaar');
			$('div.word-container a.enter').attr('data-clicked', 'once');
			$('div.word-container').on('click', 'a.enter[data-clicked="once"]' ,function(){
				});
			};
		});

	$('div.header div p#back').click(function(){
		closeMenu();
		hideSettings();
		$('div.background').addClass('list');
		$('div.container').addClass('hidden');
		$('div.background div.list-view').removeClass('hidden');

		$('div.background.list.hidden').removeClass('hidden');

		$('div.header div p#home').removeClass('hidden');
		$('div.header div p#back').addClass('hidden');
		});

	$('div.header div svg, div.header div svg~p' ).click(function(){
		showMenu();
		hideSettings();
		});

	$(function() {
	    var charLimit = 1;
		var times = $(this).parent('div.final-word div.letter').index();
	    var prev = $(this).parent("div.letter").prev("div.letter").children("input:not(disabled)");
	    var nxt = $(this).parent("div.letter").next("div.letter");

	    	$('div.final-word').on('keydown', 'div.letter input', function(e){ 

	        var keys = [8, 9, /*16, 17, 18,*/ 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];

	        if (e.which == 8 && $(this).val().length == 0){
	            $(this).parent("div.letter").prev("div.letter").children("input:not(disabled)").focus();
	        	} 
	        else if ($.inArray(e.which, keys) >= 0){
	            return true;
	        	}
	        else if ($(this).val().length >= charLimit) {
	            $(this).parent("div.letter").next("div.letter").children("input:not(disabled)").focus();
	            return false;
	        	}
        	else if (e.shiftKey || e.which <= 58){
	            return false;
		        }

	    }).on('keyup', 'div.letter input', function(){
		if($(this).val().length == charLimit ){
			function next(elem){
				$(elem).parent("div.letter").next("div.letter").children("input").focus();
				};

   			var nxt = $(this).parent("div.letter").next("div.letter");

			next(this);
			if(nxt.children("input").is(":disabled")){
				var eq = parseInt($(this).parent().index());
				for(var i = 0; i<7; i++){

					//$('a.enter').html(!$("div.letter").eq(eq+i).children("input").is(":disabled"));
					if(!$("div.letter").eq(eq+i).children("input").is(":disabled")){return}
					}
				}
			}	
		});
	});

	$('div#settings p, div#settings svg').click(function(){
		showSettings();
		});

	$('div.settings svg#close').click(function(){
		$('div.settings').addClass('hidden');
		});

	$('div.level a').click(function(){
		$('div.level p').toggleClass("hidden");
		$('div.settings div:not(.level)').toggleClass("inactive-1");
		$('div.settings div').removeClass("inactive-2");
		$('div.name-change input').addClass("hidden");
		});

	$('div.level p').on("click", function(event){
	    if(confirm("Als je van niveau verandert gaat al je huidige voortgang verloren.. \n\nWeet je zeker dat je door wilt gaan?")){
			sessionStorage.level = $(this)[0].id;
			location.reload();
		    }
		else {
	        event.preventDefault();
	        return false;
		    }
		});

	function nameChange(){
		$('div.level p').addClass("hidden");
		$('div.name-change input').attr("placeholder", sessionStorage.username);
		$('div.name-change input').toggleClass("hidden");
		$('div.name-change svg').toggleClass("hidden");
		$('div.settings div').removeClass("inactive-1");
		$('div.settings div').toggleClass("inactive-2");
		};

	$('div.name-change a').click(function(){
		nameChange();
		});


	$('div.name-change svg').click(function(){
		if($('div.name-change input').val().length >0){
			sessionStorage.username = $('div.name-change input').val();
			$('p#name').text(sessionStorage.username);
			$('div.name-change input').val();
			nameChange();
			}
		});

	$('div.name-change input').on("keyup", function(e){
		if(e.keyCode == 13 && $('div.name-change input').val().length >0){
			sessionStorage.username = $('div.name-change input').val();
			$('p#name').text(sessionStorage.username);
			$('div.name-change input').val();
			nameChange();
			}
		});

	});