import { Get_IceCream } from "../type/types"

const initialIceCream = {
    numOficeCream: 20
}
const iceCreamReducer = (state = initialIceCream, action)=>{
    switch(action.type){
        case Get_IceCream: return {
            ...state,
            numOficeCream: state.numOficeCream - 1
        }
        default: return state
    }
}
export default iceCreamReducer;