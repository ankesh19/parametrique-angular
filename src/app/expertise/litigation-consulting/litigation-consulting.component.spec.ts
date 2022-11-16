import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigationConsultingComponent } from './litigation-consulting.component';

describe('LitigationConsultingComponent', () => {
  let component: LitigationConsultingComponent;
  let fixture: ComponentFixture<LitigationConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitigationConsultingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitigationConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
