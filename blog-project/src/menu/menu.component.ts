import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  main: string[] = ['Home', 'Assuntos', 'Sobre'];
  sec: string[] = ['Assunto 1', 'Assunto 2', 'Assunto 3'];
  isAlive = false;
  mouseClick(){
    if (this.isAlive === true)
      {
        this.isAlive = false;
      }
    else
    {
      this.isAlive = true;
    }
  }
}
