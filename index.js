import data from './java/json/quizes.json' assert { type: 'json' };
import {homeTemplate} from './java/templates/homeTemplate.js';
import {quiz} from './java/js/quiz.js';
import {questionsList} from './java/js/importQuestions.js';

import { printOpcions, printDivContent } from "./java/templates/question.js";

let app = document.getElementById("app");
homeTemplate(app, data);
printTitle("Test de programción");

let pointPerCorrectAnswer  =0;
let questionsLength = 0;

function init(){
    questionsLength = quiz.questions.length;
    pointPerCorrectAnswer = 100/questionsLength;
    console.log("preguntas "+ questionsLength);
    console.log("puntos por pregunta correcta " + pointPerCorrectAnswer);
    if(app.hasChildNodes()){
        app.innerHTML = "";
    }

    if(quiz.currentPosition == questionsLength){
       endGame();
    }
    else{
        app.appendChild(printDivContent(quiz.questions[quiz.currentPosition].pregunta, "h2"));
        app.appendChild(printOpcions(quiz.questions[quiz.currentPosition].options));
        let ele = app.querySelector("div#options");
        ele.addEventListener("click",answer);
    }
}


function answer(event){
    let elem = event.target;
    let valor = elem.textContent;
    if(elem.tagName.toLowerCase() === "button"){
        let correctAnswer = quiz.questions[quiz.currentPosition].correct();
        if(correctAnswer != valor){
            //playError(); TODO
            elem.classList.remove("btn-light");
            elem.classList.add("btn-danger");
            quiz.score -= pointPerCorrectAnswer;
            quiz.currentPosition++;
            quiz.inCorrectAnswers++;
            setTimeout(() => {
                init();
              }, 1000)
        }
        else{
            //playSuccess(); TODO
            elem.classList.remove("btn-light");
            elem.classList.add("btn-success");
            quiz.currentPosition++;
            quiz.score += pointPerCorrectAnswer;
            quiz.correctAnswers++;
            setTimeout(() => {
                init();
              }, 1000)
        }
        //printpuntuacion(); TODO
        console.log(quiz.score)
    }
}
function startGame(obj){
    printTitle(obj[0].description.toUpperCase());
    app.innerHTML = `<img src="${obj[0].img}" alt="${obj[0].title}" width="200px"></img><br>`;
    app.innerHTML += `<input class="btn btn-outline-info my-5" type="button" id="startGame" value="Empezar"></input><br>`
    app.innerHTML += `<button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Reglas</button>`
    document.getElementById("startGame").addEventListener("click", function() {
        switch (obj[0].id) {
            case "PRO":
                quiz.questions = questionsList.java;
                break;
            case "SSF":
                quiz.questions = questionsList.sistemas;
                break;
            default:
                break;
        }
        init();
    });
}
function endGame() {
    
    app.appendChild(printDivContent(
        `Has contestado a 
        ${quiz.correctAnswers == 1 ? `${quiz.correctAnswers} pregunta <b>correcta</b>`: `${quiz.correctAnswers} preguntas <b>correctas</b>`} y 
        ${quiz.inCorrectAnswers == 1 ? `${quiz.inCorrectAnswers} pregunta <b>incorrectas</b>`: `${quiz.inCorrectAnswers} preguntas <b>incorrectas</b>`}
        tu puntuación es: ${quiz.score} por lo tanto ${quiz.score >= quiz.scoreToWin ? "<b>HAS SUPERADO LA PRUEBA</b>" : "<b>NO HAS SUPERADO LA PRUEBA</b>"}
        `, 
        "div",
        quiz.score >= quiz.scoreToWin ? "alert alert-success" : "alert alert-danger"
        ));
        quiz.currentPosition = 0;
        quiz.score = 0;
        quiz.correctAnswers = 0;
        quiz.inCorrectAnswers = 0;
        let elem = app.appendChild(printDivContent(`Volver a empezar`, "button", "btn btn-outline-info","startGame"));
        elem.querySelector("#startGame").addEventListener("click", init)
}
function printTitle(title){
   let h1 =  document.querySelector("h1");
   h1.innerText = title;
}

app.addEventListener("click", function (event) {
    if(event.target.tagName.toLowerCase() == "button"){
        startGame(data.filter(item => item.id == event.target.value));
    }
});

