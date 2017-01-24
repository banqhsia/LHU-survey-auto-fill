(function() {

    try {

        document.getElementById("RBL_S1_0").checked = true;
        document.getElementById("RBL_S2_0").checked = true;

        for (i = 2; i <= 9; i++) {
			document.getElementById("GridView1_ctl0" + i + "_RadioButtonList1_0").checked = true;
		}
        for (j = 10; j <= 19; j++) {
			document.getElementById("GridView1_ctl" + j + "_RadioButtonList1_0").checked = true;
		}
        for (k = 2; k <= 9; k++) {
			document.getElementById("GridView2_ctl0" + k + "_RadioButtonList2_0").checked = true
		}

    } catch (err) {
        for (k = 2; k <= 9; k++) document.getElementById("GridView2_ctl0" + k + "_RadioButtonList2_0").checked = true
    };

})();
