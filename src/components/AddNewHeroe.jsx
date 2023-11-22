import { useForm } from "../hooks/useForm"

export const AddNewHeroe = () => {

    const {nombre, poder, onInputChange, resetForm } = useForm({
        nombre: '',
        poder:  ''
    })

    const onFormSubmit = (event)=>{
        event.preventDefault()
        const newHeroe = {
            id: new Date().getTime(),
            nombre,
            poder,
        }
        //todo: mandar el nuevo heroe al reducer
        console.log(newHeroe)
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


