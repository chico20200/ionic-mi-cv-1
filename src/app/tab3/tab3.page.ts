import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  IonButton, IonChip, IonLabel, IonList, IonItem, IonIcon
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    IonButton, IonChip, IonLabel, IonList, IonItem, IonIcon
  ],
})
export class Tab3Page {
  mostrarFunciones = false;

  constructor() {
    addIcons({ checkmarkCircleOutline });
  }
}