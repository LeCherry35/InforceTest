export interface ModalWindowState {
    hidden?: boolean
}

export enum ModalWindowActionTypes {
    HIDE_WINDOW = 'HIDE_WINDOW',
    SHOW_WINDOW = 'SHOW_WINDOW',
    SET_SUBJECT_ADD = 'SET_SUBJECT_ADD',
    SET_SUBJECT_DELETE = 'SET_SUBJECT_DELETE'
}

interface HideWindowActionInterface {
    type: ModalWindowActionTypes.HIDE_WINDOW
}

interface ShowWindowActionInterface {
    type: ModalWindowActionTypes.SHOW_WINDOW
}

export type ModalWindowAction = HideWindowActionInterface 
    | ShowWindowActionInterface