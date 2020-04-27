// var currentquestion=0;
// var score=0;
// var totalQuestion=questions.length;
// var container=document.getElementById("quizcontainer");
// var   questionEl= document.getElementById("question");

// var opt1=document.getElementById("opt1")
// var opt2=document.getElementById("opt2")
// var opt3=document.getElementById("opt3")
// var opt4=document.getElementById("opt4")
// var nexButton=document.getElementById("nextButton");
// var resultcont=document.getElementById("result");


// function loadQuestion(questionIndex) {
//     var q=questions[questionIndex];
//     questionEl.textContent=(questionIndex+1)+'.'+q.question
//     opt1.textContent=q+option1;
//     opt2.textContent=q+option2;
//     opt3.textContent=q+option3;
//     opt4.textContent=q+option4;
    
// };
// function loadNexQuestion() {
//  var selectoption=document.querySelector('input[type=radio]:checked');
//     if (!selectoption ) {
//         alert("Please select you answer!");
//         return      
//     }
//   var answer=selectoption.value;
//   if (questions[currentquestion].answer==answer) {
//       score+=10;
      
//   }
//   selectoption.checked=false;
//   currentquestion++;
//   if(currentquestion==totalQuestion) {
//       container.style.display="none";
//       resultcont.style.display="";
//       resultcont.textContent="you Score: "+score;
//       return;
//   }
//   loadQuestion(currentquestion);

//   }

//   loadQuestion(currentquestion);





    





var questions=[{
    "question":"Ces dernières 48 heures, quelle a été votre température la plus élevée ?",
    "option1":"degrer",
    "answer":"1"
}, {
    "question":"Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
    "option1":"oui",
    "option2":"Non",
    "answer":"2"
}, {
    "question":"Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?",
    "option1":"oui",
    "option2":"Non",
    "answer":"3"
},{
    "question":"Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?",
    "option1":"oui",
    "option2":"Non",
    "answer":"1",

},{
    "question":"Ces dernières 24 heures, avez-vous de la diarrhée ?Avec au moins 3 selles molles",
    "option1":" oui",
    "option2":"Non",
    "answer" :"3",
},{
    "question":"Ces derniers jours, avez-vous une fatigue inhabituelle ?",
    "option1":"Oui",
    "option2":"Non",
    "answer":"2"
}, {
    "question":"Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?",
    "option1":"Oui",
    "option2":"Non",
    "answer":"1",
},{
    "question":"Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
    "option1":"Oui",
    "option2":"Non",
    "answer":"3",
},{
    "question":"Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique",
    "option1":"ans",
    "answer":"2",
},{
    "question":"Quel est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
    "option1":"cm",
    "answer":"1",
},{
    "question":"Quel est votre poids ?   Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection",
    "option1":"Kg",
    "answer":"1"
}, {
    "question":"Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ?  Ou prenez vous un traitement à visée cardiologique ?",
    "option1":"oui",
    "option2":"Non",
    "option3":"Ne sais pas",
    "answer":"2",
}, {
    "question":"Êtes-vous diabétique ?",
    "option1":"oui",
    "option2":"Non",
    "answer":"2",
},{
    "question":"Avez-vous ou avez-vous eu un cancer ces trois dernières années ?",
    "option1":"Oui",
    "option2":"Non",
    "answer":"3",
}, {
    "question":"Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
    "option1":"Oui",
    "option2":"Non",
    "answer":"1",
}, {
    "question":"Avez-vous une insuffisance rénale chronique dialysée ?",
    "option1":"Oui",
    "option2":"Non",
    "answer":"1",

},{
    "question":"Avez-vous une maladie chronique du foie ?",
    "option1":"Oui",
    "option2":"Non",
    "answer":"3",

},{
    "question":  "Êtes-vous enceinte ?",
    "option1":"Oui",
    "option2":"Non",
    "option3":"non applicable",
    "answer":"2"
},{
    "question":"Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
    "option1":"Oui",
    "option2":"Non",
    "option3":"non applicable",
    "answer":"2"
    
},{
    "question":"Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)",
    "option1":"Oui",
    "option2":"Non",
    "option3":"non applicable",
    "answer":"3"


},{
    "question":"Quel est votre code postal ? Cette information nous permet de réaliser un suivi épidémiologiqueJe suis en dehors de Maroc ou je ne souhaite pas répondre.",
    "option1":"votre code postale",
    "answer":"1"


}

]






































// var questions=[
//     ["Ces dernières 48 heures, quelle a été votre température la plus élevée ?","degrer"],
//     ["Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?","oui","Non"],
//     ["Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?","oui","Non"],

//     ["Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?","oui","Non"],
//     ["Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?","oui","Non"],
//     ["Ces derniers jours, avez-vous une fatigue inhabituelle ?","oui","Non"],

//     ["Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?","oui","Non"],

//     ["Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?","oui","Non"],
//     ["Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique","ans"],

//     ["Quel est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.","cm"],
//     ["Quel est votre poids ?   Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection","kg"],

//     ["Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ?  Ou prenez vous un traitement à visée cardiologique ?","oui","Non","Ne sais pas"],

//     ["Êtes-vous diabétique ?","oui","Non"],
//     ["Avez-vous ou avez-vous eu un cancer ces trois dernières années ?","oui","Non"],

//     ["Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?","oui","Non"],

//     ["Avez-vous une insuffisance rénale chronique dialysée ?","oui","Non"],

//     ["Avez-vous une maladie chronique du foie ?","oui","Non"],
//     ["Êtes-vous enceinte ?","oui","Non","non applicable"],

//     ["Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?","oui","Non","Ne sais pas"],

//     ["Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)","oui","Non","Ne sais pas"],

//     ["Quel est votre code postal ? Cette information nous permet de réaliser un suivi épidémiologiqueJe suis en dehors de Maroc ou je ne souhaite pas répondre.","votre code postale"],

    
// ]



// function $(arg) {
//     return document.getElementById(arg);
// }

// function displayQuestion() {
//     test = $("test");
//     if (pos >= questions.length) {
//         test.innerHTML = "<h2>You got " + score + " of " + questions.length + " questions correct!</h2>";
//         $("test_status").innerHTML = "Test Completed.";
//         pos = 0;
//         score = 0;
//         return false;
//     }
    
//     $("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
//     question = questions[pos][0];
//     opA = questions[pos][1];
//     opB = questions[pos][2];
//     opC = questions[pos][3];
//     opD = questions[pos][4];
//     test.innerHTML = "<h3>" + question + "</h3>";
//     test.innerHTML += "<input type='radio' name='options' value='A'>" + opA + "<br>";
//     test.innerHTML += "<input type='radio' name='options' value='B'>" + opB + "<br>";
//     test.innerHTML += "<input type='radio' name='options' value='C'>" + opC + "<br>";
//     test.innerHTML += "<input type='radio' name='options' value='D'>" + opD + "<br><br>";
//     test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
// }

// function checkAnswer() {
//     options = document.getElementsByName("options");
//     for (var i = 0; i < options.length; i++) {
//         if (options[i].checked) {
//             option = options[i].value;
//         }
//     }
//     if (option == questions[pos][5]) {
//         score++;
//     }
//     pos++;
//     displayQuestion();
// }