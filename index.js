import data from './quizes.json' assert { type: 'json' };

let lista = document.getElementById("testsList");
data.forEach(item => {
    if(!item.publish){
        lista.innerHTML += `<div class="col">
        <div class="card h-100 bg-secondary" style="background-color:#121212 !important">
        <div class="card-header">${item.section}</div>
        <img src="${item.img}" class="card-img-top" alt="${item.title}" height="150">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text text-muted">${item.description}</p>
            <a href="${item.url}" class="btn btn-primary">Entrar</a>
        </div>
        </div>
    </div>`
    }
});
