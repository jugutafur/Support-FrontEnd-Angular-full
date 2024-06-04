import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaAvanzadoComponent } from './java-avanzado.component';

describe('JavaAvanzadoComponent', () => {
  let component: JavaAvanzadoComponent;
  let fixture: ComponentFixture<JavaAvanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaAvanzadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
