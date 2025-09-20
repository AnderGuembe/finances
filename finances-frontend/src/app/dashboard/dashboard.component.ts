import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { MovementListComponent } from "./movement-list/movement-list.component";
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddMovementDialogComponent } from './add-movement-dialog/add-movement-dialog.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule,
    MovementListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(private readonly dialog: MatDialog ) {}
}
