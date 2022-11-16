import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateRestructuringComponent } from './corporate-restructuring.component';

describe('CorporateRestructuringComponent', () => {
  let component: CorporateRestructuringComponent;
  let fixture: ComponentFixture<CorporateRestructuringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateRestructuringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateRestructuringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
