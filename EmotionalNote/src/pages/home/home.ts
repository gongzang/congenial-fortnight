import { Component } from '@angular/core';
import { App ,ModalController, ActionSheetController} from 'ionic-angular';
import { NotePage } from '../note/note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public appCtrl: App) {

  }

  showNoteDetail():void {
    this.appCtrl.getRootNav().setRoot(NotePage);
  }

}
