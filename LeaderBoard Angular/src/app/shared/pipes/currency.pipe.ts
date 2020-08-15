import { Pipe, PipeTransform } from "@angular/core";
import { formatCurrency, getCurrencySymbol } from '@angular/common';

// @Pipe({ name: '₦' })
@Pipe({
    name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {
    transform(
        value: number,
        currencyCode: string = 'USD',
        display:
            | 'code'
            | 'symbol'
            | 'symbol-narrow'
            | string
            | boolean = 'symbol',
        digitsInfo: string = '3.2-2',
        locale: string = 'us',
    ): any {
        return formatCurrency(
            value,
            locale,
            getCurrencySymbol(currencyCode, 'wide'),
            currencyCode,
            digitsInfo,
        );
    }
}