import { useState } from "react"

const AddCategory = () => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

export default AddCategory