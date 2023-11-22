import { ItemHeroe } from "./ItemHeroe"

export const ListHeroes = ({listHeroes}) => {
    return (
        <>
            <h3> List Heroes </h3>
            <hr />
            <ul className='list-group'>
                {
                    listHeroes.map( (heroe) =>( 
                        <ItemHeroe key={heroe.id} heroe={heroe}/> 
                    ))
                }
            </ul>
        </>
    )
}
