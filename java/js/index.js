import { questions } from "./questions.js";
import { printOpcions, printDivContent } from "../templates/question.js";
const app = document.getElementById("app");
const title = "";
const img  = ""
/**
 * la nota de cada respuesta correcta es segun el totalidad de las preguntas.
 * la nota maxima es de 100.
 * por cada respuesta correcta es (100/total de preguntas)
 * cada respuesta erronea se resta un respuesta correcta.
 */
let maxScore = 100;
let currentPosition = 0;
let score = 0;
let correctAnswers = 0;
let inCorrectAnswers = 0;
let questionsLength = questions.length;
let pointPerCorrectAnswer = maxScore/questions.length;
let scoreToWin = maxScore * 50 / 100;

function init(){
    console.log("preguntas "+questionsLength);
    console.log("puntos por pregunta correcta " + pointPerCorrectAnswer);
    if(app.hasChildNodes()){
        app.innerHTML = "";
    }

    if(currentPosition == questionsLength){
       endGame();
    }
    else{
        app.appendChild(printDivContent(questions[currentPosition].pregunta, "h2"));
        app.appendChild(printOpcions(questions[currentPosition].options));
        let ele = app.querySelector("div#options");
        ele.addEventListener("click",answer);
    }
    
}

function answer(event){
    let elem = event.target;
    let valor = elem.textContent;
    if(elem.tagName.toLowerCase() === "button"){
        let correctAnswer = questions[currentPosition].correct();
        if(correctAnswer != valor){
            //playError(); TODO
            elem.classList.remove("btn-light");
            elem.classList.add("btn-danger");
            score -= pointPerCorrectAnswer;
            currentPosition++;
            inCorrectAnswers++;
            setTimeout(() => {
                init();
              }, 1000)
        }
        else{
            //playSuccess(); TODO
            elem.classList.remove("btn-light");
            elem.classList.add("btn-success");
            currentPosition++;
            score += pointPerCorrectAnswer;
            correctAnswers++;
            setTimeout(() => {
                init();
              }, 1000)
        }
        //printpuntuacion(); TODO
        console.log(score)
    }
}
function startGame(obj){
    console.log(obj[0].description);
    title = obj[0].description.toUpperCase();
    app.innerHTML = `<img src="${obj[0].img}" alt="${obj[0].title}" width="200px"></img><br>`;
    app.innerHTML += `<input class="btn btn-outline-info my-5" type="button" id="startGame" value="Empezar"></input><br>`
    app.innerHTML += `<button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Reglas</button>`
}
function endGame() {
    
    app.appendChild(printDivContent(
        `Has contestado a 
        ${correctAnswers == 1 ? `${correctAnswers} pregunta <b>correcta</b>`: `${correctAnswers} preguntas <b>correctas</b>`} y 
        ${inCorrectAnswers == 1 ? `${inCorrectAnswers} pregunta <b>incorrectas</b>`: `${inCorrectAnswers} preguntas <b>incorrectas</b>`}
        tu puntuación es: ${score} por lo tanto ${score >= scoreToWin ? "<b>HAS SUPERADO LA PRUEBA</b>" : "<b>NO HAS SUPERADO LA PRUEBA</b>"}
        `, 
        "div",
        score >= scoreToWin ? "alert alert-success" : "alert alert-danger"
        ));
         currentPosition = 0;
         score = 0;
         correctAnswers = 0;
         inCorrectAnswers = 0;
        let elem = app.appendChild(printDivContent(`Volver a empezar`, "button", "btn btn-outline-info","startGame"));
        elem.querySelector("#startGame").addEventListener("click", init)
}
(function (){
   let h1 =  document.querySelector("h1");
   h1.innerText = title;
})();
//startGame();
//document.getElementById("startGame").addEventListener("click", init);

export {startGame, init}
