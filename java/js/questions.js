const questions = [
    {
        pregunta : "¿Cuál es la descripción que crees que define mejor el concepto 'clase' en la programación orientada a objetos?",
        options : [
            "Es un concepto similar al de array",
            "Es un tipo particular de variable",
            "Es un modelo o plantilla a partir de la cual creamos objetos",
            "Es una categoria de datos ordenada secuencialmente"
        ],
        correct : function (){
            return this.options[2];
        }
    },
    {
        pregunta : " ¿Qué elementos crees que definen a un objeto?",
        options : [
            "Sus cardinalidad y su tipo",
            "Sus atributos y sus métodos",
            "La forma en que establece comunicación e intercambia mensajes",
            "Su interfaz y los eventos asociados"
        ],
        correct : function (){
            return this.options[1];
        }
    }
]
for (const iterator of questions) {
    console.log(iterator);
    console.log(iterator.correct());
    
}
