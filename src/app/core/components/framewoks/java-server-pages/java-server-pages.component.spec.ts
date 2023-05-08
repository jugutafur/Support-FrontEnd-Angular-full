import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaServerPagesComponent } from './java-server-pages.component';

describe('JavaServerPagesComponent', () => {
  let component: JavaServerPagesComponent;
  let fixture: ComponentFixture<JavaServerPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaServerPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaServerPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
