import { NgIf } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-savebtn',
  standalone: true,
  imports: [NgIf],
  templateUrl: './savebtn.component.html',
  styleUrl: './savebtn.component.css'
})
export class SavebtnComponent {
  @Input() isLoading: boolean = false; // To control loading state
  @Input() buttonText: string = 'Save'; // Default button text
  @Input() loadingText: string = 'Saving...'; // Default loading text

  // Method to handle the click event
  // onClick(): void {
  //   if (!this.disabled) {
  //     this.saveClicked.emit();
  //   }
  // }
}
