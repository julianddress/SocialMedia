import { estudianteService } from "../service/estudiante_service.js";

const form = document.querySelector("[data-form]");

// TRAEMOS LOS DATOS DE NUESTRO SERVER = JSON
const obtenerEstudiante = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id")

    if(id === null){
        window.location.href = "/screens/error.html"
    }

    const inputNombre = document.querySelector("[data-nombre]");
    const inputApellido = document.querySelector("[data-apellido]");
    const inputEmail = document.querySelector("[data-email]");

    try {
        const estudent = await estudianteService.detalleEstudiante(id)

        if(estudent.nombre && estudent.apellido && estudent.correo){
            inputNombre.value = estudent.nombre;
            inputApellido.value = estudent.apellido;
            inputEmail.value = estudent.correo;
        }else{
            throw new Error();
        }
        
    } catch (error) {
        window.location.href = "/screens/error.html"
    }
    
}

obtenerEstudiante();

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id")

    const inputNombre = document.querySelector("[data-nombre]").value;
    const inputApellido = document.querySelector("[data-apellido]").value;
    const inputEmail = document.querySelector("[data-email]").value;

    estudianteService.updateEstudiante(inputNombre, inputApellido, inputEmail, id).then( () => {
        window.location.href = "/screens/edicion_concluida.html";
    })
} )