import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModedrivenComponent } from './modedriven.component';

describe('ModedrivenComponent', () => {
  let component: ModedrivenComponent;
  let fixture: ComponentFixture<ModedrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModedrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModedrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
