
export const ItemHeroe = ({ heroe }) => {

    return (
        <>
            <li
                key={heroe.id}
                className='list-group-item d-flex justify-content-between'>
                    {heroe.nombre}:{heroe.poder} 
                <button className="btn btn-danger">
                    Delete
                </button>
            </li>
        </>
    )
}
