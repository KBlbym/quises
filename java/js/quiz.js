/**
 * la nota de cada respuesta correcta es segun el totalidad de las preguntas.
 * la nota maxima es de 100.
 * por cada respuesta correcta es (100/total de preguntas)
 * cada respuesta erronea se resta un respuesta correcta.
 */

let max = 100;
let quiz = {
    questions : "",
    questionsToDisplay:"",
    maxScore : max,
    currentPosition : 0,
    score : 0,
    correctAnswers : 0,
    inCorrectAnswers : 0,
    pointPerCorrectAnswer : 0,
    scoreToWin : max * 50 / 100,
    hightScore : 0,
    timeToDo : 5,
    numOfQuestionsToDisplay : 5,
    getPointsPerAnswer : function () {
        return Math.floor(max/this.numOfQuestionsToDisplay);
    },
    getScore : function () {
        return Math.floor(this.score);
    },
    getNormas: function () {
        return `<h2 class="text-uppercase">normas del juegos</h2>
    <p>-la Puntuación maxíma es de ${max} <br>
     -Por cada respuesta correcta son: ${Math.floor(max / this.numOfQuestionsToDisplay) } <br>
     -Un fallo resta una pregunta correcta<br>
     -Dispones de ${this.timeToDo} min para la realización del test</p>`;
    },
    getQuestionsRandom : function () {
        let items = [];
        let arrayCopy = [...quiz.questions];
        for (let i = 0; i < this.numOfQuestionsToDisplay; i++) {
            const randomIndex = Math.floor(Math.random() * arrayCopy.length);
            const item = arrayCopy[randomIndex];
            const index = arrayCopy.indexOf(item);
            arrayCopy.splice(index, 1);
            items.push(item);
        }
        this.questionsToDisplay = items;
      
        return items;
        
    }
}
export {quiz}


