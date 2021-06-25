import { useState, useEffect } from "react";
import FilmSelector from "../components/FilmSelect";
import FilmDetail from "../components/FilmDetail";


const GhibliBox = () => {
    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)

    useEffect(() => {
        getFilms();
    }, []);

    const getFilms = function() {
        fetch ("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(films => setFilms(films))
        .catch(err => console.error);
    }

    const onFilmSelected = function(films) {
        setSelectedFilm(films)
    }

    return(
        <section>
            <FilmSelector films={films} onFilmSelected={onFilmSelected}/>
            {selectedFilm ? <FilmDetail film={selectedFilm}/>: null}
        </section>
    )

}


export default GhibliBox;