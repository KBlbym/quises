

function resumeQuiz(questions, answered) {
    let html = "";
    questions.forEach((question,index) => {
        html += `<div class="col my-4">
        <div class="card bg-secondary ${question.isCorrect(answered[index]) ? "border-success" : "border-danger"}" data-bs-toggle="collapse" href="#pregunta-${index}" role="button" aria-expanded="false" aria-controls="pregunta-${index}">
          <div class="card-header">${question.pregunta}</div>
          <div class="card-body collapse multi-collapse" id="pregunta-${index}">
              <ul class="list-group">
                ${
                getOptions(question, answered[index])
                }  
              </ul>
          </div>
        </div>
        </div>`;
    });
    return html;
}
function getOptions(question, answer){
    let html ="";
    question.options.forEach(option => {
        if (question.isCorrect(option) && answer == option){
          html += `<li class="list-group-item list-group-item-success">${option}</li>`;
        }
        else if(answer == option){
            html += `<li class="list-group-item list-group-item-danger">${option}</li>`
        }
        else{
            html += `<li class="list-group-item list-group-item-light">${option}</li>`
        }
        
    });
    return html;
    
}
export {resumeQuiz}