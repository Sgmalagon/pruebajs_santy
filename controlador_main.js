
class ControladorVista {
    static agregarPersonaATabla(persona) {
        const tabla = document.getElementById("tdatos");
        tabla.innerHTML += persona.obtenerFilaHTML();
    }
}

var idsAgregados = []; 
function crearobjecto() {
   
   
    const id = document.getElementById("cc").value;
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("email").value;
    const contraseña = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;

    if (idsAgregados.includes(cc)) {
        alert("ID duplicado. No se pueden agregar datos duplicados.");
        return; 
    }
    idsAgregados.push(cc);

   
    const nuevaPersona = new Persona(id, nombre, correo, contraseña, rol);

    
    ControladorVista.agregarPersonaATabla(nuevaPersona);
}
