import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../models/dog';

@Component({
  selector: 'app-dog-display',
  templateUrl: './dog-display.component.html',
  styleUrls: ['./dog-display.component.css']
})
export class DogDisplayComponent implements OnInit {
  dogs: Dog[] = [];
  constructor (private saveTheDogsService: DogService) {

  }

  getDogs(breed: string): void {
    this.saveTheDogsService.getDogs(breed).subscribe(data => this.dogs = data)
  }

  clear(){
    this.dogs = [];
  }

  ngOnInit(): void {
  }

}
