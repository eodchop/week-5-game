//global variables
//trivia url https://opentdb.com/api.php?amount=5&difficulty=hard

var questionsRemaining = 0;
var guessRight =0;
var guessWrong = 0;




//create question object array


//generate questions

//generate html for card

//add logic for score

$(function() {
    $.ajax({
        url: "https://opentdb.com/api.php?amount=5&difficulty=hard",
        dataType: "json",
        type: "GET"
        }).done(function(data){
          questionHandler.parseAllQuestions(data);


    })




//closing document on ready
});


var questionHandler = {
    questionsArray: [],
    questionObjectCreator: function (cat, quest, correct, allAnswers) {
        allAnswers.push(correct)
        var question = {
            category: cat,
            question: quest,
            correctAnswer: correct,
            answers: allAnswers

        }
        return question;
    },
  parseAllQuestions:function (data) {
      // category,correct_answer, incorrect_answers question
      //for every question, parse question data,create question object,put in an array
      for (var i = 0; i < data.results.length; i++){
          this.questionsArray.push(this.questionObjectCreator(data.results[i].category,
              data.results[i].question,
              data.results[i].correct_answer,
              data.results[i].incorrect_answers));


      }
      console.log(this.questionsArray);
  }

}

myFunction(10,20,30);
function myFunction(cat,dog,bear){
    bearDog = dog + bear;
}
/*


init: function() {
    this.charactersArray.push(this.createCharacter("Obiwon", 100, 25, 10, "assets/images/obi.jpg"));
    this.charactersArray.push(this.createCharacter("Luke", 100, 25, 10, "assets/images/luke.jpg"));
    this.charactersArray.push(this.createCharacter("Vader", 100, 25,10,"assets/images/darth.jpg"));
    this.charactersArray.push(this.createCharacter("Quagmire",80, 30,11,"assets/images/quagmire.jpg"));
    this.addCharactersToHTML();

},
getCharacterObjectByName: function(nmToSearch) {
    for(var i = 0;i < this.charactersArray.length; i++){
        if (nmToSearch === this.charactersArray[i].name){
            return this.charactersArray[i];
        }
    }
},*/
