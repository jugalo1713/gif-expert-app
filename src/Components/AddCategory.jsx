import { useState } from "react"

const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim()

        if (newInputValue <= 1) return;
        onNewCategory(newInputValue)
        setInputValue('')
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