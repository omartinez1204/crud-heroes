import { useReducer, useEffect } from 'react'
import { heroesReducer } from './hooks/heroesReducer'
import { AddNewHeroe, ListHeroes } from './components'

const initialState = [{
    id: new Date().getTime(),
    nombre:'Iron Man',
    poder:'Inteligencia, Poder economico, vision futurista'
}]

const init = ()=>{
    return JSON.parse(localStorage.getItem('heroes')) || [];
}

export const HeroesApp = () => {
    const [heroes, dispatch] = useReducer(heroesReducer, initialState, init )

    const addNewHeroe = ( newHeroe )=>{
        const actionHeroe = {
            type: '[ADD] Heroes',
            payload: newHeroe
        }
        dispatch(actionHeroe)
    }

    useEffect(() => {
        localStorage.setItem('heroes', JSON.stringify(heroes)  )
    }, [ heroes ])
    

    return (
        <>
            <div className='container row'>
                <div className="col-5">
                    {
                        heroes.length ===0 
                        ? <h3>No Heroes yet</h3>
                        : <ListHeroes listHeroes={heroes}/>
                    }
                </div>
                <div className='col-7'>
                    <AddNewHeroe addNewHeroe={ addNewHeroe }/>
                </div>
            </div>
        </>
    )
}
