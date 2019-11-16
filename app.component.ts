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

   selectSingleItem=false; 
   selectAllItem=false;


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

    // default selected -Not needed 
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

  //to bind single selected item to Dom list
  onItemSelect(item: any) {           
    this.selectedItems.push(item);        
  }

  //to bind all items to Dom list in one shot
  onSelectAll(items: any)
   {
    let mylist = items;

    for (let item of mylist) 
    {
        this.selectedItems.push(item);
    }
  }

  // to clear dom list on 'unSelectAll' / 'DropdownClose'
onDropDownClose(item:any)
{

}


}
