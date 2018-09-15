import { Component, OnInit } from '@angular/core';
import { AstrosService } from './../services/astros.service';
import { Person } from '../person';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {

  people: Person[] = [];
  total = 0;

  constructor(
    private astrosService: AstrosService
  ) { }

  ngOnInit() {
    this.getAstros();
  }

  getAstros() {
    this.astrosService
      .getAstros()
      .subscribe((res: any) => {
        this.people = res.people;
        this.total = res.number;
      });
  }

}
