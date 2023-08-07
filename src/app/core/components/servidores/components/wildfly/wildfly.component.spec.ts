import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildflyComponent } from './wildfly.component';

describe('WildflyComponent', () => {
  let component: WildflyComponent;
  let fixture: ComponentFixture<WildflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildflyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
