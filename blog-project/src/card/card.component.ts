import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class CardComponent {
  @Input() image: string = 'https://images.unsplash.com/photo-1706516605121-532e6aa1dca1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  @Input() assunto: string = 'Assunto';
  @Input() titulo: string = 'Título';
  @Input() lide: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ligula at feugiat sollicitudin. Sed lobortis non enim vel efficitur. Maecenas auctor eros et dui molestie lacinia.';
  isAlive: boolean = true;
}