const preguntas = [{
        id: 1,
        categoria: "general",
        titulo: "¿Cuántos años  tarda en crecer un árbol de aguacate y dar fruto?",

        opcionA: "6-7 ",
        opcionB: "3-2 ",
        opcionC: "3-7 ",
        opcionD: "5-10 ",
        correcta: "d"
    },
    {
        id: 2,
        categoria: "general",
        titulo: "¿Cuál es el lugar más frío de la tierra?",

        opcionA: "Antartida",
        opcionB: "Japon ",
        opcionC: "Canada",
        opcionD: "Australia",
        correcta: "a"
    },
    {
        id: 3,
        categoria: "general",
        titulo: "¿Quién escribió La Odisea?",

        opcionA: "Edgar Allan Poe",
        opcionB: "Homero",
        opcionC: "Miguel de Cervantes",
        opcionD: "Federico García Lorca",
        correcta: "b"
    },
    {
        id: 4,
        categoria: "general",
        titulo: "¿En qué continente está Colombia",

        opcionA: "Asia",
        opcionB: "Europa",
        opcionC: "Africa",
        opcionD: " América",
        correcta: "d"
    },
    {
        id: 5,
        categoria: "general",
        titulo: "¿Qué cantidad de huesos en el cuerpo humano?",

        opcionA: "180",
        opcionB: "220",
        opcionC: "206",
        opcionD: "98",
        correcta: "c"
    },
    {
        id: 6,
        categoria: "matematicas",
        titulo: "¿Cuál es el número de la suerte más popular entre el 1 y el 9?",

        opcionA: "1",
        opcionB: "9",
        opcionC: "7",
        opcionD: "8",
        correcta: "c"
    },
    {
        id: 7,
        categoria: "matematicas",
        titulo: "¿Cuántos milímetros hay en un litro?",

        opcionA: "1000",
        opcionB: "10000",
        opcionC: "1200",
        opcionD: "1450",
        correcta: "a"
    },
    {
        id: 8,
        categoria: "matematicas",
        titulo: "¿Cuántas libras lleva un kilo?",

        opcionA: "245865",
        opcionB: "100000",
        opcionC: "220462",
        opcionD: "85841",
        correcta: "c"
    },
    {
        id: 9,
        categoria: "matematicas",
        titulo: "¿cuantos kilos lleva un bulto de papa?",

        opcionA: "60-65",
        opcionB: "80-90",
        opcionC: "55-60",
        opcionD: "45-55",
        correcta: "a"
    },
    {
        id: 10,
        categoria: "matematicas",
        titulo: "¿Cómo se llama también el perímetro de un círculo?",

        opcionA: "circunferencia",
        opcionB: "ovalo",
        opcionC: "radio",
        opcionD: "pi",
        correcta: "a"
    },
    {
        id: 11,
        categoria: "geografia",
        titulo: "¿En qué parte del Continente Americano se encuentra Ubicada Colombia?",

        opcionA: "Norte America",
        opcionB: "Sur America",
        opcionC: "Centro America",
        opcionD: "Antillas",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "geografia",
        titulo: "¿Que países limitan con Colombia en el continente Suramericano?",

        opcionA: "Ecuador, Perú, Venezuela, Brasil",
        opcionB: "Venezuela, Ecuador, Perú, Bolivia",
        opcionC: "Ecuador,Perú, Chile, Venezuela",
        opcionD: "Brasil, Ecuador, Venezuela, Bolivia",
        correcta: "a"
    },
    {
        id: 13,
        categoria: "geografia",
        titulo: "¿Comó se llama el Sistema Montañoso que atraviesColombia de Norte a Sur?",

        opcionA: "Montañas Rocosas",
        opcionB: "Himalaya",
        opcionC: "Cordillera de los Andes",
        opcionD: "Sierra Nevada de Santa Marta",
        correcta: "c"
    },
    {
        id: 14,
        categoria: "geografia",
        titulo: "¿Cómo se llama el río más importante de Colombia?",

        opcionA: "Amazonas",
        opcionB: "Bogotá",
        opcionC: "Magdalena",
        opcionD: "Arauca",
        correcta: "c"
    },
    {
        id: 15,
        categoria: "geografia",
        titulo: "¿Comó se llaman las Regiones Naturales de Colombia?",

        opcionA: "Caribe, Andina, Pacifico, Orinoquía, Amazonia",
        opcionB: "Caribe, Pacifico, Central, Orinoquía, Amazonía",
        opcionC: "Oriental, Central, Occidental, Sur, Norte",
        opcionD: "Caribe, Central, Pacifico, Oriental, Amazoni",
        correcta: "a"
    },
    {
        id: 16,
        categoria: "fruta",
        titulo: "¿Cuál es la fruta con la semilla más grande?",

        opcionA: "mango",
        opcionB: "manzana",
        opcionC: "Lodoicea maldivica",
        opcionD: "sandia",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "fruta",
        titulo: "¿Cuál es la fruta que tiene más semillas?",

        opcionA: "El merey",
        opcionB: "Guanabana",
        opcionC: "melon",
        opcionD: "uvas pasa",
        correcta: "a"
    },
    {
        id: 18,
        categoria: "fruta",
        titulo: "¿Cuál es la fruta más dulce en el mundo?",

        opcionA: "El merey",
        opcionB: "Los dátiles",
        opcionC: "lulo",
        opcionD: "pera",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "fruta",
        titulo: "¿¿Cuál de estas frutas tiene más vitamina c??",

        opcionA: "kiwi",
        opcionB: "naranja",
        opcionC: "banano",
        opcionD: "breva",
        correcta: "a"
    },
    {
        id: 20,
        categoria: "fruta",
        titulo: "¿Qué fruta tiene más potasio?",

        opcionA: "papaya",
        opcionB: "ciruela",
        opcionC: "durazno",
        opcionD: "aguacate",
        correcta: "d"
    },
    {
        id: 21,
        categoria: "verdad o falso",
        titulo: "¿cual de estas opciones es la falsa?",

        opcionA: "el aguacate es una fruta",
        opcionB: "el banano contiene potacio",
        opcionC: "durazno no tiene semilla",
        opcionD: "la coco se da en clima caliente",
        correcta: "a"
    },
    {
        id: 22,
        categoria: "verdad o falso",
        titulo: "¿cual de estas opciones es la falsa?",

        opcionA: "el banano crece en un arbol",
        opcionB: "la sandia crece en un arbol",
        opcionC: "el aguacate crece en el suelo",
        opcionD: "ltodas son falsa",
        correcta: "a"
    },
    {
        id: 23,
        categoria: "verdad o falso",
        titulo: "¿cual de estas opciones es la falsa?",

        opcionA: "El aguacate es una fruta que tiene mucha grasa",
        opcionB: "el banano contiene potacio",
        opcionC: "Las verduras congeladas pierden su valor nutritivo",
        opcionD: "Comer zanahorias es bueno para la vista",
        correcta: "c"
    },
    {
        id: 24,
        categoria: "verdad o falso",
        titulo: "¿cual de estas opciones es la verdadera?",

        opcionA: "De igual beber un licuado que comer una pieza de fruta",
        opcionB: "Las espinacas son un alimento con mucho hierro",
        opcionC: "Las verduras congeladas pierden su valor nutritivo",
        opcionD: "la papa se da en clima caliente",
        correcta: "b"
    },
    {
        id: 25,
        categoria: "verdad o falso",
        titulo: "¿cual de estas opciones es la verdad?",

        opcionA: "Comer fruta de postre engorda",
        opcionB: "La fruta es mejor tomarla en zumo",
        opcionC: "durazno no tiene semilla",
        opcionD: "Comer plátano engordae",
        correcta: "d"
    },
    {
        id: 26,
        categoria: "verduras",
        titulo: "¿Cuál de las siguientes verduras es rica en vitamina c?",

        opcionA: "Lechuga",
        opcionB: "Zanahoria",
        opcionC: "Espinaca",
        opcionD: "Brócoli",
        correcta: "d"
    },
    {
        id: 27,
        categoria: "verduras",
        titulo: "¿Cuál de estas verduras es conocida por ser una buena fuente de hierro?",

        opcionA: "Calabaza",
        opcionB: "Espárragos",
        opcionC: "Espinaca",
        opcionD: "Pepino",
        correcta: "c"
    },
    {
        id: 28,
        categoria: "verduras",
        titulo: "¿Qué verdura es típicamente usada para hacer ensalada griega?",

        opcionA: "Tomate",
        opcionB: "Pepino",
        opcionC: "Calabacín",
        opcionD: "Berenjena",
        correcta: "b"
    },
    {
        id: 29,
        categoria: "verduras",
        titulo: "¿Cuál de las siguientes verduras es considerada un tubérculo?",

        opcionA: "Zanahoria",
        opcionB: "Cebolla",
        opcionC: "Patata",
        opcionD: "Brócoli",
        correcta: "c"
    },
    {
        id: 30,
        categoria: "verduras",
        titulo: "¿Cuál de estas verduras es conocida por su alto contenido de betacaroteno?",

        opcionA: "Espinaca",
        opcionB: "Zanahoria",
        opcionC: "Calabacín",
        opcionD: "Pimiento",
        correcta: "b"
    }

]


//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) {
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
} else {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);
console.log(preguntasCategoria);

function cargarSiguientePregunta(num) {
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    const botonesRespuesta = document.querySelectorAll(".opcion");

    botonesRespuesta.forEach(opcion => {
        opcion.removeEventListener("click", (e) => {});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    });

    botonesRespuesta.forEach(opcion => {
        opcion.addEventListener("click", agregarEventListenerBoton);
    });

    txtPuntaje.classList.remove("EFECTO");

}

cargarSiguientePregunta(numPreguntaActual);

function agregarEventListenerBoton(e) {
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if (e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta) {
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto"); {}
    } else {
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#" + preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }

    const botonesRespuesta = document.querySelectorAll(".opcion");

    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    })
}
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click", () => {
    numPreguntaActual++;
    if (numPreguntaActual <= 4) {
        cargarSiguientePregunta(numPreguntaActual);
    } else {
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));

        console.log(categoriasJugadasLS.length);
        if (parseInt(categoriasJugadasLS.length) < 6) {
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        } else {
            //lo mando a la pantalla final
            location.href = "final.html";
        }

    }

})