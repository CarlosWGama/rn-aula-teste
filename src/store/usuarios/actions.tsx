import { LOGAR, DESLOGAR } from "./actionTypes";

export const logar = (email) => {
    return {
        type: LOGAR, 
        payload: email
    }
}

export const deslogar = () => {
    return { type: DESLOGAR }
}

const initialState = {
    email: ''
}

export const reducerUsuarios = (state = initialState, action: {type:string, payload:any}) => {
    switch(action.type) {
        case LOGAR: 
            return {...state, email:action.payload}
        case DESLOGAR: 
            return {...state, email:null}
        default:
            return state;
    }
}

