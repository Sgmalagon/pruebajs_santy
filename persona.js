
class Persona {
    constructor(id, nombre, correo, contraseña, rol) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
        this.rol = rol;
    }

    obtenerFilaHTML() {
        return `<tr>
                    <td>${this.id}</td>
                    <td>${this.nombre}</td>
                    <td>${this.correo}</td>
                    <td>${this.contraseña}</td>
                    <td>${this.rol}</td>
                </tr>`;
    }
}
