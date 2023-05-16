import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [imageSources, setImageSources] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getGifs(category)
            .then(res => {
                setImageSources(res);
                setIsLoading(false);
            });


    }, []);

    return {
        images: imageSources,
        isLoading: isLoading
    }
}
