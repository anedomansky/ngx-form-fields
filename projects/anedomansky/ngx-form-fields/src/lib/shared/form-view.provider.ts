import { Optional, Provider } from '@angular/core';
import { ControlContainer, NgForm, NgModelGroup } from '@angular/forms';

export const formViewProvider: Provider = {
  provide: ControlContainer,
  useFactory: formViewFactory,
  deps: [
    [new Optional(), NgForm],
    [new Optional(), NgModelGroup],
  ],
};

function formViewFactory(
  ngForm?: NgForm,
  ngModelGroup?: NgModelGroup,
): NgModelGroup | NgForm | null {
  return ngModelGroup || ngForm || null;
}
