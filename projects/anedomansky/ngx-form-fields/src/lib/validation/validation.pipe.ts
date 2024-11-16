import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validation',
  standalone: true,
})
export class ValidationPipe implements PipeTransform {
  transform(validationErrors: ValidationErrors | null): string[] {
    if (!validationErrors) {
      return [];
    }

    return Object.values(validationErrors).filter(
      (errorMessage: string | null) => !!errorMessage,
    ) as string[];
  }
}
