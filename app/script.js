window.onload = function() {
   //
   main.bindUI();
};

var main = {};

main.bindUI = function() {
   var askButton = document.getElementById('ask');
   console.dir(askButton);
   askButton.addEventListener('click', function() {
      var question = document.getElementsByName('question')[0].value;
      main.trimInput(question);
      main.addToRecent(question);
      main.clearInput();
   });
};

main.questions = [
   'I can\'t push to GitHub',
   'I tried to create a branch and got an error message',
   'I meant to merge, but lost some changes.'
];

main.trimInput = function(question) {
   console.log('trimming');
};

main.addToRecent = function(question) {
   console.log('click');
   main.questions.unshift(question);
   main.questions.pop();
   var questionBoxes = document.querySelectorAll('.question_text');
   for (var i = 0; i < main.questions.length; i++) {
      questionBoxes[i].innerText = main.questions[i]
   }
};

main.clearInput = function() {
   var textareas = document.querySelectorAll('textarea');
   for (var i = 0; i < textareas.length; i++) {
      textareas[i].value = "";
   }
   var textFields = document.querySelectorAll('input');
   for (var i = 0; i < textFields.length; i++) {
      textFields[i].value = "";
   }
};