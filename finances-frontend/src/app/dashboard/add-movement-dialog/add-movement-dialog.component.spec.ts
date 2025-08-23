import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovementDialogComponent } from './add-movement-dialog.component';

describe('AddMovementDialogComponent', () => {
  let component: AddMovementDialogComponent;
  let fixture: ComponentFixture<AddMovementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMovementDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMovementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
