import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app',
  templateUrl: 'app.html',
  styleUrls: ['app.scss']
})
export class AppComponent {
  date = new FormControl(new Date())
  serializedDate = new FormControl((new Date()).toISOString())
}
