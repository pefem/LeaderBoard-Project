import { Injectable, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

import * as $ from 'jquery';
declare var jQuery: any;

@Injectable()
export class WidgetDatagridViewService {

    private className: any;
    private multiSelect: true;

    init(args: any) {
        if ((args instanceof Object) && Object.keys(args).length > 0) {
            this.className = ('name' in args) ? args.name : '';
            this.multiSelect = ('multiSelect' in args) ? args.multiSelect : '';
        } else {
            this.className = args;
        }
        return this;
    }

    datagridRowSelect(args: any, event?: any) {
        const row: any = $('.table.' + this.className).find('tr[id="datagrid-row-' + args + '"]');
        const checkbox = row.find('input[type="checkbox"]');

        if (event.target.type !== 'checkbox' && event.target.tagName.toLowerCase() !== 'label') {
            // clear previously selected rows
            const rows: any = $('.table.' + this.className).find('tbody').find('tr');
            // tslint:disable-next-line: no-shadowed-variable
            rows.map((index: any, row: any) => {
                row.classList.remove('alert-primary');
                row.classList.remove('text-white');
                const rowCheckbox = row.querySelector('input[type="checkbox"], input[type="radio"]');
                rowCheckbox.checked = false;
            });

            // select row
            row.addClass('alert-primary text-white');

            //
            if (checkbox.is(':checked')) {
                const numberOfSelectedRows = [];
                // tslint:disable-next-line: no-shadowed-variable
                rows.map((index: any, row: any) => {
                    const rowCheckbox = row.querySelector('input[type="checkbox"], input[type="radio"]');
                    if (rowCheckbox.checked) {
                        numberOfSelectedRows.push(rowCheckbox.value);
                    }
                });

                //
                if (numberOfSelectedRows.length > 1) {
                    checkbox.prop('checked', false);
                } else {
                    //
                }
            } else {
                checkbox.prop('checked', true);
            }
        } else {
            if (event.target.checked) {
                // select row
                row.addClass('alert-primary text-white');
            } else {
                // deselect row
                row.removeClass('alert-primary');
                row.removeClass('text-white');
            }
        }
    }

    getSelectedDatagridRowValue() {
        const selectedProducts = [];
        $('.table.' + this.className).find('tbody').find('tr').map((index: any, row: any) => {
            const checkbox = row.querySelector('input[type="checkbox"], input[type="radio"]');
            if (checkbox.checked) {
                selectedProducts.push(checkbox.value);
            }
        });
        return selectedProducts;
    }
}