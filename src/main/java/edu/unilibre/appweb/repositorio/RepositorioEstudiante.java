package edu.unilibre.appweb.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import edu.unilibre.appweb.modelo.Estudiante;

public interface RepositorioEstudiante extends JpaRepository<Estudiante, Integer>{
    
}
