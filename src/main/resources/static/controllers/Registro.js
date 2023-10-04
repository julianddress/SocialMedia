import { estudianteService } from "../service/estudiante_service.js"

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nombre = document.querySelector("[data-nombre]").value;
    const apellido = document.querySelector("[data-apellido]").value;
    const correo = document.querySelector("[data-email]").value;

    console.log(nombre, apellido, correo)

    estudianteService.registrarEstudiante(nombre, apellido, correo).then( () => {
        window.location.href = "/screens/Registro_completado.html";
    }).catch( err => {
        alert("Ocurrió un problema al registrar el estudiante")
        console.log(err)
    })
})

