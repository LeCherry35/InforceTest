import { IProduct } from "./models/IProduct";

export interface ProductsState {
    products?: IProduct [],
    selectedProduct: IProduct
}
export enum ProductActionTypes {
    SET_PRODUCTS = 'SET_PRODUCTS',
    ADD_PRODUCT = 'ADD_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    EDIT_PRODUCT = 'EDIT_PRODUCT',
    SET_PRODUCT = 'SET_PRODUCT'
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
    payload?: {id: number}
}

interface SetProductActionInterface {
    type: ProductActionTypes.SET_PRODUCT,
    payload: IProduct
}

export type ProductsAction = SetProductsActionInterface 
    | AddProductActionInterface 
    | EditProductActionInterface 
    | DeleteProductActionInterface 
    | SetProductActionInterface