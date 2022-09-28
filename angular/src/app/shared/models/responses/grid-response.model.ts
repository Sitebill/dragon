export interface GridResponseModel {
    success: boolean,
    data: GridDataModel[]
}
export interface GridDataModel {
    make: string,
    model: string,
    price: number
}
