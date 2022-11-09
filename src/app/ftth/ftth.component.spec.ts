import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtthComponent } from './ftth.component';

describe('FtthComponent', () => {
  let component: FtthComponent;
  let fixture: ComponentFixture<FtthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
