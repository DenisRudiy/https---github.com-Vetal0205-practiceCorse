import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourDutyComponent } from './hour-duty.component';

describe('HourDutyComponent', () => {
  let component: HourDutyComponent;
  let fixture: ComponentFixture<HourDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourDutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
