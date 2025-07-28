
import { v4 as uuid } from 'uuid';
export const notesReducer = (state , {type , payload}) =>{
    switch(type){
        case 'TITLE':
            return {
                ...state,
                title : payload
            }
        case "TEXT": 
            return {
                ...state,
                text : payload
            }
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes , {text: state.text , title: state.title , id: uuid() , isPinned : false}]
            }
        case 'CLEAR_INPUT':
            return {
                ...state,
                title : '',
                text: ''
            }
        case 'PIN':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload ? {...note , isPinned : !isPinned} : note)
            }
        default:
            return state
    }
}