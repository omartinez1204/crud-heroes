//Todo: Definiendo el estado inicial
const initialState = []

//Todo: Definiendo el reducer del hook userReducer
export const heroesReducer = ( state = initialState, action = {} ) => {
    if (action.type === '[ADD] Heroes'){
        return [
            ...state,
            action.payload
        ]
    }
    return state    
}

