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
    scoreToWin : max * 50 / 100
}
export {quiz}