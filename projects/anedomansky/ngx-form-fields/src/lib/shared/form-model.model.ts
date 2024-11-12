import { WritableSignal } from '@angular/core';

type FormModelArray<T = unknown> = FormModelValue<T>[];
type FormModelValue<T = unknown> =
  | WritableSignal<T>
  | T
  | FormModelArray<T>
  | FormModel<T>
  | null;

export type FormModel<T = unknown> = {
  [name: string]: FormModelValue<T>;
};
