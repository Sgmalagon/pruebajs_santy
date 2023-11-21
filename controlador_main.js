var personas = [];
class ControladorVista {
    static agregarPersonaATabla(persona) {
        const tabla = document.getElementById("tdatos");
        tabla.innerHTML += persona.obtenerFilaHTML();
        guardarEnLocalStorage();
        
      
    }
}
var idsAgregados = [];

function crearobjecto() {
    const id = document.getElementById("cc").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("email").value;
    const contraseña = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;


    if (!id || !nombre || !correo || !contraseña || !rol) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    
    const idRepetido = personas.some(persona => persona.id === id);
    if (idRepetido) {
        alert("ID duplicado. No se pueden agregar datos duplicados.");
        return;
    }

    const nuevaPersona = new Persona(id, nombre, correo, contraseña, rol);

    personas.push(nuevaPersona);

    ControladorVista.agregarPersonaATabla(nuevaPersona);

    limpiarCampos();
}


function limpiarCampos() {
    const elementosDeEntrada = document.querySelectorAll('input, select');

    for (let i = 0; i < elementosDeEntrada.length; i++) {
        const elemento = elementosDeEntrada[i];

        if (elemento.type === 'checkbox' || elemento.type === 'radio') {
            elemento.checked = false;
        } else {
            elemento.value = '';
        }
    }
}


function eliminarFilaSeleccionada() {
    const id = document.getElementById("cc").value;

    const indice = personas.findIndex(persona => persona.id === id);

    if (indice !== -1) {
        personas.splice(indice, 1);

        guardarEnLocalStorage();

        const tabla = document.getElementById("tdatos");
        const fila = tabla.getElementsByTagName("tr");

        for (let i = 0; i < fila.length; i++) {
            const celda = fila[i].getElementsByTagName("td");

            if (celda.length > 0 && celda[0].innerText === id) {
                fila[i].remove();
                alert("Datos eliminados correctamente.");
                return;
            }
        }
    } else {
        alert("No se puede eliminar, el ID no existe.");
    }
}



function actualizarFilaSeleccionada() {
    const id = document.getElementById("cc").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("email").value;
    const contraseña = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;

    if (!id || !nombre || !correo || !contraseña || !rol) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const indice = personas.findIndex(persona => persona.id === id);

    if (indice !== -1) {
        personas[indice].nombre = nombre;
        personas[indice].correo = correo;
        personas[indice].contraseña = contraseña;
        personas[indice].rol = rol;

        guardarEnLocalStorage();

        const tabla = document.getElementById("tdatos");
        const fila = tabla.getElementsByTagName("tr");

        for (let i = 0; i < fila.length; i++) {
            const celda = fila[i].getElementsByTagName("td");
            if (celda.length > 0 && celda[0].innerText === id) {
                celda[1].innerText = nombre;
                celda[2].innerText = correo;
                celda[3].innerText = contraseña;
                celda[4].innerText = rol;
                alert("Datos actualizados correctamente.");
                return;
            }
        }
    } else {
        alert("No se puede actualizar, el ID no existe.");
    }
}



function guardarEnLocalStorage() {
    localStorage.setItem('personas', JSON.stringify(personas));
    
}

function updatetabla() {
   
    const id = document.getElementById("cc").value;

    if (idsAgregados.includes(id)) {
       
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("email").value;
        const contraseña = document.getElementById("password").value;
        const rol = document.getElementById("rol").value;

        const table = document.getElementById("tdatos");
        const rows = table.getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
           
            const cells = rows[i].getElementsByTagName("td");

            if (cells.length > 0 && cells[0].innerText === id) {
                
                cells[1].innerText = nombre;
                cells[2].innerText = correo;
                cells[3].innerText = contraseña;
                cells[4].innerText = rol;
                alert("Datos actualizados correctamente.");
                return;
            }
        }

        alert("Error al encontrar la fila para actualizar.");
    } else {
        
        alert("No se puede actualizar, el ID no existe.");
    }
}




function cargarDesdeLocalStorage() {
    const tabla = document.getElementById("tdatos");
    const personasStr = localStorage.getItem('personas');

    if (!personasStr) {
        alert("No hay datos almacenados en el localStorage.");
        return;
    }

    personas = JSON.parse(personasStr); 

    tabla.innerHTML = '<tr><th>DI</th><th>nombre</th><th>correo</th><th>contraseña</th><th>rol</th></tr>';

    for (let i = 0; i < personas.length; i++) {
        const persona = personas[i];
        const filaHTML = `<tr><td>${persona.id}</td><td>${persona.nombre}</td><td>${persona.correo}</td><td>${persona.contraseña}</td><td>${persona.rol}</td></tr>`;
        tabla.innerHTML += filaHTML;
    }

    alert("Datos cargados correctamente.");
}

