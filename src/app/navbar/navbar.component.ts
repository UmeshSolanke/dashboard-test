import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sidebarToggle = new EventEmitter<void>();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    // Emit the sidebarToggle event when the button is clicked
    this.sidebarToggle.emit();
    console.log('Sidebar toggle event emitted');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  
  

}
