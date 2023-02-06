import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class MockHttpClient {

    get(url: string, options?: any): Observable<any> {
        return of(undefined);
    }

    post(url: string, body: any, options?: any): Observable<any> {
        return of(undefined);
    }

    put(url: string, body: any, options?: any): Observable<any> {
        return of(undefined);
    }

    delete(url: string, options?: any): Observable<any> {
        return of(undefined);
    }

    patch(url: string, body: any | null, options?: any): Observable<any> {
        return of(undefined);
    }
}
