import { useState } from "react"
import { AddCategory, GifGrid } from "./Components"

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>
                Gif Expert app
            </h1>
            <AddCategory
                type="text"
                onNewCategory={onAddCategory} />
            {categories && categories.map((category) => {
                return (
                    <GifGrid key={category} category={category} />
                )
            })}

        </>
    )
}

export default GifExpertApp