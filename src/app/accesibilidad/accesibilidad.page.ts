import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardContent, IonImg, IonItem, IonLabel, IonCheckbox, IonSegment, IonSegmentButton, IonRadioGroup, IonRadio, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-accesibilidad',
  templateUrl: './accesibilidad.page.html',
  styleUrls: ['./accesibilidad.page.scss'],
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
    IonCardHeader,
    IonCardContent,
    IonImg,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonSegment,
    IonSegmentButton,
    IonRadioGroup,
    IonRadio,
    IonButton
  ]
})
export class AccesibilidadPage implements OnInit {

  constructor() { }

  ngOnInit() {}

}

