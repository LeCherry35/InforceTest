import { IComment } from "./models/IComment" 
export interface CommentsState {
    comments?: IComment []
}

export enum CommentsActionTypes {
    SET_COMMENTS = 'SET_COMMENTS'
}

interface SetCommentsActionInterface {
    type: CommentsActionTypes.SET_COMMENTS
    payload: IComment []
}

export type commentsAction = SetCommentsActionInterface