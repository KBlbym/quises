const app = document.getElementById("app");

/**
 * la nota de cada respuesta correcta es segun el totalidad de las preguntas.
 * la nota maxima es de 100.
 * por cada respuesta correcta es (100/total de preguntas)
 * cada respuesta erronea se resta un respuesta correcta.
 */
let currentPosition = 0;
let maxScore = 100;
let score = 0;
let questionsLength = questions.length;
let pointPerCorrectAnswer = maxScore/questions.length;
let scoreToWin = maxScore * 70 / 100;
let htmlCode = "";

function init(){
    if(htmlCode !=""){
        app.removeChild(htmlCode);
    }

    if(currentPosition == questionsLength){
        endGame();
    }
    printQuestion();
}

function printQuestion(){
    let h2 = document.createElement("h2");
    h2.setAttribute("class", "my-5");
    h2.innerText = questions[currentPosition].pregunta;
    htmlCode = document.createElement("div");
    htmlCode.appendChild(h2);

    printOpcions(questions[currentPosition].options);
}
function printOpcions(options){
    const div = document.createElement("div");
    div.setAttribute("class","d-grid gap-2 col-6 mx-auto");
    options.forEach((element, index )=> {
        const btn = document.createElement("button");
        btn.setAttribute("class","btn btn-light");
        btn.setAttribute("type","button");
        btn.setAttribute("id",`pregunta-${index}`);
        btn.setAttribute("onclick", `answer('${element}', this)`);
        btn.innerText = element;
        div.appendChild(btn)
    });
    htmlCode.appendChild(div);
    app.appendChild(htmlCode);
}
function answer(valor,elem){
    let correctAnswer = questions[currentPosition].correct();
    if(correctAnswer != valor){
        //playError(); TODO
        elem.classList.remove("btn-light");
        elem.classList.add("btn-danger");
        //puntuacion -= fallo; TODO
        currentPosition++;
        setTimeout(() => {
            init();
          }, 1000)
    }
    else{
        //playSuccess(); TODO
        elem.classList.remove("btn-light");
        elem.classList.add("btn-success");
        currentPosition++;
        //puntuacion += acierto; TODO
        setTimeout(() => {
            init();
          }, 1000)
    }
    //printpuntuacion(); TODO
}
init();