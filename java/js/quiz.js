/**
 * la nota de cada respuesta correcta es segun el totalidad de las preguntas.
 * la nota maxima es de 100.
 * por cada respuesta correcta es (100/total de preguntas)
 * cada respuesta erronea se resta un respuesta correcta.
 */

let max = 100;
let quiz = {
    questions : "",
    maxScore : max,
    currentPosition : 0,
    score : 0,
    correctAnswers : 0,
    inCorrectAnswers : 0,
    pointPerCorrectAnswer : 0,
    scoreToWin : max * 50 / 100,
    hightScore : 0,
    timeToDo : 5,
    getScore : function () {
        return Math.floor(this.score);
    },
    getNormas: function () {
        return `<h2 class="text-uppercase">normas del juegos</h2>
    <p>-la Puntuación maxíma es de ${max} <br>
     -Por cada respuesta correcta son: ${Math.floor(max / this.questions.length) } <br>
     -Un fallo resta una pregunta correcta<br>
     -Dispones de ${this.timeToDo} min para la realización del test</p>`;
    }
}
export {quiz}


