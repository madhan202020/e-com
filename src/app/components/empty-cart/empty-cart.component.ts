import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empty-cart.component.html',
  styleUrl: './empty-cart.component.css'
})
export class EmptyCartComponent {
@Input() className: string = 'w-auto';
  @Input() text: string = '';
}
