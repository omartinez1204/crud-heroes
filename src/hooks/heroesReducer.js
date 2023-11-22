//Todo: Definiendo el estado inicial
const initialState = [{
    id: new Date().getTime(),
    name: 'Batman',
    poder: 'Tiene mucho Dinero'
},
{
    id: new Date().getTime(),
    name: 'Superman',
    poder: 'fuerza, volar, laser, congeladora, super ojos, super oidos'
},
]

//Todo: Definiendo el reducer del hook userReducer
export const heroesReducer = ( state = initialState, action = {} ) => {
    if (action.type === '[ADD] Heroes'){
        return [
            ...initialState,
            action.payload
        ]
    }
    return state    
}
