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
            console.log('added', res)
        } catch(e) {
            console.log(e);
            
        }
    }
}
export const deleteProductAsync = (id:number) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            const res = await ProductsService.deleteProduct(id)
            console.log('deleted', res)
        } catch(e) {
            console.log(e);
            
        }
    }
}
export const editProductAsync = (product:IProduct) => {
    return async (dispatch: Dispatch<ProductsAction>) => {
        try {
            const res = await ProductsService.editProduct(product)
            console.log('edited', res)
        } catch(e) {
            console.log(e);
            
        }
    }
}