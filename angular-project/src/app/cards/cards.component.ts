import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() title = '';          // By using @Input decorator, we can take a value from parent component.
  @Input() imageUrl = '';
  @Input() username = '';
  @Input() content = '';
}
