const inputTarea = document.getElementById('tarea');
const boton = document.getElementById('boton');
const listaTareas = document.getElementById('tareas');

boton.addEventListener('click', function () {
    agregarTarea();
});

function agregarTarea() {
    let tareaTexto = inputTarea.value.trim();

    if (tareaTexto !== "") {
        // Crear elementos HTML para la nueva tarea
        const nuevaTareaDiv = document.createElement('div');
        nuevaTareaDiv.classList.add('row', 'fila'); // Agregar 'mi-otra-clase' aquí

        const hechoNoHechoDiv = document.createElement('div');
        hechoNoHechoDiv.classList.add('col-md-3');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Agregar evento para manejar cambios en el estado del checkbox
        checkbox.addEventListener('change', function () {
            actualizarEstiloCheckbox(checkbox, textoActividad);
        });

        hechoNoHechoDiv.appendChild(checkbox);
        nuevaTareaDiv.appendChild(hechoNoHechoDiv);

        const actividadDiv = document.createElement('div');
        actividadDiv.classList.add('col-md-6'); // Cambiado de 9 a 6

        const textoActividad = document.createElement('p');
        textoActividad.textContent = tareaTexto;

        actividadDiv.appendChild(textoActividad);
        nuevaTareaDiv.appendChild(actividadDiv);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
      </svg>`;
        botonEliminar.classList.add('col-md-3'); // Agregar clases de Bootstrap

        // Agregar evento para manejar el clic del botón de eliminación
        botonEliminar.addEventListener('click', function () {
            eliminarTarea(nuevaTareaDiv);
        });

        nuevaTareaDiv.appendChild(botonEliminar);

        // Agregar la nueva tarea al contenedor de tareas
        listaTareas.appendChild(nuevaTareaDiv);

        // Limpiar el campo de texto después de agregar la tarea
        inputTarea.value = '';
    }
}

function actualizarEstiloCheckbox(checkbox, textoActividad) {
    // Verificar si el checkbox está marcado
    if (checkbox.checked) {
        // Aplicar estilos cuando está marcado
        textoActividad.style.textDecoration = 'line-through';
        textoActividad.style.opacity = '0.5';
    } else {
        // Quitar estilos cuando está desmarcado
        textoActividad.style.textDecoration = 'none';
        textoActividad.style.opacity = '1';
    }
}

function eliminarTarea(tareaDiv) {
    // Eliminar la tarea del DOM
    listaTareas.removeChild(tareaDiv);
}
