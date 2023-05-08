import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJavaComponent } from './test-java.component';

describe('TestJavaComponent', () => {
  let component: TestJavaComponent;
  let fixture: ComponentFixture<TestJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestJavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
