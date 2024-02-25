import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, NgIf, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    ConvertPipe,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  name: string = '';
  date: string = '';
  amount: number = 0;
  height: number = 0;
  miles: number = 0;

  car: {[key:string]: string | number} = {
    make: "Toyota",
    model: "Camry",
    year: 2000
  }

  onNameChange(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    this.name = value;
  }

  onDateChange(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    this.date = value;
  }

  onAmountChange(event: Event) {
    const value = parseFloat((<HTMLInputElement>event.target).value);
    if (!isNaN(value)) {
      this.amount = value;
    }
  }

  onHeightChange(event: Event) {
    const value = parseFloat((<HTMLInputElement>event.target).value);
    if (!isNaN(value)) {
      this.height = value;
    }
  }

  onMilesChange(event: Event) {
    const value = parseFloat((<HTMLInputElement>event.target).value);
    if (!isNaN(value)) {
      this.miles = value;
    }
  }
}
