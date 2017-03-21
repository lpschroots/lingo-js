words.sort(function(a, b){return 0.5 - Math.random()});
var word = words.pop();
console.log(word);

var word_arr = word.split(""); 

var user_input= "";
var user_arr = user_input.split("");
var game = 0;
var score = 0;
var gameFinish = false;
var tries = 0;

(function(){
document.getElementById('1').innerHTML = word_arr[0];
document.getElementById('2').innerHTML = word_arr[0];
document.getElementById('3').innerHTML = word_arr[0];
document.getElementById('4').innerHTML = word_arr[0];
document.getElementById('5').innerHTML = word_arr[0];
})();

function check() {
	if(tries == 5)
	{
		gameFinish = true;
	}
	if(gameFinish == true){
		newGame();
	}

	if(gameFinish == false & tries < 5){
		tries = tries + 1;
		score = 0;

		var antwoord = document.getElementById("field").value;
		if (antwoord.length != 5) {
			alert("Voer minimaal een vijf letterwoord in!");
		}	

		var antwoordString = "";


		var temp = {
		

		};

		var user_arr = antwoord.split(""); 

		for (var i = 0; i < user_arr.length; i++) {  //letter 1ste woord (0)
			for (var j = 0; j<word_arr.length; j++) { //letter tweede woord

				var check = "";	


				if (user_arr[i] == word_arr[j] && j == i) {
					if(temp['letter_' + i] != 'green'){
						temp['letter_' + i] = 'green';
					}
					score = score + 1;
					if(score == 5){
						score = 0;
						gameFinish = true;
						alert("Gefeliciteerd, je hebt gewonnen!")
						window.location.reload()
					}
					// letter en positie goed (groen)
					console.log(user_arr[i] + " is gelijk aan " + word_arr[j]);
					//antwoordString += "<span style='color: green'>" + user_arr[i] + "</span>";
				

				} else if (user_arr[i] == word_arr[j] && i != j) {
					//enkel letter goed (geel)
					console.log(user_arr[i] + " staat in het woord.");
					//antwoordString += "<span style='color: orange'>" + user_arr[i] + "</span>";
					if(temp['letter_' + i] != 'green'){
						temp['letter_' + i] = 'orange';
					}
				
				} else if (!user_arr.includes(word_arr[j]) && i == j){
					//antwoordString += "<span style='color: red'>" + user_arr[i] + "</span>";
					//foute letter (rood)
					console.log(user_arr[i] + " staat niet in het woord.");
					if( temp['letter_' + i] != 'green'){
						temp['letter_' + i] = 'red';
					}
				}
			}
		}
	}

	console.log(temp);

	for(var i = 0; i < 5; i++){
		if(temp['letter_' + i] != undefined){
			antwoordString += "<span style='color: "+temp['letter_' + i]+"'>" + user_arr[i] + "</span>";
		} else {
			antwoordString += "<span style='color:red'>" + user_arr[i] + "</span>";
		}
	}

	if (game == 0) {var opt1 = document.getElementById('1');
		opt1.innerHTML = antwoordString; game++;
	}
	else if (game == 1) {
		var opt2 = document.getElementById('2');
		opt2.innerHTML = antwoordString; game++;
	}
	else if (game == 2) {
		var opt3 = document.getElementById('3');
		opt3.innerHTML = antwoordString; game++;
	}
	else if (game == 3) {
		var opt4 = document.getElementById('4');
		opt4.innerHTML = antwoordString; game++;
	}
	else if (game == 4){
		var opt5 = document.getElementById('5');
		opt5.innerHTML = antwoordString; game++;
	} 
}

function newGame(){
		window.location.reload()
	}