import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginLoginPage } from './login-login.page';

describe('LoginLoginPage', () => {
  let component: LoginLoginPage;
  let fixture: ComponentFixture<LoginLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
