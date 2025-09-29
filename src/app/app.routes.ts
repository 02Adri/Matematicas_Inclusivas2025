import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
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


];

