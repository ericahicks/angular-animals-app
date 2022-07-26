import { Component } from '@angular/core';
import { DogService } from './dog.service';
import { Dog } from './models/dog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animals';
 
}
