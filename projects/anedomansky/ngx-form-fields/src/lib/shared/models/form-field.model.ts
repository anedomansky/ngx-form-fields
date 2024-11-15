import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export const FormFieldTypes = {
  TEXT: 'text',
  TEXTAREA: 'textarea',
  NUMBER: 'number',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  DATE: 'date',
  PASSWORD: 'password',
  EMAIL: 'email',
  TEL: 'tel',
} as const;

type FormFieldTypesTypeValue = typeof FormFieldTypes;
export type FormFieldType =
  FormFieldTypesTypeValue[keyof FormFieldTypesTypeValue];

export type Field<T = unknown> = {
  name: string;
  label: string;
  type:
    | 'text'
    | 'textarea'
    | 'number'
    | 'checkbox'
    | 'radio'
    | 'date'
    | 'password'
    | 'email'
    | 'tel';
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  defaultValue: T;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
};

export type Group<T = unknown> = {
  name: string;
  label: string;
  type: 'group';
  fields: FormField<T>[];
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
};

export type FormField<T = unknown> = Field<T> | Group<T>;
