import { Component, Injector, Input } from '@angular/core';
import { BaseComponent } from '../../Ui-Component/BaseComponent';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);

}


@Input() sidenavStatus:boolean=true;

list = [
  {
    number: '1',
    name: 'Dashboard',
    icon: 'fa-solid fa-house',
  },
  {
    number: '2',
    name: 'Sanction Order',
    icon: 'fa-solid fa-chart-line',
    subItems: [
      { name: 'Sub Item 1', icon: 'fa-solid fa-clipboard' },
      { name: 'Sub Item 2', icon: 'fa-solid fa-file' },
    ],
    isOpen: false, // Track if subitems are open
  },
  {
    number: '3',
    name: 'Products',
    icon: 'fa-solid fa-box',
  },
  {
    number: '4',
    name: 'Order',
    icon: 'fa-solid fa-cart-shopping',
  },
  {
    number: '5',
    name: 'Settings',
    icon: 'fa-solid fa-gear',
  },
  {
    number: '6',
    name: 'About',
    icon: 'fa-solid fa-circle-info',
  },
  {
    number: '7',
    name: 'Contact',
    icon: 'fa-solid fa-phone',
  },
];


toggleSubMenu(event: MouseEvent, item: any) {
  event.preventDefault(); // Prevent the page reload by stopping the default behavior
  if (item.subItems) {
    item.isOpen = !item.isOpen; // Toggle the sub-menu visibility
  }
}
  sanctionentry(){
  debugger;
    this.router.navigate(['/sanction-order/sanction-order-entry']);
  }
  sanctionorderinbox(){
    this.router.navigate(['/sanction-order/sanction-order-inboxnew']);
  }
  sanctionorderoutbox(){
    this.router.navigate(['/sanction-order/sanction-order-outbox']);
  }

}
