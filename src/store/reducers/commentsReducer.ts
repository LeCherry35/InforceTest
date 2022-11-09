import { CommentsState, CommentsActionTypes, commentsAction } from './../../types/comments';
import * as _ from 'lodash'

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
        default:
            return state
    }
}