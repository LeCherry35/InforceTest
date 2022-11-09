import { IComment } from "./models/IComment" 
export interface CommentsState {
    comments?: IComment []
}

export enum CommentsActionTypes {
    SET_COMMENTS = 'SET_COMMENTS',
    ADD_COMMENT = 'ADD_COMMENT'
}

interface SetCommentsActionInterface {
    type: CommentsActionTypes.SET_COMMENTS
    payload: IComment []
}
interface AddCommentActionInterface {
    type: CommentsActionTypes.ADD_COMMENT
    payload: IComment 
}

export type commentsAction = SetCommentsActionInterface | AddCommentActionInterface