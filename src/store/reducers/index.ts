
import {combineReducers} from 'redux'
import { commentsReducer } from './commentsReducer'
import { modalWindowReducer } from './modalWindowReducer'
import { productsReducer } from './productsReducer'

export const rootReducer = combineReducers({
    products: productsReducer,
    modalWindow: modalWindowReducer,
    comments: commentsReducer
})
