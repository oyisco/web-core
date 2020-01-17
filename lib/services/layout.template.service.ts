import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL_CONFIG, ServerApiUrlConfig } from '../app.constants';

@Injectable({
    providedIn: 'root'
})
export class LayoutTemplateService {
    resourceUrl = '';

    constructor(private http: HttpClient, @Inject(SERVER_API_URL_CONFIG) private serverUrl: ServerApiUrlConfig) {
        this.resourceUrl = serverUrl.SERVER_API_URL + '/api/templates';
    }

    getTemplate(templateId: string) {
        return this.http.get(`${this.resourceUrl}/${templateId}`, {observe: 'body'})
    }
}
