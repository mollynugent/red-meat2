// declaring variables that will be computed

var totalMeatPerWeek,
	timesPerWeek,
	decksPerDay;




$(document).ready(function () {
	$("#go").on("click", function (e) {
		e.preventDefault();
		timesPerWeek = parseFloat($("#number1").val()); //grabs the number the user has put in the first input box
		decksPerDay = parseFloat($("#number2").val()); //grabs the number the user has put in the second input box
		console.log("amount of times eat meat", timesPerWeek);

		totalMeatPerWeek = (decksPerDay * 3) * timesPerWeek;
		console.log("my meat score", totalMeatPerWeek);
		// $("#answer").val(totalMeatPerWeek);


		// if (totalMeatPerWeek < 18) {
		// 	$("#answer").text = 'Keep up the good eating habits';
		// } else if (totalMeatPerWeek == 18) {
		// 	$("#answer").text = 'You are in a healthy range.';
		// } else {
		// 	$("#answer").text = 'You are at high risk of heart disease!';
		// }

		if (totalMeatPerWeek < 18) {
			$("#answer").text('Keep up the good diet.  Read below for tips on how to make your diet even healthier.');
		} else if (totalMeatPerWeek == 18) {
			$("#answer").text('Keep up the good diet.  Read below for tips on how to make your diet even healthier.');
		} else {
			$("#answer").text('Currently, you are consuming more than the recommended intake of red meat per week.  Your score puts you at high risk of heart disease and corolectal cancer.  Read below for tips on how to cut down.');
		}



	});
});
