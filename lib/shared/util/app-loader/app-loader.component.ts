import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
    selector: 'app-loader',
    templateUrl: './app-loader.component.html',
    styleUrls: ['./app-loader.component.css']
})
export class AppLoaderComponent implements OnInit {
    title;
    message;

    constructor(public dialogRef: NbDialogRef<AppLoaderComponent>) {
    }

    ngOnInit() {
    }

}
