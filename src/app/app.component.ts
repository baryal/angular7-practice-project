import { Component , OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'the Angular 7 practice project!!';

  constructor(private router:Router){}

  ngOnInit(){

  }

  onTourOfHeroesButtonClick() {
    this.router.navigate(['/tour-of-heroes']);
    
  }
  onInvoiceAttestationClick(){
    this.router.navigate(['/invoice']);
  }
  onStarWarsClick(){
    this.router.navigate(['/starwars']);
  }
  onOthersClick(){
    this.router.navigate(['/others']);

  }
  }

