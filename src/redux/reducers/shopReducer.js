// import * as actionTypes from "./shoptype";

import { ADD_TO_CART, REMOVE_FROM_CART, SET_TO_CART } from "../shop/shoptype";

// const shopReducer = (state, action) => {

// }

const initialData={
    list:[]
}
const shopReducer=(state=initialData,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const{payload}=action;
            console.log("data from reducer", payload)
            return{
                ...state, // state ma bhayeko
                list:[
                    ...state.list, // state ma paila input gareko
                    payload
            ]

            }
            case REMOVE_FROM_CART:
            return {
                ...state,
                list: action.payLoad
            }

            case SET_TO_CART:
            return {
                ...state,
                list: action.payLoad
            }

            default:return state;
}
}

export default shopReducer;