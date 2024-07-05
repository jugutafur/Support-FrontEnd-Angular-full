import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptIntermedioComponent } from './java-script-intermedio.component';

describe('JavaScriptIntermedioComponent', () => {
  let component: JavaScriptIntermedioComponent;
  let fixture: ComponentFixture<JavaScriptIntermedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaScriptIntermedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaScriptIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
