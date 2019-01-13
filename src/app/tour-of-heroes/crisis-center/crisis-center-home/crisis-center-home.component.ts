import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { CrisisService } from "src/app/tour-of-heroes/crisis-center/crisis.service";
@Component({
  selector: 'app-crisis-center-home',
  templateUrl: './crisis-center-home.component.html',
  styleUrls: ['./crisis-center-home.component.scss']
})
export class CrisisCenterHomeComponent implements OnInit {
crises: Crisis[];
  constructor(private crisisService: CrisisService) { }

  ngOnInit() {
    this.getCrises();
  }
getCrises() {
  this.crisisService.getCrises()
      .subscribe(crises => {
        this.crises = crises;
      });

}
}