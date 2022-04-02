// import { SET_ERROR } from "../actions/type";
import { setError } from "../features/pokemonSlice";

export const logActions = store => next => actionInfo =>{
    console.log('dispatch', actionInfo);
    next(actionInfo);
}

 export const reportError = store => next => actionInfo => {
     const {action} = actionInfo;
     if(action?.type === setError.type){
         console.log(action.payload);
     }

     next(actionInfo);
 }
