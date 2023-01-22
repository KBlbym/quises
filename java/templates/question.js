
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

function printElementContent(text, element, estilo, id){
    const containsHTML = (text) => /<[a-z][\s\S]*>/i.test(text);
    estilo != undefined ? estilo : "";
    id != undefined ? id : "";
    const div = document.createElement("div");
    div.innerHTML = `<${element} class="${estilo}" id=${id}>${text}</${element}>`
    return div;
}
export {printOpcions, printElementContent};
