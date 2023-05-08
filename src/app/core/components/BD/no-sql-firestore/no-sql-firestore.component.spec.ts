import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSqlFirestoreComponent } from './no-sql-firestore.component';

describe('NoSqlFirestoreComponent', () => {
  let component: NoSqlFirestoreComponent;
  let fixture: ComponentFixture<NoSqlFirestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSqlFirestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSqlFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
