class Quiz{
    questions = "";
    questionsToDisplay="";
    answered = [];
    maxScore = max;
    currentPosition = 0;
    score = 0;
    correctAnswers = 0;
    inCorrectAnswers = 0;
    pointPerCorrectAnswer = 0;
    scoreToWin = max * 50 / 100;
    hightScore = 0;
    timeToDo = 5;
    numOfQuestionsToDisplay = 5;
    getPointsPerAnswer = function () {
        return Math.floor(max/this.numOfQuestionsToDisplay);
    };
    getScore = function () {
        return Math.floor(this.score);
    };
    scoreToString = function() {
        let cssStyle = `${ this.score <= 0 ? 'bg-danger' : 'bg-success'}`
        return `<span class="badge ${cssStyle}">${this.score}<span>`
    };
    ended = function () {
        return `Has contestado a 
        ${this.correctAnswers == 1 ? `${this.correctAnswers} pregunta <b>correcta</b>`: `${this.correctAnswers} preguntas <b>correctas</b>`} y 
        ${this.inCorrectAnswers == 1 ? `${this.inCorrectAnswers} pregunta <b>incorrectas</b>`: `${this.inCorrectAnswers} preguntas <b>incorrectas</b>`}
        tu puntuación es: ${this.score} <br> ${this.score >= this.scoreToWin ? "<b>HAS SUPERADO LA PRUEBA</b>" : "<b>NO HAS SUPERADO LA PRUEBA</b>"}
        `
    };
    reset = function () {
        this.currentPosition = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.inCorrectAnswers = 0;
        this.questions = ""
    };
    getNormas= function () {
        return `<h2 class="text-uppercase">normas del juegos</h2>
    <p>-la Puntuación maxíma es de ${max} <br>
     -Por cada respuesta correcta son: ${Math.floor(max / this.numOfQuestionsToDisplay) } <br>
     -Un fallo resta una pregunta correcta<br>
     -Dispones de ${this.timeToDo} min para la realización del test</p>`;
    };
    getQuestionsRandom = function () {
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