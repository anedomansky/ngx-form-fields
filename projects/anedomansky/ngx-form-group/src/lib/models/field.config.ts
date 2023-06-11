import { FormControl, ValidatorFn } from '@angular/forms';

interface FieldOptions {
  /**
   * Deactivates the input element.
   * @default false
   */
  disabled?: boolean;

  /**
   * Displays the input element as non-editable.
   * @default false
   */
  readonly?: boolean;

  /**
   * Marks the input element as required.
   * @default false
   */
  required?: boolean;
}

type InputType = 'text' | 'number' | 'checkbox';

export interface FieldConfig {
  /**
   * The FormControl of the input element.
   * @usage
   * Used internally in order to bind the input element to the FormGroup.
   */
  control?: FormControl<unknown>;

  /**
   * Start value for the input element.
   */
  defaultValue?: unknown;

  /**
   * Label to display above the input element.
   */
  label: string;

  /**
   * Represents the FormControlName.
   */
  name: string;

  /**
   * Set of input element options.
   */
  options?: FieldOptions;

  /**
   * Placeholder for the input element. Not available for input elements of type radio or checkbox.
   */
  placeholder?: string;

  /**
   * Specifies the type of the input element.
   */
  type: InputType;

  validators?: ValidatorFn | ValidatorFn[];
}
