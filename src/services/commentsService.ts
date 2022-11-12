import { IComment } from './../types/models/IComment';
import $api from "../http";
import { AxiosResponse } from 'axios'

export default class CommentsService {
    static async getComments(id:number) :Promise<AxiosResponse<IComment[]>> {
        const res = await $api.get('/Comments?productId=' + id)
        return res
    }
    
    static async addComment(comment: IComment) :Promise<AxiosResponse<IComment>> {
        const res = await $api.post('/Comments', comment)
        return res
    }
    static async deleteComment(id:number) :Promise<AxiosResponse<IComment>> {
        const res = await $api.delete('/Comments/' + id)
        return res
    }
}