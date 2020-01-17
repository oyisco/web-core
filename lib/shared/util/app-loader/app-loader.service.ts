import { Injectable } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { AppLoaderComponent } from './app-loader.component';

@Injectable()
export class AppLoaderService {
    dialogRef: NbDialogRef<AppLoaderComponent>;

    constructor(private dialog: NbDialogService) {
    }

    public open(title: string = 'Please wait'): Observable<any> {
        this.dialogRef = this.dialog.open(AppLoaderComponent, {backdropClass: 'light-backdrop'});
        /*this.dialogRef.updateSize('200px');
        this.dialogRef.componentInstance.title = title;*/
        return this.dialogRef.onClose;
    }

    public close() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }
}
