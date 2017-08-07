import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedDayComponent } from './detailed-day.component';

describe('DetailedDayComponent', () => {
  let component: DetailedDayComponent;
  let fixture: ComponentFixture<DetailedDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
