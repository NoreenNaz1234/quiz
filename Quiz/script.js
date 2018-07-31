
let questions = [{
	"question": "What is the full form of HTML?",
	"option1":  "Hyper Text Markup Language",
	"option2":  "Hyper Language",
	"option3":  "Hyper Text Mark Language",
	"option4":  "Hyper Test Markup Language",
	"answer" :   "1"

} , {
	"question": "What is the full form of CSS?",
	"option1":  "Cascading Style Sheets",
	"option2":  "Co-oprative Style Sheets",
	"option3":  "Current Style Sheets",
	"option4":  "Correct Style Sheets",
	"answer" :   "1"
} , {
	"question": "What does JAVASCRIPT express?",
	"option1":  "Presentation",
	"option2":  "Structure",
	"option3":  "Behaviour",
	"option4":  "Nothing",
	"answer" :   "3"

} , {
	"question": "When did HTML create?",
	"option1":  "1990",
	"option2":  "2000",
	"option3":  "1994",
	"option4":  "I don't know",
	"answer" :   "1"

} , {
	"question": "Why is CSS used?",
	"option1":  "For creating web",
	"option2":  "For styling",
	"option3":  "For clicking",
	"option4":  "For changing in HTML",
	"answer" :   "2"
}








]

let currenQus = 0;
let scor = 0;
let totalQues = questions.length;


let container = document.querySelector("#set");
let questionEl = document.querySelector("#question");
let opt1 = document.querySelector("#opt1");
let opt2 = document.querySelector("#opt2");
let opt3 = document.querySelector("#opt3");
let opt4 = document.querySelector("#opt4");
let nextBtn =  document.querySelector("#next");
let result =  document.querySelector("#resultEl");


function loadQuestion(questionIndex) {
	let q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
     opt1.textContent = q.option1;
     opt2.textContent = q.option2;
     opt3.textContent = q.option3;
     opt4.textContent = q.option4;

}

function nextquet(){
	let selOpt = document.querySelector("input[type=radio]:checked");
	if (!selOpt) {
		alert("Please enter your answer!!");
		return;
	}
	let answer = selOpt.value;
	if (questions[currenQus].answer == answer) {
		scor +=10;

	}
       selOpt.checked = false;
		currenQus ++;
		if (currenQus == totalQues - 1) {
			nextBtn.textContent="finish";
		}
		if (currenQus == totalQues) {
			container.style.display = "none"
			result.style.display= "";
			result.textContent = "your score " + scor;
		}
		loadQuestion(currenQus);
}
loadQuestion(currenQus);



