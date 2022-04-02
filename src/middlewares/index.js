<<<<<<< HEAD
// import { SET_ERROR } from "../actions/type";
import { setError } from "../features/pokemonSlice";

export const logActions = store => next => actionInfo =>{
=======
import { SET_ERROR } from "../actions/type";

export const logActions = store => next => actionInfo => {
>>>>>>> 0afc624823764ea89d3656938073973be232f57c
    console.log('dispatch', actionInfo);
    next(actionInfo);
}

<<<<<<< HEAD
 export const reportError = store => next => actionInfo => {
     const {action} = actionInfo;
     if(action?.type === setError.type){
         console.log(action.payload);
     }

     next(actionInfo);
 }
=======
export const reportError = store => next => actionInfo => {
    const { action } = actionInfo;
    if (action?.type === SET_ERROR) {
        console.error(action.payload);
    }

    next(actionInfo)
}
>>>>>>> 0afc624823764ea89d3656938073973be232f57c
