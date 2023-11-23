//Todo: Definiendo el estado inicial
const initialState = []

//Todo: Definiendo el reducer del hook userReducer
export const heroesReducer = ( state = initialState, action = {} ) => {
    switch(action.type){
        case '[ADD] Heroes':
            return [
                ...state,
                action.payload
            ]
        case '[DELETE] heroes':
            
        break;
    }

    return state    
}

