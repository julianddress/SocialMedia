package edu.unilibre.appweb.controlador;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.unilibre.appweb.modelo.Estudiante;
import edu.unilibre.appweb.repositorio.RepositorioEstudiante;

//HTTP://
@RestController
@RequestMapping("/api/")

public class ControladorEstudiante {
    @Autowired

    private RepositorioEstudiante repositorioEstudiante;

    //GET
    @GetMapping("/estudiantes")
    public List<Estudiante> traeEstudiantes(){
        return repositorioEstudiante.findAll();
    }
}
