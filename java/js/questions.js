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
    ,
    {
        pregunta : "¿Qué es un paradigma?",
        options : [
            "Conjunto de ideas para la contrucción de un programa",
            "Define el problema y el mismo busca la solución mediante razonamiento lógico",
            "La forma en que establece comunicación e intercambia mensajes",
            "Un proceso  para extraer las características esenciales de un objeto"
        ],
        correct : function (){
            return this.options[0];
        }
    },
    {
        pregunta : "Es base de la ",
        options : [
            "Conjunto de ideas para la contrucción de un programa",
            "Define el problema y el mismo busca la solución mediante razonamiento lógico",
            "La forma en que establece comunicación e intercambia mensajes",
            "Un proceso  para extraer las características esenciales de un objeto"
        ],
        correct : function (){
            return this.options[0];
        }
    }
]
export {questions};
