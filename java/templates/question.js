
function printOpcions(options){
    const div = document.createElement("div");
    div.setAttribute("class","d-grid gap-2 col-6 mx-auto");
    div.setAttribute("id", "options");
    options.forEach((element, index )=> {
        div.innerHTML += `<button 
        class="btn btn-light" 
        type="button" id="pregunta-${index}" 
        >${element}</button>
    `;
    });
    return div;
}

function printDivContent(text, element, estilo, id){
    estilo != undefined ? estilo : "";
    id != undefined ? id : "";
    const div = document.createElement("div");
    div.innerHTML = `<${element} class="my-5 ${estilo}" id=${id}>${text}</${element}>`
    return div;
}
 
function printResult() {

    
}

export {printOpcions, printDivContent};