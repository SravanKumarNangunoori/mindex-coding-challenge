import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeletmodalComponent } from './edit-deletmodal.component';

describe('EditDeletmodalComponent', () => {
  let component: EditDeletmodalComponent;
  let fixture: ComponentFixture<EditDeletmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeletmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeletmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
