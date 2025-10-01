import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItAutocompleteComponent, ItCheckboxComponent, ItInputComponent, InputControlType, ItPasswordInputComponent, ItRadioButtonComponent } from 'design-angular-kit';

@Component({
  selector: 'app-inputs-component',
  imports: [ItAutocompleteComponent, FormsModule, ItCheckboxComponent, ItInputComponent, ItPasswordInputComponent, ItRadioButtonComponent],
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

   i = 0;
  readOnly = false;
  type: InputControlType | 'password' = 'text';
  icon = 'pencil';
  value = 'myNgModel';

  get placeholder() {
    return this.hasPlaceholder ? 'Testo di esempio' : '';
  }

  get label() {
    return this.hasLabel ? "Label dell'input" : '';
  }

  get note() {
    return this.hasNote ? 'non condivideremo mai i tuoi dati' : '';
  }

  hasPlaceholder = true;

  hasLabel = true;

  hasNote = false;
}
