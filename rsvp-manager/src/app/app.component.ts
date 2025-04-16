import { Component } from '@angular/core';
import { RsvpManagerComponent } from './components/rsvp-manager/rsvp-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RsvpManagerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rsvp-manager';
}
