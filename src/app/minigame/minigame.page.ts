import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardContent, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-minigame',
  templateUrl: './minigame.page.html',
  styleUrls: ['./minigame.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonImg
  ]
})
export class MinigamePage implements OnInit {
  showMascot = true;
  currentNumber: number | null = null;
  private counterInterval: any;

  ngOnInit() {
    // Mostrar la mascota 3 segundos
    setTimeout(() => {
      this.showMascot = false;
      this.startCounting();
    }, 3000);
  }

  startCounting() {
    let num = 1;
    this.currentNumber = num;

    this.counterInterval = setInterval(() => {
      num++;
      if (num > 10) {
        clearInterval(this.counterInterval);
        this.currentNumber = null; // fin del juego
      } else {
        this.currentNumber = num;
      }
    }, 1000);
  }
}
