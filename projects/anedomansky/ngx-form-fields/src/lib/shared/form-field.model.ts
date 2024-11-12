export type FormFieldType =
  | 'text'
  | 'number'
  | 'checkbox'
  | 'radio'
  | 'password'
  | 'date'
  | 'email';

export type FormFieldConfig<T = unknown> = {
  /**
   * Can be a nested key like "first.second.third.mycontrol"
   */
  key: string;
  type: FormFieldType;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  defaultValue: T;
};
