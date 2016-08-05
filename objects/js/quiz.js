var questions = [
  {
    question: 'What is my age?', 
    answer: 30
  },
  {
    question: 'How many letters are in my name?',
    answer: 5
  },
  {
    question: 'How many inches are in a foot?', 
    answer: 12
  }
];
var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  } 
}

html = "You got " + correctAnswers + " question(s) right."
print(html);
