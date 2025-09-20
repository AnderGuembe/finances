import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Movement } from '../../model/movement.model';
import { MovementService } from '../../services/movement.service';

import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Pageable, SORT_DATE_DESC } from '../../model/page.model';
import { map, Observable } from 'rxjs';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { MatCardModule } from '@angular/material/card';
import { AddMovementDialogComponent } from '../add-movement-dialog/add-movement-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movement-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule, MatPaginatorModule, MatCardModule, MatButtonModule,
    CapitalizePipe,
  ],
  templateUrl: './movement-list.component.html',
  styleUrl: './movement-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovementListComponent implements OnInit {
  @Input()
  isDeposit!: boolean;

  dataSource$!: Observable<Movement[]>;

  displayedColumns: string[] = ['description', 'amount', 'date', 'category'];

  totalElements: number = 0;
  pageSize: number = 15;
  currentPage: number = 0;

  constructor(private readonly movementService: MovementService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadMovements();
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadMovements();
  }

  addMovement(): void {
    this.dialog
      .open(AddMovementDialogComponent, { data: { isDeposit: this.isDeposit } })
      .afterClosed()
      .subscribe((movementCreated) => {
        console.log(movementCreated);
      });
  }

  private loadMovements() {
    const pageable: Pageable = {
      page: this.currentPage,
      size: this.pageSize,
      sort: SORT_DATE_DESC,
    };
    this.dataSource$ = this.movementService
      .getMovements(pageable, this.isDeposit)
      .pipe(
        map((data) => {
          this.totalElements = data.page.totalElements;
          return data.content;
        })
      );
  }
}
