import { Injectable } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';

import { AppConfirmComponent } from './app-confirm.component';

interface ConfirmData {
    title?: string;
    message?: string;
}

@Injectable()
export class AppConfirmService {

    constructor(private dialog: NbDialogService) {
    }

    public confirm(data: ConfirmData = {}): Observable<any> {
        data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        let dialogRef: NbDialogRef<AppConfirmComponent>;
        dialogRef = this.dialog.open<any>(AppConfirmComponent, {
            context: {title: data.title, message: data.message}
        });
        return dialogRef.onClose;
    }
}
