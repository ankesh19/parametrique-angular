import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicConsultingComponent } from './economic-consulting.component';

describe('EconomicConsultingComponent', () => {
  let component: EconomicConsultingComponent;
  let fixture: ComponentFixture<EconomicConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicConsultingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomicConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
