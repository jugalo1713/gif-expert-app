import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

const GifGrid = ({ category }) => {
    const [imageSources, setImageSources] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(res => {
                setImageSources(res);
                console.log(res);
            });


    }, []);

    return (
        <>
            <h3>
                {category}
            </h3>
            <ul>
                {imageSources && imageSources.map(({ id, url }) => (
                    <li key={id}><img src={url} /></li>
                ))}
            </ul>
        </>
    )
}

export default GifGrid