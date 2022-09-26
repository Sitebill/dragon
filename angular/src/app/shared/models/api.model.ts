export interface ApiCall {
    api: string,
    name: string,
    method: string,
    params?: ApiParams[],
    anonymous: boolean
}
export interface ApiParams {
    [key: string]: any;
}
export interface JsonParams {
    [key: string]: any;
}
export enum FormType {
    simple="simple",
    inline="inline"
}
