import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonButton, IonChip, IonLabel, IonList, IonItem, IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { schoolOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    IonButton, IonChip, IonLabel, IonList, IonItem, IonIcon
  ],
})
export class Tab2Page {
  mostrarFormacion = false;

  constructor() {
    addIcons({ schoolOutline });
  }
}