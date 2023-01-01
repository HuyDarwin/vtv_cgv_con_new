$(function () {
	"use strict";

	window.VTVCGV = window.VTVCGV || {};

	(function (con) {
		con.ResetCauHoi = function () {
			cau_hoi = [];
        }
		con.LoadCauHoi = function (a) {
			con.ResetCauHoi();
			var where = '';
			else if(a == 1){
				where = 'vong-1';
			}
			else if(a == 2){
				where = 'vong-2';
			}
			else if(a == 3){
				where = 'vong-3';
			}
			else if(a == 4){
				where = 'vong-4';
			}
			$.ajax({
				type: "GET",
				url: "questions.xml",
				dataType: "xml",
				async: true,
				success: function (xml) {
					try {
						var y = $(xml).find(where);
						cau_hoi = $(y).find("cau-hoi")[0].textContent,
						dap_an = $(y).find("dap-an")[0].textContent
					}
					catch (e) {
						console.log(e);
					}
				},
				error: function (e) {
					console.log(e.message || e.Message);
				}
			});
		}
		con.ChuyenCauHoiVaoOChu = function () {
			var b;
			for(var d = 0; d <= 47; d++){
				b = chuoi_cau_hoi[d];
				if(b.ChuKhongDau != undefined && b.ChuCoDau != undefined){
					//chuoi_cau_hoi.TrangThai.push('1');
				}
				else{
					//chuoi_cau_hoi.TrangThai.push('0');
				}
			}
		}
	}(window.VTVCGV = window.VTVCGV || {}));
});