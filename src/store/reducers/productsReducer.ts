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
        case ProductActionTypes.SET_PRODUCT:
            return{products:[action.payload]}
        case ProductActionTypes.ADD_PRODUCT:
            const cloneAdd: IProduct[] | undefined = _.cloneDeep(state.products)
            cloneAdd?.push(action.payload)
            return {products: cloneAdd}
        case ProductActionTypes.DELETE_PRODUCT:
            const cloneDel: IProduct[] | undefined = _.cloneDeep(state.products)
            console.log('aa', action.payload);
            
            cloneDel?.filter(product => product.id !== action.payload?.id)
            return {products:cloneDel}
            case ProductActionTypes.EDIT_PRODUCT:
            const cloneEdit: IProduct[] | undefined = _.cloneDeep(state.products)
            cloneEdit?.forEach(product => {
                if(product.id === action.payload.id) {
                    product = action.payload
                }
            })
            return {products:cloneEdit}
        default:
            return state
    }
}

