import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemTypeService } from './../services/itemTypeService/itemType.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ItemType } from '../model/ItemType';
@Component({
  selector: 'app-items-types-list',
  templateUrl: './item-types-list.component.html',
  styleUrls: ['./item-types-list.component.css']
})
export class ItemsTypesListComponent implements OnInit {

  itemTypes: ItemType[] = [];
  dataSource = new MatTableDataSource<ItemType>(this.itemTypes);

  @ViewChild(MatPaginator, { static: false }) paginator !: MatPaginator;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name'];

  constructor(private itemTypeService: ItemTypeService) { }

  ngOnInit(): void {
    this.getItemTypes()
    this.dataSource.paginator = this.paginator;
  }

  getItemTypes() {
    this.itemTypeService.getItemTypes().subscribe(
      response => {
        console.log(response);
        this.dataSource = new MatTableDataSource<ItemType>(response as ItemType[]);
        this.dataSource.paginator = this.paginator;
      });
    console.log(this.dataSource);
  }

}
