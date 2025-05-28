import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-empleados',
  standalone: true,
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  imports: [CommonModule, FormsModule]
})
export class EmpleadosComponent {
  empleados: Empleado[] = [];
    mensaje: string = '';
  tipoMensaje: 'exito' | 'error' = 'exito';

  empleado: Empleado = {
    idempleado: '',
    nombre: '',
    direccion: '',
    telefono: '',
    nit: '',
    correo: '',
    dpi: '',
    finicio: '',
    ffin: '',
    observaciones: '',
    estatus: 'A',
    rol_id: '',
    adiciono: 'admin',
    fecha_adiciono: '',
    modifico: '',
    fecha_modificacion: ''
   

  };

  constructor(private empleadoService: EmpleadoService) {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.listar().subscribe((data: Empleado[]) => {
      this.empleados = data;
    });
  }

 guardarEmpleado(): void {
  this.empleadoService.guardar(this.empleado).subscribe({
    next: () => {
      this.obtenerEmpleados();
      this.limpiarFormulario();
      this.mostrarMensaje('Empleado registrado/actualizado correctamente.', 'exito');
    },
    error: () => {
      this.mostrarMensaje('Ocurrió un error al guardar el empleado.', 'error');
    }
  });
}


  editarEmpleado(emp: Empleado): void {
    this.empleado = { ...emp };
  }

 eliminarEmpleado(id: string): void {
  const confirmacion = window.confirm('¿Estás seguro que deseas eliminar este empleado?');
  if (confirmacion) {
    this.empleadoService.eliminar(id).subscribe({
      next: () => {
        this.obtenerEmpleados();
        this.mostrarMensaje('Empleado eliminado correctamente.', 'exito');
      },
      error: () => {
        this.mostrarMensaje('Ocurrió un error al eliminar el empleado.', 'error');
      }
    });
  }
}


limpiarFormulario(): void {
  this.empleado = {
    idempleado: '',
    nombre: '',
    direccion: '',
    telefono: '',
    nit: '',
    correo: '',
    dpi: '',
    finicio: '',
    ffin: '',
    observaciones: '',
    estatus: 'Activo',
    rol_id: '',
    adiciono: '',
    fecha_adiciono: '',
    modifico: '',
    fecha_modificacion: ''
    
  };

  
  const formRef = document.querySelector('form') as HTMLFormElement;
  if (formRef) formRef.reset();
}
mostrarMensaje(msg: string, tipo: 'exito' | 'error') {
  this.mensaje = msg;
  this.tipoMensaje = tipo;

  setTimeout(() => {
    this.mensaje = '';
  }, 4000); 
}

}
