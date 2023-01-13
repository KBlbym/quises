const questions = [
    
    {
        pregunta : `¿Cual es el resultado del siguiente programa?<pre class="pre-scrollable">int i=1;
        int j=2;
        int k=3;
        int m=2;
        System.out.println ((j &gt;= i) || (k == m));</pre>`,
        options : [
            "true",
            "false",
            "undefined",
            "Da error de compilación"
        ],
        correct : function (){
            return this.options[0];
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
        correct : function (){
            return this.options[1];
        }
    }
]
for (const iterator of questions) {
    console.log(iterator);
    console.log(iterator.correct());
    
}
