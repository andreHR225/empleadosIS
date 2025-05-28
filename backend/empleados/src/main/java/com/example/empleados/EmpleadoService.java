package com.example.empleados;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoService {

    @Autowired
    private EmpleadoRepository repository;

    public List<Empleado> listar() {
        return repository.findAll();
    }

    public Optional<Empleado> buscar(String id) {
        return repository.findById(id);
    }

    public Empleado guardar(Empleado empleado) {
        return repository.save(empleado);
    }

    public void eliminar(String id) {
        repository.deleteById(id);
    }
}
