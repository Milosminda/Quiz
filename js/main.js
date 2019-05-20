const myHeader = document.querySelector('#titleHolder');
const options = document.querySelectorAll('.option');
const startBtn = document.querySelector('#startBtn');
const counter = document.querySelector('.counter');
const blink = document.querySelector('.blink');
const countdown = document.querySelector('.countdown');
let gogogo = document.querySelector('#gogogo');
let startDiv = document.querySelector('.start-holder');
let quizDiv = document.querySelector('.quiz');
let mainSection = document.querySelector('#main-section');
let geographyDiv = document.querySelector('#geography');
let physicsDiv = document.querySelector('#physics');
let biologyDiv = document.querySelector('#biology');
let mathematicsDiv = document.querySelector('#mathematics');
let informaticsDiv = document.querySelector('#informatics');
let programmingDiv = document.querySelector('#programming');
let guesremaining = document.querySelector('#guessesremaining');
let score = document.querySelector('.score');
let correctNum = document.querySelector('#correctNum');
let wrongNum = document.querySelector('#wrongNum');
let currentScore = document.querySelector('#currentScore');
let timeDiv = document.querySelector('#time');
let startAgainBtn = document.querySelector('#startAgainBtn');
let curQuestion = document.querySelector('#curQuestion');
let showQuiz = document.querySelectorAll('.showQuiz');
let scoreDiv = document.querySelector('#scoreDiv');
let wrongArrayId = document.querySelector('#wrongArrayId');
var loop;
var wrongArray = [];
var cur = 1;
// ....
var runningGeo = false;
var runningPhys = false;
var runningBio = false;
var runningMath = false;
var runningInfo = false;
var runningProg = false;
// ....
startBtn.addEventListener('click', startQuiz);
startAgainBtn.addEventListener('click', (e) => {
  document.location.reload(true)
});
for (let i = 0; i < showQuiz.length; i++) {
	 showQuiz[i].addEventListener('click',function (){
	  	startDiv.style.display = 'block';
			startBtn.style.display = 'block';
			mainSection.style.display = 'none';
			startAgainBtn.style.display = 'none';
			scoreDiv.style.display = 'none';
			correctNum.innerHTML = '0';
			wrongNum.innerHTML = '0';
			curQuestion.innerHTML = '0';
			time.innerHTML = '0';
			wrongArray = [];
			cur = 1;
			wrongArrayId.innerHTML = '';
			clearInterval(loop);
			for (let k = 0; k < allQuizzes.length; k++) {
				allQuizzes[k].index = 0;
				allQuizzes[k].score = 0;
				allQuizzes[k].curScore = 0;
				allQuizzes[k].wrongScore = 0;
				allQuizzes[k].curQuestion = 0;
			};
	 });
};
function startQuiz() {
	startBtn.style.display = 'none';
	countdown.style.display = 'block';
	counter.style.display = 'block';
	let t = 3;
	counter.innerHTML = t;
	let loop = setInterval(() => {
	  t--;
	  counter.classList.toggle('blink');
	  counter.innerHTML = t;
	  if (t === 0) {
	  	gogogo.innerHTML = 'Go! Go! Go!';
	  	setTimeout(() => {
	  		gogogo.style.display = 'none';
	  		counter.style.display = 'none';
				startDiv.style.display = 'none';
				mainSection.style.display = 'block';
				timer();
	  	}, 1000)
	  	clearInterval(loop);
	  }
	}, 1000)
}
function timer() {
	let time = 60
		timeDiv.innerHTML = time;
	  loop = setInterval(() => {
	  time--;
	  timeDiv.innerHTML = time;
	if (time === 0) {
		clearInterval(loop);
		startAgainBtn.style.display = 'block';
		mainSection.style.display = 'none';
		scoreDiv.style.display = 'block';
		// Nije dobro - Prepraviti ...
		if (runningGeo === true) {
			scoreDiv.innerHTML = `<h3 class="timeUp">Isteklo vam je vreme.<br>
			Vas rezultat je: ${geographyQuiz.score}<h3>`;
		} else if (runningPhys === true) {
			scoreDiv.innerHTML = `<h3 class="timeUp">Isteklo vam je vreme.<br>
			Vas rezultat je: ${physicsQuiz.score}<h3>`;
		} else if (runningBio === true) {
			scoreDiv.innerHTML = `<h3 class="timeUp">Isteklo vam je vreme.<br>
			Vas rezultat je: ${biologyQuiz.score}<h3>`;
		} else if (runningMath === true) {
			scoreDiv.innerHTML = `<h3 class="timeUp">Isteklo vam je vreme.<br>
			Vas rezultat je: ${mathematicsQuiz.score}<h3>`;
		} else if (runningInfo === true) {
			scoreDiv.innerHTML = `<h3 class="timeUp">Isteklo vam je vreme.<br>
			Vas rezultat je: ${informaticsQuiz.score}<h3>`;
		} else if (runningProg === true) {
			scoreDiv.innerHTML = `<h3 class="timeUp">Isteklo vam je vreme.<br>
			Vas rezultat je: ${programmingQuiz.score}<h3>`;
		}
		// ....
	}
	}, 1000)
}

function runGeo() {
	runningGeo = true;
		guesremaining.innerHTML = geography.length;
		score.innerHTML = geography.length;
	if (! geographyQuiz.end()) {
			let cq = geographyQuiz.getQuestion();
			// let cq2 = geographyQuiz.getCategory(); // Za kategoriju
			// console.log(cq2);
			myHeader.innerHTML = cq.text;
			let rand = geographyQuiz.randomize();
		for (let i = 0; i < options.length; i++) {
			options[i].innerHTML = rand[i];
			options[i].onclick = function () {
				geographyQuiz.userAnswer(this.innerHTML);
				runGeo();
			}
		};
	} else {
			mainSection.style.display = 'none';
			scoreDiv.style.display = 'block';
			scoreDiv.innerHTML = `<h3 class="result">Vas rezultat je: ${geographyQuiz.score}<h3>`;
		for (var i = 0; i < wrongArray.length; i++) {
				wrongArrayId.innerHTML += `<div class="wrongArray">${cur++}. ${wrongArray[i]} <br></div>`;
			};
			startAgainBtn.style.display = 'block';
		if (score.innerHTML == geography.length) {
			clearInterval(loop);
		}
	}
}
function runPhysics() {
	runningPhys = true;
		guesremaining.innerHTML = physics.length;
		score.innerHTML = physics.length;
		if (! physicsQuiz.end()) {
			let cq = physicsQuiz.getQuestion();
			myHeader.innerHTML = cq.text;
			let rand = physicsQuiz.randomize();
		for (let i = 0; i < options.length; i++) {
			options[i].innerHTML = rand[i];
			options[i].onclick = function () {
				physicsQuiz.userAnswer(this.innerHTML);
				runPhysics();
			}
		};
	} else {
			mainSection.style.display = 'none';
			scoreDiv.style.display = 'block';
			scoreDiv.innerHTML = `<h3 class="result">Vas rezultat je: ${physicsQuiz.score}<h3>`;
		for (var i = 0; i < wrongArray.length; i++) {
				wrongArrayId.innerHTML += `<div class="wrongArray">${cur++}. ${wrongArray[i]} <br></div>`;
			};
			startAgainBtn.style.display = 'block';
		if (score.innerHTML == physics.length) {
			clearInterval(loop);
		}
	}
}
function runBiology() {
	runningBio = true;
		guesremaining.innerHTML = biology.length;
		score.innerHTML = biology.length;
		if (! biologyQuiz.end()) {
			let cq = biologyQuiz.getQuestion();
			myHeader.innerHTML = cq.text;
			let rand = biologyQuiz.randomize();
		for (let i = 0; i < options.length; i++) {
			options[i].innerHTML = rand[i];
			options[i].onclick = function () {
				biologyQuiz.userAnswer(this.innerHTML);
				runBiology();
			}
		};
	} else {
			mainSection.style.display = 'none';
			scoreDiv.style.display = 'block';
			scoreDiv.innerHTML = `<h3 class="result">Vas rezultat je: ${biologyQuiz.score}<h3>`;
			startAgainBtn.style.display = 'block';
			for (var i = 0; i < wrongArray.length; i++) {
				wrongArrayId.innerHTML += `<div class="wrongArray">${cur++}. ${wrongArray[i]} <br></div>`;
			};
		if (score.innerHTML == biology.length) {
			clearInterval(loop);
		}
	}
}
function runMathematics() {
	runningMath = true;
		guesremaining.innerHTML = mathematics.length;
		score.innerHTML = mathematics.length;
		if (! mathematicsQuiz.end()) {
			let cq = mathematicsQuiz.getQuestion();
			myHeader.innerHTML = cq.text;
			let rand = mathematicsQuiz.randomize();
		for (let i = 0; i < options.length; i++) {
			options[i].innerHTML = rand[i];
			options[i].onclick = function () {
				mathematicsQuiz.userAnswer(this.innerHTML);
				runMathematics();
			}
		};
	} else {
			mainSection.style.display = 'none';
			scoreDiv.style.display = 'block';
			scoreDiv.innerHTML = `<h3 class="result">Vas rezultat je: ${mathematicsQuiz.score}<h3>`;
			startAgainBtn.style.display = 'block';
			for (var i = 0; i < wrongArray.length; i++) {
				wrongArrayId.innerHTML += `<div class="wrongArray">${cur++}. ${wrongArray[i]} <br></div>`;
			};
		if (score.innerHTML == mathematics.length) {
			clearInterval(loop);
		}
	}
}
function runInformatics() {
	runningInfo = true;
		guesremaining.innerHTML = informatics.length;
		score.innerHTML = informatics.length;
		if (! informaticsQuiz.end()) {
			let cq = informaticsQuiz.getQuestion();
			myHeader.innerHTML = cq.text;
			let rand = informaticsQuiz.randomize();
		for (let i = 0; i < options.length; i++) {
			options[i].innerHTML = rand[i];
			options[i].onclick = function () {
				informaticsQuiz.userAnswer(this.innerHTML);
				runInformatics();
			}
		};
	} else {
			mainSection.style.display = 'none';
			scoreDiv.style.display = 'block';
			scoreDiv.innerHTML = `<h3 class="result">Vas rezultat je: ${informaticsQuiz.score}<h3>`;
			startAgainBtn.style.display = 'block';
			for (var i = 0; i < wrongArray.length; i++) {
				wrongArrayId.innerHTML += `<div class="wrongArray">${cur++}. ${wrongArray[i]} <br></div>`;
			};
		if (score.innerHTML == informatics.length) {
			clearInterval(loop);
		}
	}
}
function runProgramming() {
	runningProg = true;
		guesremaining.innerHTML = programming.length;
		score.innerHTML = programming.length;
		if (! programmingQuiz.end()) {
			let cq = programmingQuiz.getQuestion();
			myHeader.innerHTML = cq.text;
			let rand = programmingQuiz.randomize();
		for (let i = 0; i < options.length; i++) {
			options[i].innerHTML = rand[i];
			options[i].onclick = function () {
				programmingQuiz.userAnswer(this.innerHTML);
				runProgramming();
			}
		};
	} else {
			mainSection.style.display = 'none';
			scoreDiv.style.display = 'block';
			scoreDiv.innerHTML = `<h3 class="result">Vas rezultat je: ${programmingQuiz.score}<h3>`;
			startAgainBtn.style.display = 'block';
			for (var i = 0; i < wrongArray.length; i++) {
				wrongArrayId.innerHTML += `<div class="wrongArray">${cur++}. ${wrongArray[i]} <br></div>`;
			};
		if (score.innerHTML == programming.length) {
			clearInterval(loop);
		}
	}
}