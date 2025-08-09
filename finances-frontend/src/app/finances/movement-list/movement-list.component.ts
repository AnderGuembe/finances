import { Component } from '@angular/core';
import { Movement } from '../../model/movement.model';
import { MovementService } from '../../services/movement.service';

import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Pageable, SORT_DATE_ASC, SORT_DATE_DESC } from '../../model/page.model';

@Component({
  selector: 'app-movement-list',
  standalone: true,
  imports: [CommonModule,
    MatTableModule, MatPaginatorModule],
  templateUrl: './movement-list.component.html',
  styleUrl: './movement-list.component.scss'
})
export class MovementListComponent {

    dataSource: Movement[] = [];

    displayedColumns: string[] = ['description', 'amount', 'date', 'isIncome', 'category'];

    totalElements: number = 0;
    pageSize: number = 5;
    currentPage: number = 0;

    constructor(private readonly movementService: MovementService) { 
      this.loadMovements();
    }

    onPageChange(event: any) {
     this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;
      this.loadMovements();
    }

    private loadMovements() {
      const pageable: Pageable = {
        page: this.currentPage,
        size: this.pageSize,
        sort: SORT_DATE_DESC
      }
      this.movementService.getMovements(pageable).subscribe(data => {
        this.dataSource = data.content;
        this.totalElements = data.page.totalElements;
      });
    }
}
