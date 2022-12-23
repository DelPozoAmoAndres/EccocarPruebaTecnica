import { useState, useEffect } from 'react'


export const useSeries = () => {
    const [popularSeries, changePopularSeries] = useState([])

    const apiKey = "12bb2b69299bc5534ff3f0ef888cb2c7"

    async function cargaSeriesPopulares() {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey + "&page=1")
            .then(async response => (await response.json()).results)
            .then(data => {
                changePopularSeries(data.map((serie)=>{serie.type="tv";return serie}))
            })
    }

    useEffect(() => {
        cargaSeriesPopulares();
    }, [])

    return { popularSeries }
}
