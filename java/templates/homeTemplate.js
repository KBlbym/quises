
function homeTemplate(app,data) {
    let html = "";
    data.forEach(item => {
        if(item.publish){
            html += `
            <div class="col">
            <div class="card h-100 bg-secondary">
            <div class="card-header">${item.id}</div>
            <img src="${item.img}" class="card-img-top" alt="${item.title}" height="150">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text text-muted">${item.description}</p>
                ${item.title != "HTML5" 
                ? `<button class="btn btn-primary" value="${item.id}">INICIAR</button>` 
                : `<a href="${item.url}" class="btn btn-primary">INICIAR</a>`}
                
            </div>
            </div>
        </div>`
        }
    });
    app.innerHTML = `<div class="row row-cols-1 row-cols-md-3 g-4">${html}</div>`;
}
function setTitle(title){
    let h1 =  document.querySelector("h1");
    h1.innerText = title;
 }
export{homeTemplate, setTitle}