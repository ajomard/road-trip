import { Component, OnInit } from '@angular/core';
import { DayMenu } from '../day-menu';

import { DayService } from '../day.service';

const DAYS : DayMenu[] = [

]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [DayService]
})
export class MenuComponent implements OnInit {
  generals = {
    title : "Général",
    links : [
        {
          title : "Accueil"
        }
    ]
  };
  days = {
    title : "Etapes",
    days : []
  };

  constructor(
    private dayService : DayService
  ) { }

  ngOnInit() {
    this.dayService.getDays().then(res => this.days.days = res);
  }

}
