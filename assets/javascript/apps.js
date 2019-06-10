console.log("App Starting");

$(document).ready(function() {
    var countDown = 100;
    var intervalID;

    $("btn btn-secondary btn-lg btn-block").on("click", run);
        function run() {
            clearInterval(intervalID);
            intervalID = setInterval(decrement, 1000);
        }

        function decrement() {
            countDown--;
            
            $("#show-number").html("<h2>" + countDown + "</h2>");

            if (countDown == 0) {
                stop();

                alert("Time Up!");
            }
        }

    });

    var triviaQuestions = [
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

console.log("App Ending");