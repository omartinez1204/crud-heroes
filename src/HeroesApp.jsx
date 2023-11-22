import { useReducer } from 'react'
import { heroesReducer } from './hooks/heroesReducer'
import { AddNewHeroe, ListHeroes } from './components'

const initialState = [{
    id: new Date().getTime(),
    name: 'Batman',
    poder: 'Tiene mucho Dinero'
},
{
    id: new Date().getTime() * 3,
    name: 'Superman',
    poder: 'fuerza, volar, laser, congeladora, super ojos, super oidos'
},
]

export const HeroesApp = () => {
    const [heroes, dispatch] = useReducer(heroesReducer, initialState)
    return (
        <>
            <div className='container row'>
                <div className="col-5">
                    <ListHeroes listHeroes={heroes}/>
                </div>
                <div className='col-7'>
                    <AddNewHeroe/>
                </div>
            </div>
        </>
    )
}
