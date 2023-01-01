import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

$(function () {
	"use strict";

	window.VTVCGV = window.VTVCGV || {};

	(function (con) {
		const db = getDatabase();
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();		
			// Variables update
			
			$('#timer').html(data.timer);
			$('#q_text td').html(data.question);
			if(data.round != 4){
				$('#answer').html(data.answer);
			}
			
			$('#sbn1').html(data.player_1_last_name);
			$('#sbn2').html(data.player_2_last_name);
			$('#sbn3').html(data.player_3_last_name);
			$('#sbn4').html(data.player_4_last_name);
			$('#sbs1').html(data.player_1_score);
			$('#sbs2').html(data.player_2_score);
			$('#sbs3').html(data.player_3_score);
			$('#sbs4').html(data.player_4_score);
			
			// Graphics
			
			if (data.hinhhieu == 1){
				con.AnHetVideo();
				$('#intro').css('opacity',1);
				$('#intro').trigger('play');
				update(ref(db), { hinhhieu : 0 });
			}
			if (data.modau == 1){
				$('#intro').animate({opacity: 0}, 500);
				update(ref(db), { modau : 0 });
			}
			if (data.rc1_obj1 == 1){
				con.AnHetVideo();
				$('#rt1').css('opacity',1);
				$('#rt1').trigger('play');
				update(ref(db), { rc1_obj1 : 0 });
			}
			if (data.rc1_obj2 == 1){
				$('#rt1').animate({opacity: 0}, 500);
				update(ref(db), { rc1_obj2 : 0 });
			}
			if (data.rc1_obj8 == 1){
				con.HienCauHoi();
				update(ref(db), { rc1_obj8 : 0 });
			}
			if (data.rc1_obj10 == 1){
				$('#answer').animate({ opacity: 1 }, 250)
				update(ref(db), { rc1_obj10 : 0 });
			}
			if (data.rc1_obj9 == 1){
				con.AnCauHoi();
				update(ref(db), { rc1_obj9 : 0 });
			}
			if (data.question_changing == 1){
				$('#q_text, #answer').animate({ opacity: 0}, 250)
				setTimeout(function(){
					$('#q_text').animate({ opacity: 1}, 250)
				}, 250)
				update(ref(db), { question_changing : 0 });
			}
			if (data.hbtkd == 1){
				con.AnHetVideo();
				if(data.round == 1){
					$('#scoreboard-1').css('opacity',1).trigger('play');
					$('#nas1').css('left', '16.2vw');
					$('#nas2').css('left', '35.8vw');
					$('#nas3').css('left', '55.4vw');
					$('#nas4').css('left', '75vw');
				}
				else if(data.round == 2){
					$('#scoreboard-2').css('opacity',1).trigger('play');
					if(data.is_player_1_eliminated == 1){
						$('#nas2').css('left', '16.2vw');
						$('#nas3').css('left', '35.8vw');
						$('#nas4').css('left', '55.4vw');
						$('#nas1').css('left', '75vw');
					}
					if(data.is_player_2_eliminated == 1){
						$('#nas1').css('left', '16.2vw');
						$('#nas3').css('left', '35.8vw');
						$('#nas4').css('left', '55.4vw');
						$('#nas2').css('left', '75vw');
					}
					if(data.is_player_3_eliminated == 1){
						$('#nas1').css('left', '16.2vw');
						$('#nas2').css('left', '35.8vw');
						$('#nas4').css('left', '55.4vw');
						$('#nas3').css('left', '75vw');
					}
					if(data.is_player_4_eliminated == 1){
						$('#nas1').css('left', '16.2vw');
						$('#nas2').css('left', '35.8vw');
						$('#nas3').css('left', '55.4vw');
						$('#nas4').css('left', '75vw');
					}
				}
				setTimeout(function(){
					$('#round_s').css('opacity', 1);
					setTimeout(function(){
						$('.sbn').css('opacity', 1);
						if(data.is_player_1_eliminated == 1){
							$('#sbn1').css('opacity', 0);
						}
						if(data.is_player_2_eliminated == 1){
							$('#sbn2').css('opacity', 0);
						}
						if(data.is_player_3_eliminated == 1){
							$('#sbn3').css('opacity', 0);
						}
						if(data.is_player_4_eliminated == 1){
							$('#sbn4').css('opacity', 0);
						}
					}, 1300)
				}, 600)
				update(ref(db), { hbtkd : 0 });
			}
			if (data.hd1 == 1){
				$('#sbs1').css('opacity', 1);
				update(ref(db), { hd1 : 0 });
			}
			if (data.hd2 == 1){
				$('#sbs2').css('opacity', 1);
				update(ref(db), { hd2 : 0 });
			}
			if (data.hd3 == 1){
				$('#sbs3').css('opacity', 1);
				update(ref(db), { hd3 : 0 });
			}
			if (data.hd4 == 1){
				$('#sbs4').css('opacity', 1);
				update(ref(db), { hd4 : 0 });
			}
			if (data.abtkd == 1){
				$('#scoreboard-1, #scoreboard-2, #round_s, .sbn, .sbs').animate({opacity: 0}, 500);
				update(ref(db), { abtkd : 0 });
			}
			if (data.rc1_obj13 == 1){
				con.HienCauHoi();
				update(ref(db), { rc1_obj13 : 0 });
			}
			if (data.rc1_obj14 == 1){
				update(ref(db), { rc1_obj14 : 0 });
			}
			
			if (data.rc2_obj1 == 1){
				con.AnHetVideo();
				$('#rt2').css('opacity',1);
				$('#rt2').trigger('play');
				update(ref(db), { rc2_obj1 : 0 });
			}
			if (data.rc2_obj2 == 1){
				$('#rt2').animate({opacity: 0}, 500);
				update(ref(db), { rc2_obj2 : 0 });
			}
			if (data.rc2_obj8 == 1){
				con.HienCauHoi();
				update(ref(db), { rc2_obj8 : 0 });
			}
			if (data.rc2_obj9 == 1){
				con.AnCauHoi();
				update(ref(db), { rc2_obj9 : 0 });
			}
			if (data.rc2_obj13 == 1){
				con.HienCauHoi();
				update(ref(db), { rc2_obj13 : 0 });
			}
			
			if (data.rc3_obj1 == 1){
				con.AnHetVideo();
				$('#rt3').css('opacity',1);
				$('#rt3').trigger('play');
				update(ref(db), { rc3_obj1 : 0 });
			}
			if (data.rc3_obj2 == 1){
				$('#rt3').animate({opacity: 0}, 500);
				update(ref(db), { rc3_obj2 : 0 });
			}
			if (data.rc3_obj3 == 1){
				con.HienCauHoi();
				update(ref(db), { rc3_obj3 : 0 });
			}
			if (data.rc3_obj5 == 1){
				$('#answer').animate({ opacity: 1 }, 250)
				update(ref(db), { rc3_obj5 : 0 });
			}
			if (data.rc3_obj4 == 1){
				con.AnCauHoi();
				update(ref(db), { rc3_obj4 : 0 });
			}
			if (data.rc3_obj8 == 1){
				con.HienCauHoi();
				update(ref(db), { rc3_obj8 : 0 });
			}
			
			if (data.rc4_obj1 == 1){
				con.AnHetVideo();
				$('#rt4').css('opacity',1);
				$('#rt4').trigger('play');
				update(ref(db), { rc4_obj1 : 0 });
			}
			if (data.rc4_obj2 == 1){
				$('#rt4').animate({opacity: 0}, 500);
				update(ref(db), { rc4_obj2 : 0 });
			}
			if (data.rc4_obj3 == 1){
				con.HienCauHoi();
				update(ref(db), { rc4_obj3 : 0 });
			}
			if (data.rc4_obj6 == 1){
				$('#answer').html('Số từ được chấp nhận: ' + '0/' + (data.played_questions + 5)).animate({ opacity: 1 }, 250)
				update(ref(db), { rc4_obj6 : 0 });
			}
			if (data.rc4_obj7 == 1){
				var num;
				if(data.is_player_1_eliminated == false){
					num = data.player_1_score;
				}
				else if(data.is_player_2_eliminated == false){
					num = data.player_2_score;
				}
				else if(data.is_player_3_eliminated == false){
					num = data.player_3_score;
				}
				else if(data.is_player_4_eliminated == false){
					num = data.player_4_score;
				}
				$('#answer').html('Số từ được chấp nhận: ' + (num + 1) + '/' + (data.played_questions + 5)).animate({ opacity: 1 }, 250)
				update(ref(db), { rc4_obj7 : 0 });
			}
			if (data.rc4_obj4 == 1){
				con.AnCauHoi();
				update(ref(db), { rc4_obj4 : 0 });
			}
		})
	}(window.VTVCGV = window.VTVCGV || {}));
});
