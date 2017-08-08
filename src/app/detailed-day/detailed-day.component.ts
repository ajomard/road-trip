import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { DayMenu } from '../day-menu';
import { DayService } from '../day.service';

@Component({
  selector: 'app-detailed-day',
  templateUrl: './detailed-day.component.html',
  styleUrls: ['./detailed-day.component.css'],
  providers: [DayService]
})
export class DetailedDayComponent implements OnInit {
  //@Input()
  day : DayMenu;

  constructor(
    private dayService : DayService,
    private route : ActivatedRoute
  ){ }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dayService.getDay(+params.get('id')))
      .subscribe(day => this.day = day);
  }

}
