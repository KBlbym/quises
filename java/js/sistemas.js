const sistemasq = [
    {
        pregunta: "¿Qué es una CPU?",
        options: [
            "Una unidad de almacenamiento",
            "Un componente que ejecuta las instrucciones de un ordenador",
            "Una unidad de alimentación",
            "Una tarjeta gráfica"
        ],
        isCorrect: function(option) {
            return option ===  this.options[1];
        }
    },
    {
        pregunta: "¿Cuál es la función de la memoria RAM?",
        options: [
            "Almacenar archivos",
            "Procesar información",
            "Mostrar la información en pantalla",
            "Aumentar la velocidad del sistema"
        ],
        isCorrect: function(option) {
            return option ===  this.options[3];
        }
    },
    {
        pregunta: "¿Qué es una tarjeta gráfica?",
        options: [
            "Un componente que controla la entrada y salida de datos",
            "Un componente que mejora la calidad de imagen en un ordenador",
            "Una unidad de almacenamiento",
            "Una unidad de alimentación"
        ],
        isCorrect: function(option) {
            return option ===  this.options[1];
        }
    },
    {
        pregunta: "¿Cómo funciona un disco duro?",
        options: [
            "Utiliza la electricidad para almacenar datos",
            "Utiliza el aire para enfriar el sistema",
            "Utiliza luz para leer y escribir información",
            "Utiliza ondas de radio para comunicarse con otros dispositivos"
        ],
        isCorrect: function(option) {
            return option ===  this.options[0];
        }
    },
    {
        pregunta: "¿Qué es una tarjeta madre?",
        options: [
            "Una unidad de almacenamiento",
            "Un componente que conecta todos los demás componentes del ordenador",
            "Una unidad de alimentación",
            "Una tarjeta gráfica"
        ],
        isCorrect: function(option) {
            return option ===  this.options[1];
        }
    },
    {
        pregunta: "¿Qué es una unidad de almacenamiento externo?",
        options: [
            "Un dispositivo que se conecta al ordenador para almacenar datos",
            "Un componente que mejora la calidad de imagen en un ordenador",
            "Una unidad de alimentación",
            "Una tarjeta gráfica"
        ],
        isCorrect: function(option) {
            return option ===  this.options[0];
        }
    },
    {
    pregunta: "¿Cuáles son las diferencias entre una tarjeta de sonido integrada y una tarjeta de sonido dedicada?",
    options: [
    "Una tarjeta de sonido integrada está incorporada en la placa base, mientras que una dedicada es un componente adicional.",
    "Una unidad de almacenamiento",
    "Una tarjeta de sonido integrada solo admite audio estéreo, mientras que una dedicada admite audio surround.",
    "a y b son correctas"
    ],
    isCorrect: function(option) {
        return option ===  this.options[0];
    }
    },
    {
    pregunta: "¿Qué es una tarjeta de red?",
    options: [
    "Un componente que permite la conexión a Internet o a una red local",
    "Un componente que mejora la calidad de imagen en un ordenador",
    "Una unidad de almacenamiento",
    "Una unidad de alimentación"
    ],
    isCorrect: function(option) {
        return option ===  this.options[0];
    }
    },
    {
    pregunta: "¿Qué es una unidad de DVD o Blu-ray?",
    options: [
    "Un dispositivo que permite la lectura y grabación de discos DVD o Blu-ray",
    "Un componente que mejora la calidad de imagen en un ordenador",
    "Una unidad de almacenamiento",
    "Una unidad de alimentación"
    ],
    isCorrect: function(option) {
        return option ===  this.options[0];
    }
    },
    {
    pregunta: "¿Qué es una fuente de alimentación?",
    options: [
    "Un componente que suministra energía eléctrica al ordenador",
    "Un componente que mejora la calidad de imagen en un ordenador",
    "Una unidad de almacenamiento",
    "Un componente de refrigeración"
    ],
    isCorrect: function(option) {
        return option ===  this.options[0];
    }
    },
    {
    pregunta: "¿Qué es un procesador?",
    options: [
    "Un componente que se encarga de la comunicación entre dispositivos",
    "Un componente que ejecuta las instrucciones de un ordenador",
    "Un componente que controla la alimentación del equipo",
    "Un componente de refrigeración"
    ],
    isCorrect: function(option) {
        return option ===  this.options[1];
    }
    },
    {
    pregunta: "¿Cuál es la diferencia entre una CPU y una GPU?",
    options: [
    "Una CPU se encargade procesar instrucciones generales, mientras que una GPU está especializada en el procesamiento de gráficos y tareas relacionadas con la visualización.",
    "Una CPU es más potente que una GPU",
    "Una GPU solo se utiliza para jugar videojuegos",
    "Una CPU solo se utiliza para trabajar con aplicaciones de oficina"
    ],
    isCorrect: function(option) {
        return option ===  this.options[0];
    }
    },
    {
    pregunta: "¿Qué es una tarjeta de expansión?",
    options: [
    "Un componente que se conecta a la placa base para agregar más funcionalidades al ordenador",
    "Un componente que mejora la calidad de imagen en un ordenador",
    "Una unidad de almacenamiento",
    "Una unidad de alimentación"
    ],
    isCorrect: function(option) {
        return option ===  this.options[0];
    }
    },
    {
    pregunta: "¿Qué es una unidad de almacenamiento interno?",
    options: [
    "Un componente que almacena datos dentro del ordenador, como un disco duro o una unidad de estado sólido",
    "Un dispositivo externo que se conecta al ordenador para almacenar datos",
    "Una unidad de alimentación",
    "Un componente de refrigeración"
    ],
    isCorrect: function(option) {
        return option ===  this.options[0];
    }
    },
    {
    pregunta: "¿Qué es una tarjeta de video?",
    options: [
    "Un componente que se encarga de generar la imagen en pantalla y mejorar la calidad gráfica",
    "Un componente que mejora la calidad de sonido en un ordenador",
    "Una unidad de almacenamiento",
    "Una unidad de alimentación"
    ],
    isCorrect: function(option) {
        return option ===  this.options[0];
    }
    }
]
export {sistemasq};
