import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-note',
  templateUrl: 'note.html'
})
export class NotePage {

  constructor(public viewCtrl: ViewController) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
