import { CardViewModule } from '@alfresco/adf-core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormioModule } from 'angular-material-formio';
import { DetailsComponent } from './component/details.component';
import { JsonFormComponent } from './json-form.component';

@NgModule({
    imports: [MatFormioModule, CommonModule, CardViewModule],
    declarations: [JsonFormComponent, DetailsComponent],
    exports: [JsonFormComponent, DetailsComponent, MatFormioModule],
    entryComponents: [JsonFormComponent]
})
export class JsonFormModule {

}
