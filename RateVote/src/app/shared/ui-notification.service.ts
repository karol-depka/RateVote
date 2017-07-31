import { Injectable } from '@angular/core';

@Injectable()
export class UiNotifyService {

  constructor() { }

  error(s: string) {
    window.alert(s);
  }
}
