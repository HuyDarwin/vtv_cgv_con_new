import { getDatabase, ref, set, update, onValue, remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

$(function () {
	"use strict";

	window.VTVCGV = window.VTVCGV || {};

	(function (con) {
		const db = getDatabase();
		
		// All
		con.ChoiAmThanh = function(filename, n){
			if (n == 1){
				try{			
					at =  new Audio(filename);
					at.play();
					at.volume = 0.2;
				}
				catch(e){
					// do nothing
				}				
			}
			else if (n == 2){
				try{			
					at2 =  new Audio(filename);
					at2.play();
					at2.volume = 0.15;
				}
				catch(e){
					// do nothing
				}				
			}
			else if (n == 3){
				try{			
					at3 =  new Audio(filename);
					at3.play();
					at3.volume = 0.1;
				}
				catch(e){
					// do nothing
				}				
			}
			else if (n == 4){
				try{			
					at4 =  new Audio(filename);
					at4.play();
					at4.volume = 0.2;
				}
				catch(e){
					// do nothing
				}				
			}
			else if (n == 5){
				try{			
					at5 =  new Audio(filename);
					at5.play();
					at5.volume = 0.2;
				}
				catch(e){
					// do nothing
				}				
			}
		};
		con.DungAmThanh = function(a) {
			try {
				if(a == 1 && at != ''){
					at.pause();
					at.currentTime = 0;
				}
				if(a == 2 && at2 != ''){
					at2.pause();
					at2.currentTime = 0;
				}
				if(a == 3 && at3 != ''){
					at3.pause();
					at3.currentTime = 0;
				}
				if(a == 4 && at4 != ''){
					at4.pause();
					at4.currentTime = 0;
				}
				if(a == 5 && at5 != ''){
					at5.pause();
					at5.currentTime = 0;
				}
				if(a != 1 && a != 2 && a != 3 && a != 4 && a != 5){
					if(at != ''){
						at.pause();
						at.currentTime = 0;
					}
					if(at2 != ''){
						at2.pause();
						at2.currentTime = 0;
					}
					if(at3 != ''){
						at3.pause();
						at3.currentTime = 0;
					}
					if(at4 != ''){
						at4.pause();
						at4.currentTime = 0;
					}
					if(at5 != ''){
						at5.pause();
						at5.currentTime = 0;
					}
				}
			}
			catch(e){
				// swallow
			}
		};
		
		// Index
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			con.AnHetVideo = function() {
				$('#intro,#rt1,#rt2,#rt3,#rt4,#question-1,#question-2,#scoreboard-1,#scoreboard-2').css('opacity',0).trigger('pause')
				$('#intro,#rt1,#rt2,#rt3,#rt4,#question-1,#question-2,#scoreboard-1,#scoreboard-2').prop('currentTime', 0);
			}
			con.HienCauHoi = function(){
				con.AnHetVideo();
				if (data.round == 2){
					$('#question-2').css('opacity',1).trigger('play');
					$('#round_q').css({"left": "49.75vw", "top": "3vw"});
					$('#q_text').css({"width": "41.2vw", "height": "3.2vw", "left": "15vw", "top": "5.5vw"});
				}
				else{
					$('#question-1').css('opacity',1).trigger('play');
					$('#round_q').css({"left": "50.5vw", "top": "0.4vw"});
					$('#q_text').css({"width": "55vw", "height": "4.5vw", "left": "0.6vw", "top": "3vw"});
				}
				if(data.round != 4){
					$('#players_left').html('Còn<br/>' + (5 - data.round) + ' người');
				}
				$('.round').html('Vòng ' + data.round);
				setTimeout(function(){
					$('#question_content').css('opacity',1);
				}, 750)
				/*var size = 2.1 * window.innerWidth / 100;
				console.log(size);
				$('#q_text').css('font-size', size + 'px');
				while ((parseInt($('#q_text td').css('height')) / parseInt(($('#q_text td').css('line-height')))) >= 2){
					size = size - 0.1;
					$('#q_text').css('font-size', size + 'px');
				}*/
			}
			con.AnCauHoi = function(){
				$('#question-1, #question-2').animate({ opacity: 0}, 250);
				$('#question_content').animate({ opacity: 0}, 250, function(){
					$('#q_text td, #answer, #timer, #round_q, #players_left').html('');
					$('#answer').css('opacity', 0);
				});
			}
		})
		
		// Controller
		con.ChonNguoiChoi = function(cont) {
				var i = 0;
				player_in_game = 4;
				update(ref(db), { player_in_game : player_in_game })
				var interval1 = setInterval(function(){
					if (i >= 9){
						clearInterval(interval1);
						i = 0;
						var interval2 = setInterval(function(){
							if (i >= 7){
								clearInterval(interval2);
								i = 0;
								var interval3 = setInterval(function(){
									if (i >= 49){
										clearInterval(interval3);
										i = 0;
										player_in_game = cont;
		 								update(ref(db), { player_in_game : player_in_game })
									}
									else {
										if (player_in_game >= 4){
											player_in_game = 1;	
											update(ref(db), { player_in_game : player_in_game })
										}
										else {
											player_in_game++;
											update(ref(db), { player_in_game : player_in_game })
										}
										i++;
										
									}
								}, 100);
							}
							else {
								if (player_in_game >= 4){
									player_in_game = 1;
									update(ref(db), { player_in_game : player_in_game })
								}
								else {
									player_in_game++;
									update(ref(db), { player_in_game : player_in_game })
								}
								i++;
								
							}
						}, 500);
					}
					else {
						if (player_in_game >= 4){
							player_in_game = 1;
							update(ref(db), { player_in_game : player_in_game })
						}
						else {
							player_in_game++;	
							update(ref(db), { player_in_game : player_in_game })
						}
						i++;
						
					}
				}, 1000);
		}
		con.ChayDongHo = function(time){
			con.ResetDongHo();
			is_timer_running = true;
			timer = time;
			$('#timer').html(timer);
			update(ref(db), { timer : timer })
			timer_int = setInterval(function () {
				if (is_timer_running && timer != 0) {
					timer--;
					$('#timer').html(timer);
					update(ref(db), { timer : timer })
				}
			}, 1000);
		}
		con.TamDungDongHo = function(){
			is_timer_running = false;
		}
		con.TiepTucDongHo = function(){
			is_timer_running = true;
		}
		con.ResetDongHo = function(){
			clearInterval(timer_int);
			is_timer_running = false;
			timer = 0;
			$('#timer').html(timer);
			update(ref(db), { timer : timer })
		}
		con.ChayCauHoi = function(round,is_tiebreak){
			if (round == 1){
				if(played_questions >= 13 * (played_contestants + 1) && timer != 0){
					update(ref(db), { end_of_qs : 1 })
					played_questions = 13 * (played_contestants + 1);
					update(ref(db), { played_questions : played_questions })
					con.TamDungDongHo();
				}
				else{
					if (!is_tiebreak){
						question = cau_hoi_1[played_questions].Question;
						update(ref(db), { question : question })
						answer = cau_hoi_1[played_questions].Answer;
						update(ref(db), { answer : answer })
					}
					else{
						question = cau_hoi_chp_1[played_questions].Question;
						update(ref(db), { question : question })
						answer = cau_hoi_chp_1[played_questions].Answer;
						update(ref(db), { answer : answer })
					}
				}
			}
			if (round == 2){
				if (!is_tiebreak){
					question = cau_hoi_2[played_questions].Question;
					update(ref(db), { question : question })
				}
				else{
					question = cau_hoi_chp_2[played_questions].Question;
					update(ref(db), { question : question })
				}
			}
			if (round == 3){
				if (!is_tiebreak){
					question = cau_hoi_3[played_questions].Question;
					update(ref(db), { question : question })
					answer = cau_hoi_3[played_questions].Answer;
					update(ref(db), { answer : answer })
				}
				else{
					question = cau_hoi_chp_3[played_questions].Question;
					update(ref(db), { question : question })
					answer = cau_hoi_chp_3[played_questions].Answer;
					update(ref(db), { answer : answer })
				}
			}
			if (round == 4){
				question = cau_hoi_4[played_questions].Question;
				update(ref(db), { question : question })
				answer = cau_hoi_4[played_questions].Answer;
				update(ref(db), { answer : answer })
			}
			$('#q_text td').html(question);
			$('#answer').html(answer);
		}
		con.CongDiemNguoiChoi = function(score){
			if (player_in_game == 1 || player_buzz == 1){
				player_1_score += score;
				update(ref(db), { player_1_score : player_1_score })
				if(tiebreak_questions_left == 0){
					$('#ss1').html(player_1_score);
				}
			}
			if (player_in_game == 2 || player_buzz == 2){
				player_2_score += score;
				update(ref(db), { player_2_score : player_2_score })
				if(tiebreak_questions_left == 0){
					$('#ss2').html(player_2_score);
				}
			}
			if (player_in_game == 3 || player_buzz == 3){
				player_3_score += score;
				update(ref(db), { player_3_score : player_3_score })
				if(tiebreak_questions_left == 0){
					$('#ss3').html(player_3_score);
				}
			}
			if (player_in_game == 4 || player_buzz == 4){
				player_4_score += score;
				update(ref(db), { player_4_score : player_4_score })
				if(tiebreak_questions_left == 0){
					$('#ss4').html(player_4_score);
				}
			}
		}
		con.TimNguoiChoiBiLoai = function(){
			var score = [];
			if(is_player_1_eliminated == false){
				score.push(player_1_score);
			}
			if(is_player_2_eliminated == false){
				score.push(player_2_score);
			}
			if(is_player_3_eliminated == false){
				score.push(player_3_score);
			}
			if(is_player_4_eliminated == false){
				score.push(player_4_score);
			}
			dtn = Math.min(...score);
			update(ref(db), { minimum_score : dtn })
			var l = 0;
			var nbl = 0;
			
			if(player_1_score == dtn && is_player_1_eliminated == false){
				nbl = 1;
				l++;
			}
			if(player_2_score == dtn && is_player_2_eliminated == false){
				nbl = 2;
				l++;
			}
			if(player_3_score == dtn && is_player_3_eliminated == false){
				nbl = 3;
				l++;
			}
			if(player_4_score == dtn && is_player_4_eliminated == false){
				nbl = 4;
				l++;
			}
			
			if(l == 1){
				eli_player_temp = nbl;
				$('#lnc').removeAttr("disabled");
				$('#nbl').html(nguoi_choi[eli_player_temp - 1].LastName);
			}
			else if(l > 1){
				played_questions = -1;
				update(ref(db), { played_questions : played_questions })
				tiebreak_questions_left = l - 1;
				$('#rc1_obj13, #rc3_obj8').removeAttr("disabled");
				if(round == 2){
					if(tiebreak_questions_left == 2){
						$('#rc2_obj13').removeAttr("disabled");
					}
					if(tiebreak_questions_left == 1){
						if(player_1_score == dtn){
							$('#rc2_obj4').removeAttr("disabled");
						}
						if(player_2_score == dtn){
							$('#rc2_obj5').removeAttr("disabled");
						}
						if(player_3_score == dtn){
							$('#rc2_obj6').removeAttr("disabled");
						}
						if(player_4_score == dtn){
							$('#rc2_obj7').removeAttr("disabled");
						}
					}
				}
			}
		}
	}(window.VTVCGV = window.VTVCGV || {}));
});