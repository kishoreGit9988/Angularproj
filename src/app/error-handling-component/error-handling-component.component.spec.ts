import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingComponentComponent } from './error-handling-component.component';

describe('ErrorHandlingComponentComponent', () => {
  let component: ErrorHandlingComponentComponent;
  let fixture: ComponentFixture<ErrorHandlingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorHandlingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandlingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
