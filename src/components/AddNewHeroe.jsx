import { useForm } from "../hooks/useForm"

export const AddNewHeroe = ( { addNewHeroe } ) => {

    const {nombre, poder, onInputChange, resetForm } = useForm({
        nombre: '',
        poder:  ''
    })

    const onFormSubmit = (event)=>{
        event.preventDefault()
        if (nombre.length<=1 || poder.length<=1) return;

        const newHeroe = {
            id: new Date().getTime(),
            nombre,
            poder,
        }
        addNewHeroe(newHeroe)
        resetForm({nombre:'', poder:''})
    }
    
    return (
        <>
            <h3>Add a new Heroe</h3>
            <hr />
            <form onSubmit={ onFormSubmit }>
                <input
                    type="text"
                    placeholder='Name Heroe'
                    className='form-control'
                    name="nombre"
                    value={ nombre }
                    onChange={ onInputChange }
                />
                <input
                    type="text"
                    placeholder='Powers'
                    className='form-control mt-3'
                    name="poder"
                    value={poder}
                    onChange={ onInputChange }
                />
                <input
                    className='btn btn-outline-primary mt-3'
                    type="submit"
                    value="Add Heroe"
                />
            </form>
        </>
    )
}


