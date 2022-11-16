import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicConsultingComponent } from './strategic-consulting.component';

describe('StrategicConsultingComponent', () => {
  let component: StrategicConsultingComponent;
  let fixture: ComponentFixture<StrategicConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategicConsultingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategicConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
