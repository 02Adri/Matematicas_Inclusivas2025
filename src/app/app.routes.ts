import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'estudiantes',  // <-- ruta por defecto cambia a estudiantes
    pathMatch: 'full',
  },
  {
    path: 'login-login',
    loadComponent: () => import('./pages/login-login/login-login.page').then(m => m.LoginLoginPage)
  },
  {
    path: 'lecciones',
    loadComponent: () => import('./lecciones/lecciones.page').then(m => m.LeccionesPage)
  },
  {
    path: 'minigame',
    loadComponent: () => import('./minigame/minigame.page').then( m => m.MinigamePage)
  },
  {
    path: 'accesibilidad',
    loadComponent: () => import('./accesibilidad/accesibilidad.page').then( m => m.AccesibilidadPage)
  },
  {
    path: 'estudiantes',
    loadComponent: () => import('./estudiantes/estudiantes.page').then( m => m.EstudiantesPage)
  },
];

 





