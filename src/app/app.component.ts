import { Component } from '@angular/core';
import { BasicComponent } from './basic/basic.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [BasicComponent]
})
export class AppComponent {
  title = 'sheet';
}
