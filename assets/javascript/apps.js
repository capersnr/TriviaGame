console.log("App Starting");
var countDown = 100;
var userPick = [];
var incorrectAnswer = 0;
var correctAnswer = 0; 
var intervalID;

var sportQuestions = [
    {
        question: "Which NBA franchise has won the most championships?", 
        choice: ["Warriors", "Celtics", "Spurs", "Bulls"],
        answer: 1,
        photo: "assets/images/NBATrophy.jpg"
     },
     {
         question: "Which NFL QB is the alltime passing leader?", 
        choice: ["Tom Brady", "Brett Favre", "Dan Marino", "Peyton Manning"],
        answer: 3,
        photo: "assets/images/NFLTrophy.jpg"
     }, 
     {
         question: "Who holds the MLB homerun record?", 
        choice: ["Babe Ruth", "Alex Rodriguez", "Barry Bonds", "Sammy Sosa" ],
        answer: 2,
        photo: "assets/images/WorldSeries.jpg"
    }, 
    {
        question: "Which team was given the nickname The Ain'ts during the 1980 NFL season?", 
        choice: ["Jets", "Cowboys", "Saints", "49ers" ],
        answer: 2,
        photo: "assets/images/NFLTrophy.jpg"
    }, 
    {
        question: "What MLB player is currently banned from baseball for gambling", 
        choice: ["Barry Bonds", "Pete Rose", "Derek Jetter", "Cy Young" ],
        answer: 1,
        photo: "assets/images/WorldSeries.jpg.jpg"
    }, 
    {
        question: "Who is the greatest NBA player of alltime?", 
        choice: ["LeBron James", "Kobe Bryant", "Bill Russell", "Michael Jordan" ],
        answer: 3,
        photo: "assets/images/NBATrophy.jpg"
    }, 
    {
        question: "What NFL team is referred to as America Team?", 
        choice: ["Patriots", "Redskins", "Cowboys", "Giants" ],
        answer: 2,
        photo: "assets/images/NFLTrophy.jpg"
    }, 
    {
        question: "What sport use a bat?", 
        choice: ["Soccer", "Hockey", "Baseball", "Volleyball" ],
        answer: 2,
        photo: "assets/images/WorldSeries.jpg"
    }];

$(document).ready(function() {
   
    $("#sport").on("click", run);
        function run() {
            clearInterval(intervalID);
            intervalID = setInterval(decrement, 1000);
            professionalSports();
        }

        function decrement() {
            countDown--;
            
            $("#show-number").html("<h2>" + countDown + "</h2>");

            if (countDown == 0) {
                stop();

                alert("Time Up!");
            }
        }

        function stop() {
           
            clearInterval(intervalId);
          }

          
function professionalSports() {
    $("#trivia").html(sportQuestions[0].question);

    var choiceArr = sportQuestions[0].choice;
    var buttonsArr = [];
  
    for (let i = 0; i < choiceArr.length; i++) {
      var button = $("<button>");
      button.text(choiceArr[i]);
      button.attr("data-id", i);
      $("#choices").append(button);
     }
  
    } 

$("#choices").on("click", function(e){

userPick = $(this).data("id");
sportQuestions[0].answer;
if(userPick != sportQuestions[0].answer) {

$("#choices").text("Wrong Answer!");
incorrectAnswer++;

} else if (userPick == sportQuestions[0].answer) {
$("#choices").text("Correct!!!");
correctAnswer++;
}

});
      
});








console.log("App Ending");