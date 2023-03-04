import { ADD_TO_CART, DELETE_CART, DIC_CART } from "./constant"


const initialstate={
    carts:[]
}

export const Reducer=(state=initialstate,action)=>
{
switch(action.type){
     case ADD_TO_CART:

     const indexItem=state.carts.findIndex((item)=>item.id===action.payload.id)
        if(indexItem>=0){
            state.carts[indexItem].qnty+=1
        }else{
            const temp={...action.payload,qnty:1}
            return{
                ...state,
              carts:[...state.carts,temp]
            }
        }
     
    
        case DELETE_CART:
            let updt=state.carts.filter((item)=>{
                return item.id!==action.payload
            })

  return {...state,
            carts:updt
        }


 //dicreament carts

case DIC_CART:
    const dicIndex=state.carts.findIndex((item)=>item.id===action.payload.id)
if(state.carts[dicIndex].qnty>=1){
    const dicItme=state.carts[dicIndex].qnty -=1;
    return{
        ...state,
        carts:[...state.carts]
    }
}else if(state.carts[dicIndex].qnty===1){
      let updt=state.carts.filter((item)=>{
            return item.id!==action.payload
        })

return {...state,
        carts:updt
    }
}

    default:
        return state
}
}