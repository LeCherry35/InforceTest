import { commentsAction, CommentsActionTypes } from '../types/comments';
import { Dispatch } from 'redux'
import CommentsService from '../services/commentsService'

export const setCommentsAsync = (id:number) => {
    return async (dispatch: Dispatch<commentsAction>) => {
        try {
            const res = await CommentsService.getComments(id)
            dispatch({type: CommentsActionTypes.SET_COMMENTS, payload: res.data})
        } catch(e) {
            console.log(e)
        }
    }
}
export const addCommentAsync = (id:number, text: string) => {
    return async ( dispatch: Dispatch<commentsAction>) => {
        try {
            const comment = {
                productId: id,
                date: Date.now().toString(),
                description: text
            }
            const res = await CommentsService.addComment(comment)
            dispatch({type: CommentsActionTypes.ADD_COMMENT, payload:res.data})
            
        } catch (e) {
            console.log(e);
            
        }
    }
}