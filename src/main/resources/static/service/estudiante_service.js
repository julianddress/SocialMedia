// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise#par%C3%A1metro. 


// POR DEFECTO TOMA EL METODO GET
const listaEstudiantes = async () => {
    try {
        const respuesta = await fetch("http://localhost:9000/api/estudiantes");
        const datos = await respuesta.json();
        console.log(datos)
        return datos;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const registrarEstudiante = (nombre, apellido, correo) => {

    return fetch("http://localhost:9000/api/crea", {
            method: "POST",
            // ESTANDAR DEL TIPO DE ARCHIVO QUE EL SERVIDOR VA A RECIBIR
            headers: {
                "Content-Type": "application/json"
            },
            // OBJETO FORMATEADO A TEXT PARA HTTP
            body: JSON.stringify({nombre, apellido, correo})
        })
}

// NO NOS IMPORTA EL CONTENIDO
const eliminarEstudiante = async (id) => {
    try {
        const respuesta = await fetch(`http://localhost:9000/api/borra/${id}`, {
            method: "DELETE",
        });

        if (!respuesta.ok) {
            throw new Error('Error al eliminar el estudiante');
        }

        return respuesta;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


const detalleEstudiante = (id) => fetch(`http://localhost:9000/api/estudiante/${id}`).then( respuesta => respuesta.json())

const updateEstudiante = async (nombre, apellido, correo, id) => {
    
    try {
        const respuesta = await fetch(`http://localhost:9000/api/actualiza/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nombre, apellido, correo})
    })
        if (!respuesta.ok) {
            throw new Error('Error al editar el estudiante');
        }
        return respuesta;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const estudianteService = {

    // listaEstudiantes: listaEstudiantes 
    listaEstudiantes,
    registrarEstudiante,
    eliminarEstudiante,
    detalleEstudiante,
    updateEstudiante,
};


// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D.