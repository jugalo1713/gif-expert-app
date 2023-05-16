import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
    const [imageSources, setImageSources] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(res => {
                setImageSources(res);
            });


    }, []);

    return (
        <>
            <h3>
                {category}
            </h3>
            <div className="card-grid">
                {imageSources && imageSources.map((image) => (
                    <GifItem key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    )
}

export default GifGrid