const javaq = [
    
    {
        pregunta : `¿Cual es el resultado del siguiente programa?
        <pre class="pre-scrollable">
    int i=1;
    int j=2;
    int k=3;
    int m=2;
    System.out.println ((j &gt;= i) || (k == m));
        </pre>`,
        options : [
            "true",
            "false",
            "undefined",
            "Da error de compilación"
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    },
    {
        pregunta : "¿Cuál es la descripción que crees que define mejor el concepto 'clase' en la programación orientada a objetos?",
        options : [
            "Es un concepto similar al de array",
            "Es un tipo particular de variable",
            "Es un modelo o plantilla a partir de la cual creamos objetos",
            "Es una categoria de datos ordenada secuencialmente"
        ],
        isCorrect : function (option){
            return option === this.options[2];
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
        isCorrect : function (option){
            return option === this.options[1];
        }
    },
    {
        pregunta : `¿Qué calcula nuestro método misterio?
        <pre class="pre-scrollable">public static int misterio(int uno, int dos){
            int calculo = 1;
            for (int x=0;x&lt;dos;x++)
              calculo *= uno;
            return calculo;
          }</pre>`,
        options : [
            "La multiplicación del número uno con el número dos",
            "El factorial del número uno",
           "La potencia del número uno elevado al número dos",
           "Ninguna de las respuestas es correcta"
        ],
        isCorrect : function (option){
            return option === this.options[1];
        }
    },
    {
        pregunta : "¿Qué es un paradigma?",
        options : [
            "Conjunto de ideas para la contrucción de un programa",
            "Define el problema y el mismo busca la solución mediante razonamiento lógico",
            "La forma en que establece comunicación e intercambia mensajes",
            "Un proceso  para extraer las características esenciales de un objeto"
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    },
    {
        pregunta : `¿Cuál es el resultado de la operación?
        <pre>
    System.out.println(2+6<<1);
        </pre>`,
        options : [
            "16",
            "14",
            "12",
            "8"
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    },
    {
        pregunta : `¿Cuál es la sintaxis correcta para declarar una variable en Java?`,
        options : [
            "var variableName;",
            "variableName;",
            "int variableName;",
            "String variableName;"
        ],
        isCorrect : function (option){
            return option === this.options[2];
        }
    },
    {
        pregunta : `¿Qué es una clase en Java?`,
        options : [
            "Una colección de métodos y variables",
            "Una variable global",
            "Un conjunto de instrucciones",
            "Una función"
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    },
    {
        pregunta : `¿Qué es un objeto en Java?`,
        options : [
            "Una variable global",
            "Una instancia de una clase",
            "Un conjunto de instrucciones",
            "Una función"
        ],
        isCorrect : function (option){
            return option === this.options[1];
        }
    },
    {
        pregunta : `¿Cómo se utiliza la palabra clave "extends" en Java?`,
        options : [
            "Para crear una nueva clase a partir de una clase existente",
            "Para importar métodos de otra clase",
            "Para crear una variable global",
            "Para crear un objeto"
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    },
    {
        pregunta : `¿Qué es una excepción en Java?`,
        options : [
            "Una condición de error que detiene la ejecución del programa",
            "Una variable global",
            "Un conjunto de instrucciones",
            "Una función"
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    },
    {
        pregunta : `¿Cómo se utiliza la palabra clave "try" en Java?`,
        options : [
            "Para ejecutar un bloque de código y detectar posibles excepciones",
            "Para importar métodos de otra clase",
            "Para crear una variable global",
            "Para crear un objeto"
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    },
    {
        pregunta : `¿Qué es una interfaz en Java?`,
        options : [
            "Un conjunto de métodos que deben ser implementados por una clase",
            "Una clase abstracta",
            "Un conjunto de instrucciones",
            "Una función"
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    },
    {
        pregunta : `¿Cómo se utiliza la palabra clave "implements" en Java?`,
        options : [
            "Para indicar que una clase implementa una interfaz",
            "Para importar métodos de otra clase",
            "Para crear una variable global",
            "Para crear un objeto",
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    },
    {
        pregunta : `¿Qué es una sobrecarga de método en Java?`,
        options : [
            "Una técnica para reutilizar el nombre de un método con diferentes parámetros",
            "Una clase abstracta",
            "Un conjunto de instrucciones",
            "Una función"
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    },
    {
        pregunta : `¿Qué es una sobreescritura de método en Java?`,
        options : [
            "Una técnica para reemplazar un método en una clase hija con un comportamiento diferente",
            "Una clase abstracta",
            "Un conjunto de instrucciones",
            "Una función"
        ],
        isCorrect : function (option){
            return option === this.options[0];
        }
    }
]
export {javaq};