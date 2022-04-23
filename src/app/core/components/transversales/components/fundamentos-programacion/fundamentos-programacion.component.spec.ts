import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentosProgramacionComponent } from './fundamentos-programacion.component';

describe('FundamentosProgramacionComponent', () => {
  let component: FundamentosProgramacionComponent;
  let fixture: ComponentFixture<FundamentosProgramacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundamentosProgramacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentosProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
