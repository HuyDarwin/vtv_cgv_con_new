import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

$(function () {
	"use strict";

	window.VTVCGV = window.VTVCGV || {};

	(function (con) {
		const db = getDatabase();
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data.hinhhieu == 1){
				con.ChoiAmThanh('Sounds/titles.mp3',1);
				update(ref(db), { hinhhieu : 0 });
			}
			if (data.modau == 1){
				con.ChoiAmThanh('Sounds/theme_4.mp3',1);
				update(ref(db), { modau : 0 });
			}
			if (data.gtnc1 == 1){
				con.ChoiAmThanh('Sounds/theme_1.1.mp3',1);
				update(ref(db), { gtnc1 : 0 });
			}
			if (data.gtnc2 == 1){
				con.ChoiAmThanh('Sounds/theme_2.mp3',1);
				update(ref(db), { gtnc2 : 0 });
			}
			if (data.gtbcv == 1){
				con.ChoiAmThanh('Sounds/advisory_board.mp3',1);
				update(ref(db), { gtbcv : 0 });
			}
			if (data.giailao == 1){
				con.ChoiAmThanh('Sounds/commercial.mp3',1);
				update(ref(db), { giailao : 0 });
			}
			if (data.vtm1 == 1){
				con.ChoiAmThanh('Sounds/round_titles_1.mp3',1);
				update(ref(db), { vtm1 : 0 });
			}
			if (data.vtm2 == 1){
				con.ChoiAmThanh('Sounds/round_titles_2.mp3',1);
				update(ref(db), { vtm2 : 0 });
			}
			if (data.bdvt1 == 1){
				con.ChoiAmThanh('Sounds/theme_3.mp3',1);
				update(ref(db), { bdvt1 : 0 });
			}
			if (data.bdvt2 == 1){
				con.ChoiAmThanh('Sounds/theme_5.mp3',1);
				update(ref(db), { bdvt2 : 0 });
			}
			if (data.bdvt3 == 1){
				con.ChoiAmThanh('Sounds/theme_6.mp3',1);
				update(ref(db), { bdvt3 : 0 });
			}
			if (data.ncd1cl == 1){
				con.ChoiAmThanh('Sounds/theme_1.mp3',1);
				update(ref(db), { ncd1cl : 0 });
			}
			if (data.lcv1 == 1){
				con.ChoiAmThanh('Sounds/vtv_rules_v1.mp3',1);
				update(ref(db), { lcv1 : 0 });
			}
			if (data.lcv2 == 1){
				con.ChoiAmThanh('Sounds/vtv_rules_v2.2.mp3',1);
				update(ref(db), { lcv2 : 0 });
			}
			if (data.lcv3 == 1){
				con.ChoiAmThanh('Sounds/vtv_rules_v3.mp3',1);
				update(ref(db), { lcv3 : 0 });
			}
			if (data.lcv4 == 1){
				con.ChoiAmThanh('Sounds/vtv_rules_v4.1_ai.mp3',1);
				update(ref(db), { lcv4 : 0 });
			}
			if (data.dung == 1){
				con.ChoiAmThanh('Sounds/correct.mp3',2);
				update(ref(db), { dung : 0 });
			}
			if (data.sai == 1){
				con.ChoiAmThanh('Sounds/wrong.mp3',2);
				update(ref(db), { sai : 0 });
			}
			if (data.ht == 1){
				con.ChoiAmThanh('Sounds/finish.mp3',1);
				update(ref(db), { ht : 0 });
			}
			if (data.tkd == 1){
				con.ChoiAmThanh('Sounds/points.mp3',1);
				update(ref(db), { tkd : 0 });
			}
			if (data.bhcd == 1){
				con.ChoiAmThanh('Sounds/song_inst.mp3',1);
				update(ref(db), { bhcd : 0 });
			}
			if (data.hdh == 1){
				con.ChoiAmThanh('Sounds/appear.mp3',1);
				update(ref(db), { hdh : 0 });
			}
			if (data.nv == 1){
				con.ChoiAmThanh('Sounds/throne.mp3',1);
				update(ref(db), { nv : 0 });
			}
			if (data.gtlc1 == 1){
				con.ChoiAmThanh('Sounds/rules_1.mp3',2);
				update(ref(db), { gtlc1 : 0 });
			}
			if (data.gtlc2 == 1){
				con.ChoiAmThanh('Sounds/rules_2.mp3',2);
				update(ref(db), { gtlc2 : 0 });
			}
			if (data.nn1 == 1){
				con.ChoiAmThanh('Sounds/bed_1.mp3',1);
				update(ref(db), { nn1 : 0 });
			}
			if (data.nn2 == 1){
				con.ChoiAmThanh('Sounds/bed_2.mp3',3);
				update(ref(db), { nn2 : 0 });
			}
			if (data.nn3 == 1){
				con.ChoiAmThanh('Sounds/bed_3.mp3',3);
				update(ref(db), { nn3 : 0 });
			}
			if (data.nn4 == 1){
				con.ChoiAmThanh('Sounds/bed_4.mp3',3);
				update(ref(db), { nn4 : 0 });
			}
			if (data.nn5 == 1){
				con.ChoiAmThanh('Sounds/bed_5.mp3',3);
				update(ref(db), { nn5 : 0 });
			}
			if (data.nn6 == 1){
				con.ChoiAmThanh('Sounds/bed_6.mp3',2);
				update(ref(db), { nn6 : 0 });
			}
			if (data.nn7 == 1){
				con.ChoiAmThanh('Sounds/bed_7.mp3',3);
				update(ref(db), { nn7 : 0 });
			}
			if (data.nn8 == 1){
				con.ChoiAmThanh('Sounds/bed_8.mp3',3);
				update(ref(db), { nn8 : 0 });
			}
			if (data.nn9 == 1){
				con.ChoiAmThanh('Sounds/bed_9.mp3',1);
				update(ref(db), { nn9 : 0 });
			}
			if (data.suspense == 1){
				con.ChoiAmThanh('Sounds/suspense.mp3',2);
				update(ref(db), { suspense : 0 });
			}
			if (data.pq == 1){
				con.ChoiAmThanh('Sounds/violate.mp3',2);
				update(ref(db), { pq : 0 });
			}
			if (data.ctd == 1){
				con.ChoiAmThanh('Sounds/dictionary.mp3',1);
				update(ref(db), { ctd : 0 });
			}
			if (data.stopat == 1){
				con.DungAmThanh();
				update(ref(db), { stopat : 0 });
			}
			if (data.reload == 1){
				location.reload(true);
				update(ref(db), { reload : 0 });
			}
			
			
			if (data.rc1_obj1 == 1){
				con.ChoiAmThanh('Sounds/round_titles_1.mp3',1);
				update(ref(db), { rc1_obj1 : 0 });
			}
			if (data.rc1_obj2 == 1){
				con.ChoiAmThanh('Sounds/theme_3.mp3',1);
				update(ref(db), { rc1_obj2 : 0 });
			}
			if (data.rc1_obj4 == 1){
				con.DungAmThanh(4);
				con.ChoiAmThanh('Sounds/choose_player.mp3',1);
				update(ref(db), { rc1_obj4 : 0 });
			}
			if (data.rc1_obj5 == 1){
				con.DungAmThanh(4);
				con.ChoiAmThanh('Sounds/choose_player.mp3',1);
				update(ref(db), { rc1_obj5 : 0 });
			}
			if (data.rc1_obj6 == 1){
				con.DungAmThanh(4);
				con.ChoiAmThanh('Sounds/choose_player.mp3',1);
				update(ref(db), { rc1_obj6 : 0 });
			}
			if (data.rc1_obj7 == 1){
				con.DungAmThanh(4);
				con.ChoiAmThanh('Sounds/choose_player.mp3',1);
				update(ref(db), { rc1_obj7 : 0 });
			}
			if (data.rc1_obj8 == 1){
				con.ChoiAmThanh('Sounds/90s_timer.mp3',4);
				update(ref(db), { rc1_obj8 : 0 });
			}
			if (data.rc1_obj11 == 1){
				if(data.is_playing_tiebreak == 0){
					con.ChoiAmThanh('Sounds/correct.mp3',1);
				}
				else{
					con.ChoiAmThanh('Sounds/finish.mp3',1);
				}
				update(ref(db), { rc1_obj11 : 0 });
			}
			if (data.end_of_qs == 1){
				at4.currentTime = 90.5;
				update(ref(db), { end_of_qs : 0 });
			}
			if (data.hbtkd == 1){
				con.ChoiAmThanh('Sounds/points.mp3',1);
				update(ref(db), { hbtkd : 0 });
			}
			if (data.rc1_obj13 == 1){
				con.ChoiAmThanh('Sounds/tiebreak.mp3',4);
				update(ref(db), { rc1_obj13 : 0 });
			}
			if (data.rc1_obj14 == 1){
				con.ChoiAmThanh('Sounds/theme_3.mp3',1);
				update(ref(db), { rc1_obj14 : 0 });
			}
			
			if (data.pause_timer == 'true'){
				at4.pause();
				update(ref(db), { pause_timer : 0 });
			}
			if (data.pause_timer == 'false'){
				at4.play();
				update(ref(db), { pause_timer : 0 });
			}
			if (data.buzzer_sound == 1){
				con.ChoiAmThanh('Sounds/buzzer.mp3',2);
				update(ref(db), { buzzer_sound : 0 });
			}
			
			if (data.rc2_obj1 == 1){
				con.ChoiAmThanh('Sounds/round_titles_2.mp3',1);
				update(ref(db), { rc2_obj1 : 0 });
			}
			if (data.rc2_obj2 == 1){
				con.ChoiAmThanh('Sounds/theme_3.mp3',1);
				update(ref(db), { rc2_obj2 : 0 });
			}
			if (data.rc2_obj8 == 1){
				con.ChoiAmThanh('Sounds/60s_timer_1.mp3',4);
				update(ref(db), { rc2_obj8 : 0 });
			}
			if (data.rc2_obj10 == 1){
				con.ChoiAmThanh('Sounds/correct.mp3',1);
				update(ref(db), { rc2_obj10 : 0 });
			}
			if (data.rc2_obj12 == 1){
				con.ChoiAmThanh('Sounds/violate.mp3',2);
				update(ref(db), { rc2_obj12 : 0 });
			}
			if (data.rc2_obj13 == 1){
				con.ChoiAmThanh('Sounds/tiebreak.mp3',4);
				update(ref(db), { rc2_obj13 : 0 });
			}
			if (data.rc2_obj14 == 1){
				con.ChoiAmThanh('Sounds/theme_3.mp3',1);
				update(ref(db), { rc2_obj14 : 0 });
			}
			
			if (data.rc3_obj1 == 1){
				con.ChoiAmThanh('Sounds/round_titles_2.mp3',1);
				update(ref(db), { rc3_obj1 : 0 });
			}
			if (data.rc3_obj2 == 1){
				con.ChoiAmThanh('Sounds/theme_3.mp3',1);
				update(ref(db), { rc3_obj2 : 0 });
			}
			if (data.rc3_obj3 == 1){
				con.ChoiAmThanh('Sounds/30s_timer_1.mp3',4);
				update(ref(db), { rc3_obj3 : 0 });
			}
			if (data.rc3_obj6 == 1){
				con.ChoiAmThanh('Sounds/finish.mp3',1);
				update(ref(db), { rc3_obj6 : 0 });
			}
			if (data.rc3_obj8 == 1){
				con.ChoiAmThanh('Sounds/tiebreak.mp3',4);
				update(ref(db), { rc3_obj8 : 0 });
			}
			if (data.rc3_obj9 == 1){
				con.ChoiAmThanh('Sounds/theme_3.mp3',1);
				update(ref(db), { rc3_obj9 : 0 });
			}
			
			if (data.rc4_obj1 == 1){
				con.ChoiAmThanh('Sounds/round_titles_1.mp3',1);
				update(ref(db), { rc4_obj1 : 0 });
			}
			if (data.rc4_obj2 == 1){
				con.ChoiAmThanh('Sounds/theme_3.mp3',1);
				update(ref(db), { rc4_obj2 : 0 });
			}
			if (data.rc4_obj3 == 1){
				con.ChoiAmThanh('Sounds/suspense.mp3',2);
				update(ref(db), { rc4_obj3 : 0 });
			}
			if (data.rc4_obj5 == 1){
				if(data.played_questions == 2){
					con.ChoiAmThanh('Sounds/60s_timer_1.mp3',4);
				}
				else{
					con.ChoiAmThanh('Sounds/30s_timer_2.mp3',4);
				}
				update(ref(db), { rc4_obj5 : 0 });
			}
			if (data.rc4_obj6 == 1){
				con.ChoiAmThanh('Sounds/bed_2.mp3',3);
				update(ref(db), { rc4_obj6 : 0 });
			}
			if (data.rc4_obj7 == 1){
				con.ChoiAmThanh('Sounds/correct.mp3',4);
				update(ref(db), { rc4_obj7 : 0 });
			}
			if (data.rc4_obj8 == 1){
				con.ChoiAmThanh('Sounds/wrong.mp3',1);
				update(ref(db), { rc4_obj8 : 0 });
			}
		})
	}(window.VTVCGV = window.VTVCGV || {}));
});
