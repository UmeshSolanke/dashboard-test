import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sidebarCollapsed = false;

  // toggleSidebar() {
  //   // Toggle the sidebarCollapsed property when the button is clicked
  //   this.sidebarCollapsed = !this.sidebarCollapsed;
  //   console.log('Sidebar collapsed app:', this.sidebarCollapsed);
  // }
  // title = 'invoiceapp';

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('show');
    }
  }
}
