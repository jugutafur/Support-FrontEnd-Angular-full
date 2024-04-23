import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisDatosComponent } from './analis-datos.component';

describe('AnalisDatosComponent', () => {
  let component: AnalisDatosComponent;
  let fixture: ComponentFixture<AnalisDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
