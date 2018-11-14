// Wait for document to load before we run our scripts
$(document).ready(function() {

  // DATA
  var questions = {
    q1: {
      question: "Who established the Targaryen dynasty in Westeros?",
      choices: ["Aemon, The Dragon Knight", "Maegor, The Cruel", "Aegon, The Conqueror", "Brynden Blackfish"],
      answer: "Aegon, The Conqueror"
    },
    q2: {
      question: "Who built Winterfell and The Wall?",
      choices: ["Bran, The Builder", "Cotter Pyke", "Prince Theon of Winterfell", "Maester Luwin"],
      answer: "Bran, The Builder"
    },
    q3: {
      question: "What is the capital of the West in Westeros?",
      choices: ["Lannisport", "The Vale", "High Garden", "Casterly Rock"],
      answer: "Casterly Rock"
    },
    q4: {
      question: "What city does Danaerys take refuge in shortly after the birth of her dragons?",
      choices: ["Lazereen", "Qohor", "Dragon Stone", "Qarth"],
      answer: "Qarth"
    },
    q5: {
      question: "What is the name of the red priestess who councils Stannis Baratheon?",
      choices: ["Mirri Maz Dur", "Melisandre", "Osha", "Salaador San"],
      answer: "Melisandre"
    },
    q6: {
      question: "Who is known as the Red Viper of Dorne?",
      choices: ["Quentyn Martell", "Princess Myrcella", "Oberyn Martell", "Gregor Clegane"],
      answer: "Oberyn Martell"
    },
    q7: {
      question: "Who is known as King Beyond The Wall?",
      choices: ["Mance Rayder", "Varamir Six Skins", "Jeor Mormont", "Jojen Reed"],
      answer: "Mance Rayder"
    },
    q8: {
      question: "Who was Arya Stark's Dancing Master?",
      choices: ["Meryn Trant", "Septa Mordane", "Syrio Forell", "Jaqen Hagar"],
      answer: "Syrio Forell"
    },
    q9: {
      question: "What is said of red-headed wildlings?",
      choices: ["Born with fire", "Fire Tops", "Kissed by Fire", "The Shield that guards the realms of men"],
      answer: "Kissed by Fire"
    },
    q10: {
      question: "Who was known as the Sword of the Morning?",
      choices: ["Ser Arthur Dayne", "Ser Mandon Moore", "Ser Baristan Selmy", "Strong Belwas"],
      answer: "Ser Arthur Dayne"
    }
  }

  var goodGuess = ["https://media.giphy.com/media/OyuoAUQNEXcu4/giphy.gif", "https://uproxx.files.wordpress.com/2014/06/dinklage-tyrion-dance.gif?w=645", "https://media.rbl.ms/image?u=%2Ffiles%2F2016%2F06%2F13%2F6360140683694288111863246461_Daenerys-Targaryen-Game-Thrones-GIFs.gif&ho=https%3A%2F%2Faz616578.vo.msecnd.net&s=102&h=883ff86c7a33155a682c3b88564ec28490fdb391710795516f917db5f0414403&size=980x&c=2309864140"];
  var wrongGuess = ["https://media.giphy.com/media/LXP19BrVaOOgE/giphy.gif", "https://thumbs.gfycat.com/HauntingMasculineIchthyosaurs-size_restricted.gif", "https://media.giphy.com/media/wmsjvA5UH8Xqo/giphy.gif"];
 
  // GLOBAL VARS
  var qIndex = 1;
  var correct = 0;
  var incorrect = 0;
  var current = questions["q" + qIndex]
  var timeLeft;

// HELPER FUNCTIONS
  function showIntro() {
    $(".game").hide();
    $(".score").hide();
    $(".evaluate").hide();
  }

  function renderQuestion() {
    // Remove last q
    $("#questionNum").empty();
    $("#question").empty();
    $(".game__btns").empty();
   
    // add new data
    clearInterval(timeLeft);
    timer();
    $("#questionNum").html("Question " + qIndex);
    $("#question").html(current.question);
    for (var i = 0 ; i < 4 ; i++) {
      $(".game__btns").append("<button class='choice-btn'>"+ current.choices[i] +"</button>");
    }
    
  }

  function nextQuestion() {
    qIndex++;
    // Update pointer
    current = questions["q" + qIndex]

    if (qIndex > 10) {
      $(".game").hide();
      $(".score").show();
      renderScore()
    } else {
      renderQuestion()
    }
  }

  function checkAnswer(user, answer) {
    $(".gameContainer").hide()
    $(".timer").hide()
    
    if (user === answer) {
      correct++;
      $(".evaluate__img-container").append("<img src='" + getGif(goodGuess) +"'>")
      $("#evaluate").text("Correct")
    } else {
      incorrect++;
      $(".evaluate__img-container").append("<img src='" + getGif(wrongGuess) +"'>")
      $("#evaluate").text("Wrong")
    }

    $(".evaluate").show()
    setTimeout(function() {
      $(".evaluate").hide()
      $(".gameContainer").show()
      $(".timer").show()
      $(".evaluate__img-container").empty()
      nextQuestion()
    }, 3000)
    
  }

  function renderScore() {
    $("#correct").text(correct);
    $("#incorrect").text(incorrect);
    $("#audioGame").get(0).remove();
    $("#audioScore").get(0).play();
  }

  function timer() {
    var questionTime = 9;
    $(".timer__time").text(questionTime + 1);
    timeLeft = setInterval(function() {
      if (questionTime > -1) {
        $(".timer__time").text(questionTime);
        questionTime--;
      } else {
        clearInterval(timeLeft);
        checkAnswer(null, current.answer);
      }
      
    }, 1000)
  }

  function getGif(answer) {
    return answer[Math.floor(Math.random() * answer.length)]
  }



  // EVENT LISTENERS

  // Start game
  $(document).on("click", "#startBtn", function() {
    $(".intro").hide();
    $(".game").show();
    $("#audioGame").get(0).play(); 
    renderQuestion();
  })

  // User guess
  $(document).on("click", ".choice-btn", function() {
    checkAnswer(this.textContent, current.answer)
    
  })

  // GAME

  // Immediately show intro page
  showIntro();
})