import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { IPatrol } from 'src/app/interfaces/ipatrol';
import { HttpService } from 'src/app/servicess/http.service';

@Component({
  selector: 'week-duty-table',
  templateUrl: './week-duty-table.component.html',
  styleUrls: ['./week-duty-table.component.scss']
})
export class WeekDutyTableComponent implements OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IPatrol>;
  dataSource!: IPatrol[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['number', 'PIB', 'start', 'end',];

  constructor(private service: HttpService) {
  }
  addPost(post: IPatrol) {
    this.service.addPost(post).subscribe(() => {
      alert('Наряд успішно додано');
      this.getPosts();
      // this.dataSource.connect()
    })
  }
  getPosts() {
    this.service.getPosts().subscribe((posts) => {
      this.dataSource = posts;      
    })
  }
  ngOnInit(): void {
    this.getPosts();
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }
}
