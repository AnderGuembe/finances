import { CommonModule, NgForOf } from "@angular/common";
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../model/category.model';
import { CapitalizePipe } from "../../pipes/capitalize.pipe";
import { MovementService } from "../../services/movement.service";
import { Movement } from "../../model/movement.model";

@Component({
  selector: 'app-add-movement-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,
    MatFormFieldModule, MatDatepickerModule, MatOptionModule,
    MatSelectModule, MatInputModule, MatDialogModule, MatButtonModule, MatIconModule, NgForOf,
    CapitalizePipe],
  templateUrl: './add-movement-dialog.component.html',
  styleUrl: './add-movement-dialog.component.scss'
})
export class AddMovementDialogComponent {

  categories$!: Observable<Category[]>;

  addMovementForm: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.min(0)]),
    date: new FormControl(new Date(), Validators.required),
    category: new FormControl('', Validators.required)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: { isDeposit: boolean },
    private readonly categoryService: CategoryService,
    private readonly movementService: MovementService,
    private readonly dialogRef: MatDialogRef<AddMovementDialogComponent>) {
      this.categories$ = this.categoryService.getCategories();
  }

  getTitle(): string {
    return this.data.isDeposit ? 'Add Income' : 'Add Expense';
  }

  addMovement(): void {
    if (this.addMovementForm.valid) {
      const params: Movement = {...this.addMovementForm.value,
        category: { id: this.addMovementForm.value.category},
        isDeposit: this.data.isDeposit
      };
      this.movementService.createMovement(params as Movement).subscribe(a => {
        this.dialogRef.close(a);
      });
    }
  }

}
