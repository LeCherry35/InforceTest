import { IProduct } from '../types/models/IProduct';
import { ProductsAction } from './../types/products';
import { ProductActionTypes } from "../types/products"
import { Dispatch } from 'redux'
import ProductsService from '../services/productsService';

export const getProductsAsync = () => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            const res = await ProductsService.getProducts()
            dispatch({type: ProductActionTypes.SET_PRODUCTS, payload: res.data})
        } catch(e) {
            console.log(e)
        }
    }
}
export const addProductAsync = (product:IProduct) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            const res = await ProductsService.addProduct(product)
            dispatch({type: ProductActionTypes.ADD_PRODUCT, payload: res.data})
            console.log('added', res.data)
        } catch(e) {
            console.log(e);
            
        }
    }
}
export const deleteProductAsync = (id:number) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            const res = await ProductsService.deleteProduct(id)
            dispatch({type: ProductActionTypes.DELETE_PRODUCT, payload:{id}})
            console.log('deleted', res.data)
        } catch(e) {
            console.log(e);
            
        }
    }
}
export const editProductAsync = (product:IProduct) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            const res = await ProductsService.editProduct(product)
            dispatch({type: ProductActionTypes.EDIT_PRODUCT, payload:product})
            console.log('edited', res.data)
        } catch(e) {
            console.log(e);
            
        }
    }
}