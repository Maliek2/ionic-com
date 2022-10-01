import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://mail.adball.tech')">
        <ion-label>Learn Ionic</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://www.adball.tech/docs/')">
        <ion-label>Documentation</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://blog.adball.online')">
        <ion-label>Showcase</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://www.adball.online/')">
        <ion-label>Repo</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
