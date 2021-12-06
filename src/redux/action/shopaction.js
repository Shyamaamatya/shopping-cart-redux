// import * as actionTypes from "../shop/shoptype";
// import {ADD_TO_CART, REMOVE_ITEM, SET_TO_CART, CHANGE_QUANTITY } from '../../shop/shoptype';

import { ADD_TO_CART, REMOVE_FROM_CART, SET_TO_CART } from "../shop/shoptype";


export const addToCart=(data)=>{
    console.log("data from action", data)
    return{
        type: ADD_TO_CART ,
        payload:data
    
}
}

export const removeFromCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        payLoad: data,
    
    }
}
export const setToCart = (data) => ({
    type: SET_TO_CART,
    payLoad: data,
});

// export const addToCart = (itemId) => {
//     return {
//         type: actionTypes.ADD_TO_CART,
//         payload: {
//             id: itemId
//         }
//     }
// }

// export const removeFromCart = (itemId) => {
//     return {
//         type: actionTypes.REMOVE_FROM_CART,
//         payload: {
//             id: itemId
//         }
//     }
// }

// export const adjustQty = (itemId, value) => {
//     return {
//         type: actionTypes.ADJUST_QTY,
//         payload: {
//             id: itemId,
//             qty: value
//         }
//     }
// }

// export const loadCurrentItem = (itemId) => {
//     return {
//         type: actionTypes.LOAD_CURRENT_ITEM,
//         payload: {
//             id: itemId
//         }
//     }
// }
