import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodewarriorComponent } from './codewarrior.component';

describe('CodewarriorComponent', () => {
  let component: CodewarriorComponent;
  let fixture: ComponentFixture<CodewarriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodewarriorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodewarriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
