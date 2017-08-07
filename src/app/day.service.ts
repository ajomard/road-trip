import { Injectable } from '@angular/core';
import { Day } from './day';
import { DAYS } from './mock-days'


@Injectable()
export class DayService {

  getDays() : Promise<Day[]>{
    return Promise.resolve(DAYS);
  }

  getDay(id : number) : Promise<Day>{
    return this.getDays()
      .then(days => days.find(day => day.dayNumber === id));
  }

}
