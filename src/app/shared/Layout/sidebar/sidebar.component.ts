import { Component, Injector, Input } from '@angular/core';
import { BaseComponent } from '../../Ui-Component/BaseComponent';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);

}

@Input() sidenavStatus: boolean = true;

list = [
  {
    number: '1',
    name: 'Dashboard',
    icon: 'fa-solid fa-house',
    route: '/dashboard1', // Path for navigation
  },
  {
    number: '2',
    name: 'Sanction Order',
    icon: 'fa-solid fa-chart-line',
    route: '/sanction-order',
    subItems: [
      {
        number: '1',
        name: 'Sanction Order Entry',
        icon: 'fa-solid fa-clipboard',
        route: '/sanction-order/sanction-order-entry',
      },
      {
        number: '2',
        name: 'Sanction Order Inbox',
        icon: 'fa-solid fa-file',
        route: '/sanction-order/sanction-order-inboxnew',
      },
      {
        number: '3',
        name: 'Sanction Order Outbox',
        icon: 'fa-solid fa-file',
        route: '/sanction-order/sanction-order-outbox',
      },
      {
        number: '4',
        name: 'Sub Item 3',
        icon: 'fa-solid fa-file',
        route: '/sanction-order/sub-item-3',
        subItems: [
          {
            number: '1',
            name: 'Nested Sub Item 1',
            icon: 'fa-solid fa-clipboard',
            route: '/sanction-order/sub-item-3/nested-sub-item-1',
          },
          {
            number: '2',
            name: 'Nested Sub Item 2',
            icon: 'fa-solid fa-file',
            route: '/sanction-order/sub-item-3/nested-sub-item-2',
          },
        ],
        isOpen: false,
      },
    ],
    isOpen: false, // Track if subitems are open
  },
  {
    number: '3',
    name: 'Products',
    icon: 'fa-solid fa-box',
    route: '/products',
  },
  {
    number: '4',
    name: 'Order',
    icon: 'fa-solid fa-cart-shopping',
    route: '/order',
  },
  {
    number: '5',
    name: 'Settings',
    icon: 'fa-solid fa-gear',
    route: '/settings',
  },
  {
    number: '6',
    name: 'About',
    icon: 'fa-solid fa-circle-info',
    route: '/about',
  },
  {
    number: '7',
    name: 'Contact',
    icon: 'fa-solid fa-phone',
    route: '/contact',
  },
];


toggleSubMenu(item: any): void {
  if (item.subItems) {
    item.isOpen = !item.isOpen;
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
