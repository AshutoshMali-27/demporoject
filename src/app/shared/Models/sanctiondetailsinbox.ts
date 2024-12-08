import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

export class sanctionorderdetailinbox {
  id: number;
  financialYear: string;
  schemename: string;
  componentName: string;
  amount: number;
  sanctionnumber: string;
  approvalStatus: number;
  approvalMasterID:number;
  masterID:number;
  
  constructor(paramObject: object) {
    return Object.assign(this, paramObject);
  }

  static getForm(Sanctionorderinbox: sanctionorderdetailinbox): UntypedFormGroup {
    return new UntypedFormBuilder().group({
      id: [Sanctionorderinbox.id || null],
      financialYear: [Sanctionorderinbox.financialYear || null],
      schemename: [Sanctionorderinbox.schemename || null],
      componentName: [Sanctionorderinbox.componentName || null],
      amount: [Sanctionorderinbox.amount || null],
      sanctionnumber: [Sanctionorderinbox.sanctionnumber || null],
      approvalMasterID:[Sanctionorderinbox.approvalMasterID || null],
      masterID:[Sanctionorderinbox.masterID || null],

    });
  }
}
