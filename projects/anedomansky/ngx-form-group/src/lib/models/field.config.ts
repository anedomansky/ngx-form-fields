interface FieldOptions {
  /**
   * Deactivates the input element.
   * @default false
   */
  disabled?: boolean;

  /**
   * Marks the input element as required.
   * @default false
   */
  required?: boolean;

  /**
   * Displays the input element as non-editable.
   * @default false
   */
  readonly?: boolean;
}

type InputType = 'text' | 'number' | 'checkbox';

export interface FieldConfig {
  /**
   * Represents the FormControlName.
   */
  name: string;

  /**
   * Specifies the type of the input element.
   */
  type: InputType;

  /**
   * Label to display above the input element.
   */
  label: string;

  /**
   * Set of input element options.
   */
  options?: FieldOptions;
}
