import { IComment } from './../types/models/IComment';
import $api from "../http";
import { AxiosResponse } from 'axios'

export default class CommentsService {
    static async getComments(id:number) :Promise<AxiosResponse<IComment[]>> {
        const res = await $api.get('/Comments?productId=' + id)
        console.log('33333',id, 'iio', res);
        
        return res
    }
    
    static async addComment(comment: IComment) :Promise<AxiosResponse<IComment>> {
        const res = await $api.post('/Comments', comment)
        return res
    }
}