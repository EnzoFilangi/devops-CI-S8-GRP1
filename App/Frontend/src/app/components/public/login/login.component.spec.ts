import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import {AuthenticatorService} from "../../../services/authenticator/authenticator.service";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let mockAuthenticatorService = jasmine.createSpyObj(['authenticate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: AuthenticatorService, useValue: mockAuthenticatorService}
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
