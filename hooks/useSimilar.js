import {useState,useEffect} from 'react'

export const useSimilar = (id,type) => {
    const [similar, changeSimilar] = useState([])
    

    const apiKey = "12bb2b69299bc5534ff3f0ef888cb2c7"

    async function cargarSimilares() {
        fetch("https://api.themoviedb.org/3/"+type+"/"+id+"/similar?api_key=" + apiKey + "&page=1")
            .then(async response => (await response.json()).results)
            .then(data => {
                changeSimilar(data)
            })
    }

    useEffect(() => {
        cargarSimilares();
    }, [])

    return {similar}
}
