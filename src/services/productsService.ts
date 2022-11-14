import { IProduct } from '../types/models/IProduct';
import $api from "../http";
import { AxiosResponse } from 'axios'

export default  class ProductsService {
    static async getProducts() :Promise<AxiosResponse<IProduct[]>> {
        const res = await $api.get('/Products')
        return res
    }
    static async getProduct(id:number) :Promise<AxiosResponse<IProduct>> {
        const res = await $api.get('/Products/' + id)
        return res
    }
    static async deleteProduct(id:number) :Promise<AxiosResponse<IProduct>> {
        const res = await $api.delete('/Products/' + id)
        return res
    }
    static async editProduct(product: IProduct) :Promise<AxiosResponse<IProduct>> {
        const {id} = product
        const res = await $api.put('/Products/' + id, product)
        return res
    }
    static async addProduct(product: IProduct) :Promise<AxiosResponse<IProduct>> {
        const res = await $api.post('/Products', product)
        return res
    }
}