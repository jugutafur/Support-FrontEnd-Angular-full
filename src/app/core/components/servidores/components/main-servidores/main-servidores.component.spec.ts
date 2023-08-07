import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainServidoresComponent } from './main-servidores.component';

describe('MainServidoresComponent', () => {
  let component: MainServidoresComponent;
  let fixture: ComponentFixture<MainServidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainServidoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainServidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
