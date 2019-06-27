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

export const reducerTarefas = (state = initialState, action: {type:string, payload:any}) => {
    let newState = null;
    switch(action.type) {
        case INSERIR_TAREFA: {
            let tarefas = state.tarefas;
            tarefas.push(action.payload); 
            newState = {...state, tarefas:tarefas};
            break;
        } case EDITAR_TAREFA: { 
            newState = {...state, tarefas:[{id:"1", descricao:'Edição', data:'2018-02-01'}]};
            break;
        } case EXCLUIR_TAREFA: { 
            let { tarefas } = state;
            let removeIndex = tarefas.map(t => t.id).indexOf(action.payload);
            tarefas.splice(removeIndex, 1);
            newState = {...state, tarefas};
            break;
        } default:
            newState = state;
    }
    return newState;
}

