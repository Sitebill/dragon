import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {FuseMockApiInterceptor} from "./mock-api.interceptor";
import {FUSE_MOCK_API_DEFAULT_DELAY} from "./mock-api.constants";

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: FuseMockApiInterceptor,
            multi   : true
        }
    ]
})
export class FuseMockApiModule
{
    /**
     * FuseMockApi module default configuration.
     *
     * @param mockApiServices - Array of services that register mock API handlers
     * @param config - Configuration options
     * @param config.delay - Default delay value in milliseconds to apply all responses
     */
    static forRoot(mockApiServices: any[], config?: { delay?: number }): ModuleWithProviders<FuseMockApiModule>
    {
        return {
            ngModule : FuseMockApiModule,
            providers: [
                {
                    provide   : APP_INITIALIZER,
                    deps      : [...mockApiServices],
                    useFactory: () => (): any => null,
                    multi     : true
                },
                {
                    provide : FUSE_MOCK_API_DEFAULT_DELAY,
                    useValue: config?.delay ?? 0
                }
            ]
        };
    }
}
