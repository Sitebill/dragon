import {EntityItem} from "../entity-item.model";

export interface GridResponseModel {
    success: boolean,
    rows: RowItem[]
}
export interface RowItem {
    [name: string]: EntityItem
}
