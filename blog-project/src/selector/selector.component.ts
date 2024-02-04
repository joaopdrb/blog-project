import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css',
  standalone: true,
  imports: [CommonModule, CardComponent],
})

export class SelectorComponent {
  constructor(private sanitizer: DomSanitizer) {}
  
}