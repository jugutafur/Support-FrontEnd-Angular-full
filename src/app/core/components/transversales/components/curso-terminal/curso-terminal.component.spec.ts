import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTerminalComponent } from './curso-terminal.component';

describe('CursoTerminalComponent', () => {
  let component: CursoTerminalComponent;
  let fixture: ComponentFixture<CursoTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
