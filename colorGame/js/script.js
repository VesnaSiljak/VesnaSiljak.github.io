$(document).ready(function () {
	//$("h1").css("color","red");
	var pickcolor = function () {
		var rnumber = Math.random();
		console.log(rnumber);
		var color;

		if (rnumber <= 0.15) {
			color = "red";
		} else if (rnumber > 0.15 && rnumber <= 0.30) {
			color = "blue";
		} else if (rnumber > 0.30 && rnumber <= 0.45) {
			color = "yellow";
		} else if (rnumber > 0.45 && rnumber <= 0.60) {
			color = "purple";
		} else if (rnumber > 0.60 && rnumber <= 0.75) {
			color = "grey";
		} else if (rnumber > 0.75) {
			color = "green";
		}
		return color;
	}

	var firstcolor = pickcolor();
	var secondcolor = pickcolor();
	var thirdcolor = pickcolor();
	var fourthcolor = pickcolor();
	var spisakboja = firstcolor + " " + secondcolor + " " + thirdcolor + " " + fourthcolor;

	var nizboja = [];
	//if(nizboja.indexOf(firstcolor)<0){
	nizboja.push(firstcolor);
	//}
	//if(nizboja.indexOf(secondcolor)<0){
	nizboja.push(secondcolor);
	//}
	//if(nizboja.indexOf(thirdcolor)<0){
	nizboja.push(thirdcolor);
	//}
	//if(nizboja.indexOf(fourthcolor)<0){
	nizboja.push(fourthcolor);
	//}


	console.log(firstcolor + " " + secondcolor + " " + thirdcolor + " " + fourthcolor);

	var count = 0;
	$("#solution div button").click(function () {

		var x = $(this).attr("id");
		$("#combinations li:not(.submitted):first span:not(.submitted):first").css("background", x).attr("color", x);
		$("#combinations li:not(.submitted):first span:not(.submitted):first").addClass("submitted");
		count++;
		console.log(count);
		if (count == 4) {
			$("#combinations li:not(.submitted):first").addClass("submitted");
			count = 0;
			var curentli = "$('#combinations li.submitted:last')";
			var getno = 0;
			var getno2 = 0;
			var spanl = ($("#combinations li.submitted:last span").length);
			var testtestco = [];
			var testtestco2 = [];
			for (i = 1; i <= spanl; i++) {
				console.log("test" + i);
				var testcolor = $('#combinations li.submitted:last').find("span:nth-child(" + i + ")").attr("color");
				testtestco.push(testcolor);
				testtestco2.push(testcolor);
			}
			console.log(nizboja);
			console.log(testtestco);
			for (i = 0; i < testtestco.length; i++) {
				for (j = 0; j < nizboja.length; j++) {
					console.log( "drugi "+i+" prvi "+ j);
					console.log(testtestco[i]+" "+nizboja[j]);
					if (testtestco[i] == nizboja[j]) {
						//console.log("brisem ovaj iz prvog "+nizboja[j]);
						//console.log("brisem ovaj iz drugog "+testtestco[i]);
						delete nizboja[j];
						delete testtestco[i];
						//j--;
						//i--;
						getno++;
						//console.log("getno "+getno);
						//console.log(nizboja);
						//console.log(testtestco);
						break;
					}
				}
			}
			console.log(getno);
			for (a = 1; a <= getno; a++) {
				$("#true-false li:not(.submitted):first span:nth-child(" + a + ")").css("background", "yellow");
			}
			nizboja = [];

			nizboja.push(firstcolor);
			nizboja.push(secondcolor);
			nizboja.push(thirdcolor);
			nizboja.push(fourthcolor);
			//console.log(nizboja);
			for (e = 0; e < testtestco2.length; e++) {
				if (testtestco2[e] == nizboja[e]) {
					getno2++;
				}
			}
			for (a = 1; a <= getno2; a++) {
				$("#true-false li:not(.submitted):first span:nth-child(" + a + ")").css("background", "red");
			}
			if(getno2==4 || $( "#combinations li:last-child" ).hasClass( "submitted" )){
				for (a = 1; a <= 4; a++) {
					$("#solution li span:nth-child(" + a + ")").css("background", nizboja[a-1]);
				}	
				$(".buttoncolor").attr("disabled","disabled");
				$("#ni").show();
			}
			
			//console.log(getno2);
			$("#true-false li:not(.submitted):first").addClass("submitted");
		}
	})
	$("#combinations li span").click(function(){
			if(!$(this).parent().hasClass("submitted")){
			$(this).removeClass("submitted").css("background","#93c0c1");
			count--;
			}
		})
$("#ni").click(function(){
	location.reload();
})
})