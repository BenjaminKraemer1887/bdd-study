import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrepComponent } from './login-prep.component';

describe('LoginPrepComponent', () => {
  let component: LoginPrepComponent;
  let fixture: ComponentFixture<LoginPrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPrepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
