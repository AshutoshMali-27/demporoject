import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { BaseComponent } from '../../Ui-Component/BaseComponent';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
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

}
