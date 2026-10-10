import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonButton, IonChip, IonLabel, IonList, IonItem, IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonChip, IonLabel, IonList, IonItem, IonIcon
  ],
})
export class Tab1Page {
  mostrarHabilidades = false;

  constructor() {
    addIcons({ locationOutline });
  }
}