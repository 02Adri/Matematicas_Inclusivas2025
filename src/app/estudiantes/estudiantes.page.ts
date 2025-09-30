import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonItem, IonLabel, IonInput, IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonItem, IonLabel, IonInput, IonButton
  ]
})
export class EstudiantesPage implements OnInit {

  form: FormGroup;
  estudiantes: any[] = [];
  searchCode: string = '';
  resultado: any = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      Nombre_Estudiante: [''],
      Edad: [''],
      Codigo_Estudiante: [''],
      Proceso_Resultados: ['']
    });
  }

  ngOnInit() {}

  crear() {
    const nuevo = this.form.value;
    if (this.estudiantes.find(e => e.Codigo_Estudiante === nuevo.Codigo_Estudiante)) {
      alert('⚠️ Ya existe un estudiante con este código');
      return;
    }
    this.estudiantes.push(nuevo);
    this.form.reset();
    alert('✅ Estudiante creado correctamente');
  }

  actualizar() {
    const datos = this.form.value;
    const idx = this.estudiantes.findIndex(e => e.Codigo_Estudiante === datos.Codigo_Estudiante);
    if (idx > -1) {
      this.estudiantes[idx] = datos;
      this.form.reset();
      alert('🔄 Estudiante actualizado');
    } else {
      alert('❌ No se encontró el estudiante');
    }
  }

  buscar() {
    this.resultado = this.estudiantes.find(e => e.Codigo_Estudiante === this.searchCode) || null;
    if (!this.resultado) {
      alert('⚠️ No se encontró estudiante con ese código');
    }
  }

  eliminar() {
    if (!this.resultado) return;
    this.estudiantes = this.estudiantes.filter(e => e.Codigo_Estudiante !== this.resultado.Codigo_Estudiante);
    this.resultado = null;
    alert('🗑️ Estudiante eliminado');
  }

  // 🚀 Función para navegar a Home
  goHome() {
    this.router.navigateByUrl('/home');
  }
}

