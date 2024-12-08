import { NgClass, NgIf, NgStyle } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './shared/Ui-Component/BaseComponent';
import { SidebarComponent } from "./shared/Layout/sidebar/sidebar.component";
import { NavbarComponent } from "./shared/Layout/navbar/navbar.component";
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, SidebarComponent, NavbarComponent,NgStyle,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent extends BaseComponent {
  title = 'demo_project_frontend';
  sidenavStatus:boolean=true;
  constructor(injector:Injector){
    super(injector);
  
  }

  ngOnInit(): void {
    initFlowbite();
    this,this.LoadingService.isLoading$.subscribe((isLoading)=>{

      this.isLoading=isLoading;
    });
    
  }
  
}
