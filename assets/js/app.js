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
      answer: ""
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

  // GLOBAL VARS
  var qIndex = 1

// HELPER FUNCTIONS
  function showIntro() {
    $(".game").hide()
    $(".score").hide()
  }

  function renderQuestion() {
    $(".heading--secondary").html("Question " + qIndex)
    $(".heading--question").html(questions["q" + qIndex].question)
  }

  function nextQuestion() {
    qIndex++
  }


  // EVENT LISTENERS

  // Start game
  $(document).on("click", "#startBtn", function() {
    $(".intro").hide()
    $(".game").show()
    renderQuestion()
  })


  // GAME

  // Immediately show intro page
  showIntro()
})