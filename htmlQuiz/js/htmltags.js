import data from '../htmltags.json' assert { type: 'json' };
let htmltags = data;
let htmltagsOrigin = htmltags.slice();
let totalTags = htmltags.length;
let correctAnswerCount = 0;
let duracion;
let percentageNeeded = 70;

let input = document.getElementById("tagsInput");

let print = document.getElementById("showTags");
let tagsCounts = document.getElementById("tagsCounts");

let btnStartGame = document.getElementById("startGame");
let gameInfo = document.getElementById("gameInfo");


let duracionInMinuts = 5;
let tagsRemaining = totalTags;

let messageInfo = `Dispones de ${duracionInMinuts} minutos para realizar el test.<br>
 Hay ${totalTags} etiquetas, necesitas el ${percentageNeeded}% de aciertos para superar el test.<br><strong>¡Serás capaz!</strong>`;

gameInfo.querySelector("#messageInfo").innerHTML = messageInfo;
function checkTag() {
    let valor = input.value;
    if(htmltags.includes(valor)){
        correctAnswerCount++;
        const index = htmltags.indexOf(valor);
        htmltags.splice(index, 1); 
        input.value = "";
        printTag(valor);
    }
}
document.querySelector('#tagsInput').addEventListener("keyup", checkTag);
function printTag(tag){
    print.innerText += ` <${tag}> `;
    tagsRemaining--;
    tagsCounts.firstChild.textContent = tagsRemaining;
}

btnStartGame.addEventListener("click", function (event) {
    init(this);
    startTimer();
});

function startTimer(){
    let timerTag = document.getElementById("timer");
    var x = setInterval(function () {
        duracion -= 1000;
        var minutos = Math.floor((duracion % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((duracion % (1000 * 60)) / 1000);
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;
        timerTag.textContent = minutos + ":" + segundos;
        if (duracion <= 0) {
            clearInterval(x);
            gameOver();
        }
    }, 1000);
}
function gameOver(){
    let gameInfoParagraph = gameInfo.querySelector("#messageError");
    if(correctAnswerCount > (totalTags*percentageNeeded/100)){
        gameInfoParagraph.className = "";
        gameInfoParagraph.classList.add("alert", "alert-success");
    }else{
        gameInfoParagraph.className = "";
        gameInfoParagraph.classList.add("alert", "alert-danger");
    }
    gameInfoParagraph.innerHTML = `Has acertado ${correctAnswerCount} ${correctAnswerCount == 1 ? "etiqueta" : "etiquetas"} de los ${totalTags} existentes.<br>
    ${(correctAnswerCount > (totalTags*percentageNeeded/100) ? "<b>Has superado la prueba</b>" : "<b>No has conseguido superar la prueba.</b>")}`;
    init(btnStartGame);
}
function init(element){
    duracion = 1000*60*/*min*/duracionInMinuts;
    correctAnswerCount = 0;
    tagsRemaining = totalTags;
    input.value = "";
    print.textContent = "";
    document.getElementById("started").classList.toggle("display-none");
    gameInfo.classList.toggle("display-none");
    element.value = "Volver a Empezar";
    htmltags  = htmltagsOrigin.slice();
    tagsCounts.innerHTML = `<span>${tagsRemaining}</span> / <span>${totalTags}</span>`;
};


   