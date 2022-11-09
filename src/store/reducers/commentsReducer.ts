import { CommentsState, CommentsActionTypes, commentsAction } from './../../types/comments';
const initialState: CommentsState = {

}
export const commentsReducer = (state = initialState, action: commentsAction): CommentsState => {
    switch(action.type) {
        case CommentsActionTypes.SET_COMMENTS:
            return {...state, comments: action.payload}
        default:
            return state
    }
}