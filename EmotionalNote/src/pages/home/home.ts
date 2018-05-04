import { Component } from '@angular/core';
import { App ,ModalController, ActionSheetController} from 'ionic-angular';
import { NotePage } from '../note/note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {

  }

  showNoteDetail():void {
      let modal = this.modalCtrl.create(NotePage);
      modal.present();
  }

}
