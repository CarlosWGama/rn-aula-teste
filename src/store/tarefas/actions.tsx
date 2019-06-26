import { INSERIR_TAREFA, EDITAR_TAREFA, EXCLUIR_TAREFA } from './actionTypes';

export const adicionarTarefa = (tarefa) => { 
    return {
        type: INSERIR_TAREFA, 
        payload: tarefa 
    }
}

export const editarTarefa = (tarefa) => {
    return {
        type: EDITAR_TAREFA, 
        payload: tarefa 
    }
}

export const excluirTarefa = (id:number) => {
    return {
        type: EXCLUIR_TAREFA, 
        payload: id
    }
}

const initialState = {
    tarefas: []
}

export const reducerTarefas = (state = initialState, action: {type:string, data:any}) => {
    let newState = null;
    switch(action.type) {
        case INSERIR_TAREFA: 
            let tarefas = state.tarefas;
            tarefas.push('Nova tarefa'); 
            newState = {...state, tarefas:tarefas};
            break;
        case EDITAR_TAREFA: 
            newState = {...state, tarefas:['Editou']};
            break;
        case EXCLUIR_TAREFA: 
            newState = {...state, tarefas:[]};
            break;
        default:
            newState = state;
    }
    return newState;
}

