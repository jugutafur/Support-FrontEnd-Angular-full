import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJavascriptComponent } from './test-javascript.component';

describe('TestJavascriptComponent', () => {
  let component: TestJavascriptComponent;
  let fixture: ComponentFixture<TestJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestJavascriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
