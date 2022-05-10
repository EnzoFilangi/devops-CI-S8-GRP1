import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuleCardComponent } from './formule-card.component';

describe('FormuleCardComponent', () => {
  let component: FormuleCardComponent;
  let fixture: ComponentFixture<FormuleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
