import { bootstrapApplication } from '@angular/platform-browser';
import { EmpleadosComponent } from './app/empleados/empleados.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

bootstrapApplication(EmpleadosComponent, {
  providers: [
    importProvidersFrom(HttpClientModule, FormsModule)
  ]
});
