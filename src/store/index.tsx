import { createStore, combineReducers } from 'redux';
import { reducerUsuarios } from './usuarios/actions';
import { reducerTarefas } from './tarefas/actions';
 
const reducers = combineReducers({
    usuarios: reducerUsuarios, 
    tarefas: reducerTarefas
})

export const store = createStore(reducers);