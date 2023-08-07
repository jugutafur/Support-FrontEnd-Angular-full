import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLogicComponent } from './web-logic.component';

describe('WebLogicComponent', () => {
  let component: WebLogicComponent;
  let fixture: ComponentFixture<WebLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebLogicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
