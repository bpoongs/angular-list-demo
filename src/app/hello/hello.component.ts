import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  // string interpolation {{ }} - one way binding
  // property binding [] - one way binding
  // event binding
  // two way binding using ngModel

  movieName = 'Avengers The end game';
  displayMovieName = '';
  toggleMovieName = '';
  display = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMovie(){
    this.displayMovieName = 'Harry Potter and the prisoner of Azkaban';
  }

  showToggleMovie(){
    this.display = !this.display;
    if(this.display){
      this.toggleMovieName = 'X Men First Class';
    }
    else{
      this.toggleMovieName = '';
    }
  }
}
