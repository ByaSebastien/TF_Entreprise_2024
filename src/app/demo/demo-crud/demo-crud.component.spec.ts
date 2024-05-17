import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCrudComponent } from './demo-crud.component';

describe('DemoCrudComponent', () => {
  let component: DemoCrudComponent;
  let fixture: ComponentFixture<DemoCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoCrudComponent]
    });
    fixture = TestBed.createComponent(DemoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
