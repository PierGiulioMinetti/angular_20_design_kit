import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputsComponent } from './components/inputs-component/inputs-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    InputsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
}
