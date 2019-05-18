class Quiz {
	constructor(geography, physicsphysics, biology, mathematics, informatics, music) {
		this.geography = geography;
    this.physics = physics;
    this.biology = biology;
    this.mathematics = mathematics;
    this.informatics = informatics;
    this.music = music;
		this.index = 0;
		this.score = 0;
    this.curScore = 0;
    this.wrongScore = 0;
    this.curQuestion = 0;
	}
	getQuestion() {
    return this.geography[this.index];
	}
/*  getCategory() {
    return this.getQuestion().category; // Da se izvuce kategorija
  }*/
	randomize() {
		let copyArray = [].concat(this.getQuestion().options);
		let rand = [];
		for (let i = 0; i < 4; i++) {
			let r = Math.floor(Math.random() * copyArray.length);
			rand.push(copyArray[r]);
			copyArray.splice(r, 1);
		};
		return rand;
	}
	userAnswer(answer) {
    this.curQuestion++;
    curQuestion.innerHTML = this.curQuestion;
		if (answer === this.getQuestion().answer) {
			this.score += this.getQuestion().points;
      this.curScore++;
      correctNum.innerHTML = this.curScore;
      correctNum.style.color = '#a7cf5f';
		} else {
      this.wrongScore++;
      wrongNum.innerHTML = this.wrongScore;
      wrongNum.style.color = '#e0777b';
    }
		this.index++;
	}
	end() {
    return this.geography.length === this.index;
	}
}

const geographyQuiz = new Quiz(geography);
const physicsQuiz = new Quiz(physics);
const biologyQuiz = new Quiz(biology);
const mathematicsQuiz = new Quiz(mathematics);
const informaticsQuiz = new Quiz(informatics);
const programmingQuiz = new Quiz(programming);
const allQuizzes= [geographyQuiz, physicsQuiz, biologyQuiz, mathematicsQuiz, informaticsQuiz, programmingQuiz];