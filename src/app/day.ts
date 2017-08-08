import { Info } from './info';

export class Day {
  start : string;
  end : string;
  dayNumber : number;
  info : Info;
  funFacts : string[];

  public toString = () : string => {
    return `Day. Start: ${this.start}; End:${this.end}, dayNumber: ${this.dayNumber}`;
  }
}
