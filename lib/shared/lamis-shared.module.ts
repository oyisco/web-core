import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbSpinnerModule, NbTooltipModule } from '@nebular/theme';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { SharedCommonModule } from './shared-common.module';
import { AppConfirmComponent } from './util/app-confirm/app-confirm.component';
import { AppLoaderComponent } from './util/app-loader/app-loader.component';
import { AppLoaderService } from './util/app-loader/app-loader.service';
import { SpeedDialFabComponent } from './util/speed-dial-fab.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SharedCommonModule,
        NbButtonModule,
        NbCardModule,
        NbDialogModule.forChild(),
        NbSpinnerModule,
        NbIconModule,
        NbTooltipModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ],
    declarations: [
        HasAnyAuthorityDirective,
        SpeedDialFabComponent,
        AppConfirmComponent,
        AppLoaderComponent
    ],
    entryComponents: [
        AppConfirmComponent,
        AppLoaderComponent
    ],
    exports: [
        SharedCommonModule,
        HasAnyAuthorityDirective,
        SpeedDialFabComponent
    ],
    providers: [
        AppLoaderService,
        AppConfirmComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LamisSharedModule {
}
