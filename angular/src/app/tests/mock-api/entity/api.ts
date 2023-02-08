import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { client as clientData } from './data';
import { realty_data } from './data';
import { columns_data } from './data';
import { client_one as clientOneData } from './data';
import {FuseMockApiService} from "../../../lib/mock-api";

@Injectable({
    providedIn: 'root'
})
export class EntityMockApi
{
    private _clientData: any = clientData;
    private _clientOneData: any = clientOneData;
    private _realtyData: any = realty_data;
    private _columnsData: any = columns_data;

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
        // @ Activities - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onPost('dragon/api/entity')
            .reply(({request}) => {
                let result = null;

                switch (request.body.app_name) {
                    case 'data':
                        result = cloneDeep(this._realtyData);
                        break;
                    case 'client':
                        result = cloneDeep(this._clientData);
                        break;
                    case 'columns':
                        result = cloneDeep(this._columnsData);
                        break;
                }

                return [200, result]
            });

        this._fuseMockApiService
            .onPost('dragon/api/entity/1')
            .reply(() => [200, cloneDeep(this._clientOneData)]);

    }
}
