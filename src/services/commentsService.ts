import { IComment } from './../types/models/IComment';
import { IProduct } from '../types/models/IProduct';
import $api from "../http";
import { AxiosResponse } from 'axios'

export default class CommentsService {
    static async getComments() :Promise<AxiosResponse<IComment[]>> {
        const res = await $api.get('/Comments')
        console.log('33333', res);
        
        return res
    }
    
    static async addProduct(product: IProduct) :Promise<AxiosResponse<IProduct>> {
        const res = await $api.post('/Products', product)
        return res
    }
}