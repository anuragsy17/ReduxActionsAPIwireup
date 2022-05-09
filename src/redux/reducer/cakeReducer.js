import { Get_Cake } from "../type/types"

const initialCake = {
    numOfCake: 10
}
const cakeReducer = (state = initialCake, action)=>{ 
    switch(action.type){
        case Get_Cake: return {
            ...state,
            numOfCake: state.numOfCake - 1
        }
        default: return state
    }
}
export default cakeReducer; 