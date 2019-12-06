const answerArray = ['Good question!', 'It"s possible', 'Not even close', 'That should be considered', 'What kind of question is that?'];
const message = document.querySelector('.message');
const question = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
let res = Math.floor(Math.random() * answerArray.length);
message.innerHTML = question.value + ' - ' + ' ' + answerArray[res];
question.value = '';
})