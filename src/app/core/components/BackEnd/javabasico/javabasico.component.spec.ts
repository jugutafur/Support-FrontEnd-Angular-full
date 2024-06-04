import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JAVABasicoComponent } from './javabasico.component';

describe('JAVABasicoComponent', () => {
  let component: JAVABasicoComponent;
  let fixture: ComponentFixture<JAVABasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JAVABasicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JAVABasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
