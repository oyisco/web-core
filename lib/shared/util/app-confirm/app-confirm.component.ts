import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'app-confirm',
    template: `
        <ng-template #dialog let-data let-ref="dialogRef">
            <nb-card>
                <nb-card-header>{{data.title}}</nb-card-header>
                <nb-card-body>{{ data.message }}</nb-card-body>
                <nb-card-footer>
                    <button nbButton outline status="primary" (click)="dialogRef.close()">OK</button>
                    <button nbButton outline status="danger" (click)="dialogRef.close(false)">Cancel</button>
                </nb-card-footer>
            </nb-card>
        </ng-template>
    `,
})
export class AppConfirmComponent {
    constructor(
        public dialogRef: NbDialogRef<AppConfirmComponent>
    ) {
    }
}
