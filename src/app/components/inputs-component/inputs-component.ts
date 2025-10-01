import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItAutocompleteComponent, ItCheckboxComponent } from 'design-angular-kit';

@Component({
  selector: 'app-inputs-component',
  imports: [ItAutocompleteComponent, FormsModule, ItCheckboxComponent],
  templateUrl: './inputs-component.html',
  styleUrl: './inputs-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputsComponent {
  source = signal([
    'Abruzzo',
    'Basilicata',
    'Calabria',
    'Campania',
    'Emilia Romagna',
    'Friuli Venezia Giulia',
    'Lazio',
    'Liguria',
    'Lombardia',
    'Marche',
    'Molise',
    'Piemonte',
    'Puglia',
    'Sardegna',
    'Sicilia',
    'Toscana',
    'Trentino Alto Adige',
    'Umbria',
    'Valle d’Aosta',
    'Veneto',
  ]);

  checked = true;
  disabled = false;
  indeterminate = false;
  link = false;
}
