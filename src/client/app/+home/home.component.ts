import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { NameListService } from '../shared/index';
import { TranslatePipe } from 'ng2-translate/ng2-translate';


@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  pipes: [TranslatePipe]
})

export class HomeComponent {

  new_name:string;

  constructor(public nameListService: NameListService) {

    // LODASH USAGE

    //console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));

  }

  add_name(): boolean {
    this.nameListService.add(`${this.new_name}`);
    this.new_name = '';
    return false;
  }

}
