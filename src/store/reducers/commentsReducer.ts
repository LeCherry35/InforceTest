import { CommentsState, CommentsActionTypes, commentsAction } from './../../types/comments';
import * as _ from 'lodash'
import { IComment } from '../../types/models/IComment';

const initialState: CommentsState = {
}

export const commentsReducer = (state = initialState, action: commentsAction): CommentsState => {
    switch(action.type) {
        case CommentsActionTypes.SET_COMMENTS:
            return {...state, comments: action.payload}
        case CommentsActionTypes.ADD_COMMENT:
            const cloneAdd = _.cloneDeep(state.comments)
            cloneAdd?.push(action.payload)
            return {...state, comments: cloneAdd}
        case CommentsActionTypes.DELETE_COMMENT:
            const clone: IComment[] | undefined = _.cloneDeep(state.comments)
            const cloneDel = clone?.filter(comment => {
                return comment.id !== action.payload?.id
            })
            return {...state, comments:cloneDel}
        default:
            return state
    }
}