import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hey {{value}}</div>`,
})
export class AppComponent {
  value = 'There';
}
