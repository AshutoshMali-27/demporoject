import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { BaseComponent } from '../../Ui-Component/BaseComponent';
import { ToggleThemeComponent } from "../toggle-theme/toggle-theme.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToggleThemeComponent,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  extends BaseComponent{
  @Output() sidenavtoggled =new EventEmitter<boolean>();
  menuStatus:boolean=false;
  sidenavtoggle() {
    this.menuStatus=!this.menuStatus;
    this.sidenavtoggled.emit(this.menuStatus);
  }
  
  constructor(injector: Injector) {
    super(injector);


}

dropdownOpen1 = false;

// Method to toggle dropdown visibility
toggleDropdown13() {
  this.dropdownOpen1 = !this.dropdownOpen1;
}

}
