import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'MSDdlDemo';

  dropdownListData = [];
  selectedItems = [];
  dropdownSettings = {};

  // set the placeholder to MultiSelect input element
  public initialLabel: string = 'Select States';

  constructor() {

  }

  ngOnInit() {
    this.dropdownListData = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Ahemdabad' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 6, item_text: 'Kolkata' },
      { item_id: 7, item_text: 'Chennai' },
      { item_id: 8, item_text: 'Agartala' }
    ];

    // default selected
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };

  }

  onItemSelect(item: any) {
    debugger;
    this.selectedItems.push(item);
  }

    onSelectAll(items: any) {
    debugger;
     
    
  }

}
