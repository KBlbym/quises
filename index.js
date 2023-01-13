import data from './quizes.json' assert { type: 'json' };
import { startGame, init }  from './java/js/index.js';
console.log(startGame);

let app = document.getElementById("app");
data.forEach(item => {
    if(item.publish){
        app.innerHTML += `<div class="col">
        <div class="card h-100 bg-secondary" style="background-color:#121212 !important">
        <div class="card-header">${item.section}</div>
        <img src="${item.img}" class="card-img-top" alt="${item.title}" height="150">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text text-muted">${item.description}</p>
            <a href="${item.url}" class="btn btn-primary">Entrar</a>
            <button class="btn btn-primary" value="${item.section}">INICIAR</button>
        </div>
        </div>
    </div>`
    }
});

app.addEventListener("click", iniciar);
function iniciar(event) {
    if(event.target.tagName.toLowerCase() == "button"){
        
        startGame(data.filter(item => item.section == event.target.value));
        document.getElementById("startGame").addEventListener("click", function() {
            init();
        });
    }
   
}
