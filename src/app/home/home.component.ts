import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  data: any[] = [
    { id: 1, name: 'John', age: 30, city: 'New York' },
    { id: 2, name: 'Alice', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob', age: 35, city: 'Chicago' },
    { id: 4, name: 'Eve', age: 28, city: 'Houston' },
    { id: 5, name: 'Eve', age: 28, city: 'Houston' },
    { id: 6, name: 'Eve', age: 28, city: 'Houston' },
    { id: 7, name: 'Eve', age: 28, city: 'Houston' },
  ];

  ngOnInit(): void {
    this.dtOptions = {
      data: this.data,
      columns: [
        { title: 'ID', data: 'id' },
        { title: 'Name', data: 'name' },
        { title: 'Age', data: 'age' },
        { title: 'City', data: 'city' },
      ],
      searching: true,
      lengthMenu: [1, 2, 3],
      pagingType: 'full_numbers',
      order: [[0, 'asc']],
      pageLength: 5,
      responsive: true
    };
  }


}
