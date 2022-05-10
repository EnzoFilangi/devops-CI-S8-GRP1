import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouerServeurComponent } from './louer-serveur.component';

describe('LouerServeurComponent', () => {
  let component: LouerServeurComponent;
  let fixture: ComponentFixture<LouerServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LouerServeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LouerServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
