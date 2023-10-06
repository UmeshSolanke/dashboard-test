import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  isSidebarCollapsed = false;
  isSubMenuOpen: { [key: string]: boolean } = {};
  ngOnInit(): void {

  }

  // isSidebarOpen = false;

  // toggleSidebar() {
  //   this.isSidebarOpen = !this.isSidebarOpen;
  // }

 
  
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleSubMenu(menu: string) {
    this.isSubMenuOpen[menu] = !this.isSubMenuOpen[menu];
  }
}
