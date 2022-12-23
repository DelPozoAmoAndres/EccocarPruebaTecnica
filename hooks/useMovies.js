import {useState,useEffect} from 'react'

export const useMovies = () => {
    const [popularMovies, changePopularMovies] = useState([])
    

    const apiKey = "12bb2b69299bc5534ff3f0ef888cb2c7"

    async function cargaPeliculas() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey + "&page=1")
            .then(async response => (await response.json()).results)
            .then(data => {
                changePopularMovies(data.map((movie)=>{movie.type="movie";return movie}))
            })
    }

    useEffect(() => {
        cargaPeliculas();
    }, [])

    return {popularMovies}
}
