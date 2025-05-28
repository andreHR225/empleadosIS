import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private url = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient) {}

  listar(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.url);
  }

  guardar(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.url, empleado);
  }

  actualizar(id: string, empleado: Empleado): Observable<Empleado> {
    return this.http.put<Empleado>(`${this.url}/${id}`, empleado);
  }

  eliminar(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
