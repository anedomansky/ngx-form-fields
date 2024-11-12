import { Directive } from '@angular/core';

@Directive({
  selector: '[ngxFormSignalModel]',
  standalone: true,
})
export class SignalModelDirective {
  // TODO: https://github.com/timdeschryver/ng-signal-forms/blob/main/packages/platform/src/lib/signal-input.directive.ts
  // do I really need to reimplement the Angular NgModel's logic here?
  // try to use as much of the standard logic as possible before using custom implementations
}
