import appInfo from './app.json' assert { type: 'json' };
import data from './java/json/quizes.json' assert { type: 'json' };
import {homeTemplate, setTitle} from './java/templates/homeTemplate.js';
import {printAlertTemplate} from './java/templates/alertTemplate.js';
import {quiz} from './java/js/quiz.js';
import {questionsList} from './java/js/importQuestions.js';
import { printOpcions, printElementContent } from "./java/templates/question.js";
import { resumeQuiz } from "./java/templates/resumeQuiz.js";


let app = document.getElementById("app");
let scoreElement = document.getElementById("score");
let preguntas = "";
let respuestas = [];

homeTemplate(app, data);
setTitle(appInfo.name.toUpperCase());

let pointPerCorrectAnswer  =0;
let questionsLength = 0;

function startQuiz(){
    preguntas = quiz.getQuestionsRandom();
    questionsLength = preguntas.length;
    pointPerCorrectAnswer = quiz.getPointsPerAnswer();
    printQuestion();
}

function printQuestion(){
    if(app.hasChildNodes()){
        app.innerHTML = "";
    }
    if(scoreElement.hasChildNodes()){
        scoreElement.innerHTML = "";
    }
    scoreElement.append(printElementContent(quiz.scoreToString()))

    if(quiz.currentPosition == questionsLength){
       endGame();
    }
    else{
        app.appendChild(printElementContent(preguntas[quiz.currentPosition].pregunta, "h2"));
        app.appendChild(printOpcions(preguntas[quiz.currentPosition].options));
        let ele = app.querySelector("div#options");
        ele.addEventListener("click",answer);
    }
}
function answer(event){
    let elem = event.target;
    let valor = elem.textContent;
    if(elem.tagName.toLowerCase() === "button"){
        if(preguntas[quiz.currentPosition].isCorrect(valor)){
            //playSuccess(); TODO
            elem.classList.remove("btn-light");
            elem.classList.add("btn-success");
            quiz.currentPosition++;
            quiz.score += pointPerCorrectAnswer;
            quiz.correctAnswers++;
            setTimeout(() => {
                printQuestion();
              }, 1000)
            
        }
        else{
            //playError(); TODO
            elem.classList.remove("btn-light");
            elem.classList.add("btn-danger");
            quiz.score -= pointPerCorrectAnswer;
            quiz.currentPosition++;
            quiz.inCorrectAnswers++;
            setTimeout(() => {
                printQuestion();
              }, 1000)
        }
        respuestas.push(valor);
        //printpuntuacion(); TODO
    }
}
function init(obj){
    
    setTitle(obj[0].description.toUpperCase());
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
    
    app.innerHTML = printAlertTemplate(quiz.getNormas());
    app.innerHTML += `<img src="${obj[0].img}" alt="${obj[0].title}" width="200px"></img><br>`;
    app.innerHTML += `<input class="btn btn-outline-info my-5" type="button" id="init" value="Empezar"></input><br>`
    app.innerHTML += `<button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Reglas</button>`
    document.getElementById("init").addEventListener("click", function() {
    startQuiz();
    });
}
function endGame() {
    app.appendChild(printElementContent(quiz.ended(), "div", quiz.score >= quiz.scoreToWin ? "alert alert-success" : "alert alert-danger"));
        let elem = app.appendChild(printElementContent(`Volver a empezar`, "button", "btn btn-outline-info","init"));
        let showResumenButton = app.appendChild(printElementContent(`Ver preguntas`, "a", "btn btn-outline-info","showResumen"));
        elem.querySelector("#init").addEventListener("click", startQuiz);
        showResumenButton.querySelector("#showResumen").addEventListener("click", showResumen);
        scoreElement.innerHTML = "";
        quiz.reset();
}

async function showResumen() {
    app.innerHTML += resumeQuiz(preguntas,respuestas);
}
app.addEventListener("click", function (event) {
    let element = event.target;
    if(element.tagName.toLowerCase() == "button" && !element.id.startsWith("pregunta") ){
        init(data.filter(item => item.id == event.target.value));
    }
});

