import { routes } from './../../../app.routes';
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../../shared/Ui-Component/BaseComponent';
@Component({
  selector: 'app-sanctionorderslip',
  // standalone: true,
  // imports: [],
  templateUrl: './sanctionorderslip.component.html',
  styleUrl: './sanctionorderslip.component.css'
})
export class SanctionorderslipComponent extends BaseComponent implements OnInit {
  slipId: string | null = null;
  amid: string | null = null;
  mstid: string | null = null;

  invoiceNumber = 'INV-12345';
  invoiceDate = new Date().toLocaleDateString();
  customerName = 'John Doe';
  customerAddress = '123 Main St, City, Country';
  customerPhone = '(123) 456-7890';
  customerEmail = 'john.doe@example.com';
  shippingName = 'John Doe';
  shippingAddress = '123 Main St, City, Country';
  shippingPhone = '(123) 456-7890';
  shippingEmail = 'john.doe@example.com';
  schemeName="demoproject";
  projectName="finance office";
  componentName="abcd componenty";
  invoiceItems = [
    { description: 'Product A', quantity: 2, unitPrice: 50, total: 100 },
    { description: 'Product B', quantity: 1, unitPrice: 150, total: 150 }
  ];

  subtotal = this.invoiceItems.reduce((sum, item) => sum + item.total, 0);
  taxRate = 10; // 10%
  taxAmount = this.subtotal * (this.taxRate / 100);
  totalAmount = this.subtotal + this.taxAmount;
  
  dueDate = new Date(new Date().setDate(new Date().getDate() + 30)).toLocaleDateString();
  paymentMethod = 'Credit Card';
  notes = 'Thank you for your business!';

  constructor(injector: Injector,private route:ActivatedRoute) {
    super(injector);
    
  }

  ngOnInit(): void {
    this.slipId = this.route.snapshot.paramMap.get('id');
    this.amid = this.route.snapshot.paramMap.get('approvalMasterID');
    this.mstid = this.route.snapshot.paramMap.get('masterID');
    console.log('View Slip ID:', this.slipId);
  }



  
}
