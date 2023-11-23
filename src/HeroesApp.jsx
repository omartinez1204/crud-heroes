import { useReducer } from 'react'
import { heroesReducer } from './hooks/heroesReducer'
import { AddNewHeroe, ListHeroes } from './components'

const initialState = []

export const HeroesApp = () => {
    const [heroes, dispatch] = useReducer(heroesReducer, initialState)

    const addNewHeroe = ( newHeroe )=>{
        const actionHeroe = {
            type: '[ADD] Heroes',
            payload: newHeroe
        }
        dispatch(actionHeroe)
    }

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
