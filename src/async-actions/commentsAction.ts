import { commentsAction, CommentsActionTypes } from '../types/comments';
import { Dispatch } from 'redux'
import CommentsService from '../services/commentsService'

export const setCommentsAsync = () => {
    return async (dispatch: Dispatch<commentsAction>) => {
        try {
            const res = await CommentsService.getComments()
            dispatch({type: CommentsActionTypes.SET_COMMENTS, payload: res.data})
        } catch(e) {
            console.log(e)
        }
    }
}