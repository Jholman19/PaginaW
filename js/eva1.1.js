// Función para manejar el inicio del cuestionario
document.getElementById('inicio-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener nombre y cargo desde el formulario
    const nombre = document.getElementById('nombre').value;
    const cargo = document.getElementById('cargo').value;

    // Guardar nombre y cargo en sessionStorage para usar en los resultados
    sessionStorage.setItem('nombreUsuario', nombre);
    sessionStorage.setItem('cargoUsuario', cargo);

    // Ocultar sección de inicio y mostrar sección de encuesta
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('encuesta').classList.remove('hidden');

    // Mostrar nombre y cargo en la encuesta
    document.getElementById('nombre-encuesta').textContent = nombre;
    document.getElementById('cargo-encuesta').textContent = cargo;
});

// Función para manejar el envío del cuestionario
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Definir las respuestas correctas
    const respuestasCorrectas = {
        pregunta1: 'Vamos a detener la carga y reorganizar los bultos para equilibrar el peso',
        pregunta2: 'Identifiquemos las cajas dañadas y documentemos los daños. Luego, informaremos al proveedor para tomar las medidas necesarias',
        pregunta3: 'Vamos a organizar una reunión rápida para ajustar los horarios de descarga y asegurarnos de que todos estén informados',
        pregunta4: 'Escuchar activamente a ambos vendedores, permitiéndoles explicar su versión del conflicto y entender las razones detrás de sus reclaos'
    };

    // Obtener las respuestas seleccionadas
    const respuestas = {
        pregunta1: document.querySelector('input[name="pregunta1"]:checked').value,
        pregunta2: document.querySelector('input[name="pregunta2"]:checked').value,
        pregunta3: document.querySelector('input[name="pregunta3"]:checked').value,
        pregunta4: document.querySelector('input[name="pregunta4"]:checked').value
    };

    // Calcular el puntaje
    let puntaje = 0;
    if (respuestas.pregunta1 === respuestasCorrectas.pregunta1) {
        puntaje++;
    }
    if (respuestas.pregunta2 === respuestasCorrectas.pregunta2) {
        puntaje++;
    }
    if (respuestas.pregunta3 === respuestasCorrectas.pregunta3) {
        puntaje++;
    }
    if (respuestas.pregunta4 === respuestasCorrectas.pregunta4) {
        puntaje++;
    }

    // Determinar el color y el mensaje del resultado
    let color;
    let resultadoTexto;

    // Obtener nombre y cargo desde sessionStorage
    const nombreUsuario = sessionStorage.getItem('nombreUsuario');
    const cargoUsuario = sessionStorage.getItem('cargoUsuario');

    if (puntaje === 4) {
        color = ['#3F448C', '#3F448C', '#3F448C', '#3F448C']; // azul
        resultadoTexto = `Competencia alcanzada: ¡Excelente, ${nombreUsuario}! Obtuviste todas las respuestas correctas `;

    } else if (puntaje >= 2) {
        color = ['#FFC107', '#FFC107', '#FFC107', '#FFC107']; // Amarillo
        resultadoTexto = `Competencia mayormente alcanzada: Bien hecho, ${nombreUsuario}. Tienes algunas respuestas correctas `;
    } else {
        color = ['#FFA500', '#FFA500', '#FFA500', '#FFA500']; // Rojo
        resultadoTexto = `Competencia no alcanzada: Puedes mejorar, ${nombreUsuario}. Intenta de nuevo `;
    }

    // Mostrar resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.classList.remove('hidden');
    document.getElementById('resultado-texto').textContent = resultadoTexto;

    // Dibujar gráfico circular
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                backgroundColor: color,
                data: [1, 1, 1, 1]

                // Datos ficticios, cada pregunta cuenta como 1
            }]
        },
        options: {
            responsive: false, // Desactivar la respuesta para controlar el tamaño manualmente
            maintainAspectRatio: false,
            legend: {
                position: 'right'
            },
            title: {
                display: true,
                text: 'Resultado del Cuestionario'
            },
            layout: {
                padding: {
                    top: 10,
                    bottom: 10,
                    left: 10,
                    right: 10
                }
            }
        }
    });

    // Ajustar el tamaño del canvas manualmente
    ctx.canvas.width = 200; // Ancho del canvas
    ctx.canvas.height = 200; // Alto del canvas
    ctx.canvas.position = 'center'

    // Limpiar sessionStorage después de mostrar resultados
    sessionStorage.removeItem('nombreUsuario');
    sessionStorage.removeItem('cargoUsuario');
});