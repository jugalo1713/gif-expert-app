import { useEffect, useState } from "react"
import AddCategory from "./Components/AddCategory"

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'DBZ'])

    // useEffect(() => {
    // }, [categories])


    const onAddCategory = () => {
        setCategories(['Pokemon', ...categories])
    }

    return (
        <>
            <h1>
                Gif Expert app
            </h1>
            <AddCategory type="text" />
            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                {categories && categories.map((category) => {
                    return (
                        <li key={category}>
                            {category}
                        </li>
                    )
                })}
            </ol>
        </>
    )
}

export default GifExpertApp