import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateFinanceComponent } from './corporate-finance.component';

describe('CorporateFinanceComponent', () => {
  let component: CorporateFinanceComponent;
  let fixture: ComponentFixture<CorporateFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
