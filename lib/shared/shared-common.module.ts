import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgJhipsterModule } from 'ng-jhipster';
import { AlertErrorComponent } from './alert/alert-error.component';
import { AlertComponent } from './alert/alert.component';
import { CommonPipesModule } from './pipes/common/common-pipes.module';

@NgModule({
    imports: [
        CommonModule,
        NgJhipsterModule,
        CommonPipesModule,
    ],
    declarations: [
        AlertComponent,
        AlertErrorComponent
    ],
    exports: [
        AlertComponent,
        AlertErrorComponent,
        CommonPipesModule
    ]
})
export class SharedCommonModule {
}
