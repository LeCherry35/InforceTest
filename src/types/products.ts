import { IProduct } from "./models/IProduct";

export interface ProductsState {
    products?: IProduct []
}
export enum ProductActionTypes {
    SET_PRODUCTS = 'SET_PRODUCTS',
    ADD_PRODUCT = 'ADD_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    EDIT_PRODUCT = 'EDIT_PRODUCT',
    SORT_BY_NAME = 'SORT_BY_NAME',
    SORT_BY_COUNT = 'SORT_BY_COUNT'
}

interface SetProductsActionInterface {
    type: ProductActionTypes.SET_PRODUCTS
    payload: IProduct []
}
interface AddProductActionInterface {
    type: ProductActionTypes.ADD_PRODUCT
    payload: IProduct
}
interface EditProductActionInterface {
    type: ProductActionTypes.EDIT_PRODUCT
    payload: IProduct
}
interface DeleteProductActionInterface {
    type: ProductActionTypes.DELETE_PRODUCT
    payload: {id: number}
}
interface SortByNameActionInterface {
    type: ProductActionTypes.SORT_BY_NAME
}
interface SortByCountActionInterface {
    type: ProductActionTypes.SORT_BY_COUNT
}

export type ProductsAction = SetProductsActionInterface 
    | AddProductActionInterface 
    | EditProductActionInterface 
    | DeleteProductActionInterface 
    | SortByNameActionInterface
    | SortByCountActionInterface