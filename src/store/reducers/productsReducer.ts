import { ProductActionTypes } from './../../types/products';
import { ProductsAction, ProductsState } from "../../types/products"
import * as _ from 'lodash'
import { IProduct } from '../../types/models/IProduct';

const initialState: ProductsState = {
    
}

export const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
    switch (action.type) {
        case ProductActionTypes.SET_PRODUCTS: 
            return {products:[...action.payload]}
        case ProductActionTypes.SORT_BY_NAME:
            const p = _.cloneDeep(state.products)?.sort((a, b) => {
                const nameA = a?.name?.toUpperCase(); // ignore upper and lowercase
                const nameB = b?.name?.toUpperCase(); // ignore upper and lowercase
                if(nameA && nameB) {
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                }
                return 0;
              });
              console.log('p',p);
              
            
            return {...state,products: p}
        default:
            return state
    }
}

export const SortByNameActionCreator = () => {
    return {type: ProductActionTypes.SORT_BY_NAME}
}
export const SortByCountActionCreator = () => {
    return {type: ProductActionTypes.SORT_BY_COUNT}
}