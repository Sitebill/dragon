import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { settings as settingsData } from './data';
import {FuseMockApiService} from "../../../lib/mock-api";

@Injectable({
    providedIn: 'root'
})
export class SettingsMockApi
{
    private _settingsData: any = settingsData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Settings - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('dragon/api/settings')
            .reply(({request}) => {
                let result = null;
                result = cloneDeep(this._settingsData);
                return [200, result]
            });
    }
}
