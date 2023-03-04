import { ADD_TO_CART, DELETE_CART, DIC_CART } from "./constant"

export const addToCart=(product)=>{
   
    return({
        type:ADD_TO_CART,
        payload:product
    })
}
export const removeCart=(id)=>{
   
    return({
        type:DELETE_CART,
        payload:id
    })
}
export const dicCart=(product)=>{
   
    return({
        type:DIC_CART,
        payload:product
    })
}