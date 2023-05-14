import { useState } from "react"
import AddCategory from "./Components/AddCategory"

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const onNewCategory = (newCategory) => {
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>
                Gif Expert app
            </h1>
            <AddCategory
                type="text"
                onNewCategory={onNewCategory} />

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