import { Component, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'map',
  templateUrl: 'map.html',
})
export class ExampleComponent {
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;

  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };
}

import { Component } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss'],
})
export class ExampleComponent {
  result: string;

  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Maliek News',
      subHeader: 'Maliek News',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }
}
