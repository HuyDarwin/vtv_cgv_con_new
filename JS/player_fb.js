import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

$(function () {
	"use strict";

	window.VTVCGV = window.VTVCGV || {};

	(function (con) {
		const db = getDatabase();
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if(data.is_able_to_buzzer == 1){
				if(data.is_playing_tiebreak == 1){
					if(number_of_player == 1 && data.is_player_1_eliminated == 0 && data.player_1_score == data.minimum_score){
						$('#buzzer').removeAttr("disabled");
					}
					if(number_of_player == 2 && data.is_player_2_eliminated == 0 && data.player_2_score == data.minimum_score){
						$('#buzzer').removeAttr("disabled");
					}
					if(number_of_player == 3 && data.is_player_3_eliminated == 0 && data.player_3_score == data.minimum_score){
						$('#buzzer').removeAttr("disabled");
					}
					if(number_of_player == 4 && data.is_player_4_eliminated == 0 && data.player_4_score == data.minimum_score){
						$('#buzzer').removeAttr("disabled");
					}
				}
				else{
					if(data.timer != 0){
						if(data.player_in_game != number_of_player){
							if(number_of_player == 1 && data.is_player_1_eliminated == 0){
								$('#buzzer').removeAttr("disabled");
							}
							if(number_of_player == 2 && data.is_player_2_eliminated == 0){
								$('#buzzer').removeAttr("disabled");
							}
							if(number_of_player == 3 && data.is_player_3_eliminated == 0){
								$('#buzzer').removeAttr("disabled");
							}
							if(number_of_player == 4 && data.is_player_4_eliminated == 0){
								$('#buzzer').removeAttr("disabled");
							}
						}
					}
					else{
						$('#buzzer').attr("disabled", true);
					}
				}
			}
			else{
				$('#buzzer').attr("disabled", true);
			}
			
			// Variables update
			
			$('#timer').html(data.timer);
			
			if(data.round == 2 && data.player_in_game != number_of_player){
				if(data.player_in_game == 5){
					$('#q_text td').html(data.question);
				}
				else{
					$('#q_text td').html('Hãy tìm từ sau đây');
				}
			}
			else{
				$('#q_text td').html(data.question);
			}
			
			if(number_of_player == 5){
				$('#answer').html(data.answer);
				$('#player_input').html(data.input);
				$('#sn1').html(data.player_1_last_name);
				$('#sn2').html(data.player_2_last_name);
				$('#sn3').html(data.player_3_last_name);
				$('#sn4').html(data.player_4_last_name);
				$('#ss1').html(data.player_1_score);
				$('#ss2').html(data.player_2_score);
				$('#ss3').html(data.player_3_score);
				$('#ss4').html(data.player_4_score);
				
				if(data.is_player_1_eliminated == true){
					$('#sn1, #ss1').css('background-color', 'gray');
				}
				else if(data.is_player_1_eliminated == false){
					$('#sn1').css('background-color', 'rgba(57,213,247)');
					$('#ss1').css('background-color', 'rgba(245,120,16)');
				}
				
				if(data.is_player_2_eliminated == true){
					$('#sn2, #ss2').css('background-color', 'gray');
				}
				else if(data.is_player_2_eliminated == false){
					$('#sn2').css('background-color', 'rgba(57,213,247)');
					$('#ss2').css('background-color', 'rgba(245,120,16)');
				}
				
				if(data.is_player_3_eliminated == true){
					$('#sn3, #ss3').css('background-color', 'gray');
				}
				else if(data.is_player_3_eliminated == false){
					$('#sn3').css('background-color', 'rgba(57,213,247)');
					$('#ss3').css('background-color', 'rgba(245,120,16)');
				}
				
				if(data.is_player_4_eliminated == true){
					$('#sn4, #ss4').css('background-color', 'gray');
				}
				else if(data.is_player_4_eliminated == false){
					$('#sn4').css('background-color', 'rgba(57,213,247)');
					$('#ss4').css('background-color', 'rgba(245,120,16)');
				}
				
			}
			
			if(data.round != null){
				$('#round').html('Vòng ' + data.round);
				$('#players_left').html('Còn<br/>' + (5 - data.round) + ' người');
			}
			else{
				$('#round').html('');
				$('#players_left').html('');
			}
			
			if(data.round == 1 || data.round == 4){
				if(data.player_in_game == number_of_player && data.is_able_to_input == 1){
					$('#input').removeAttr("disabled");
				}
				else{
					$('#input').attr("disabled", true);
				}
			}
			else{
				$('#input').attr("disabled", true);
			}
			
			if(data.player_in_game == 1){
				$('#gpx1').html(data.player_1_last_name);
			}
			if(data.player_in_game == 2){
				$('#gpx1').html(data.player_2_last_name);
			}
			if(data.player_in_game == 3){
				$('#gpx1').html(data.player_3_last_name);
			}
			if(data.player_in_game == 4){
				$('#gpx1').html(data.player_4_last_name);
			}
		})
		
		$('#buzzer').click(function(){
			update(ref(db), {
				player_buzz : number_of_player,
				buzzer_sound : 1,
				pause_timer : 'true'
			})
		})
		$('#input').change(function(){
			update(ref(db), { input : $('#input').val() })
		})
	}(window.VTVCGV = window.VTVCGV || {}));
});
