import { useState, useEffect } from "react";
import FilmSelector from "../components/FilmSelect";
import FilmDetail from "../components/FilmDetail";
import DirectorSelect from "../components/DirectorSelect";


const GhibliBox = () => {
    const [films, setFilms] = useState([])
    const [directors, setDirectors] = useState([])
    const [filteredFilms, setFilteredFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)
    const [selectedDirector, setSelectedDirector] = useState(null)

    useEffect(() => {
        getFilms();
    }, []);

    useEffect(() => {
        const directorOptions = films.map((film) => {
            return film.director
        });
    
        const unique = (value, index, self) => {
            return self.indexOf(value) === index
        }
    
        const directorsList = directorOptions.filter(unique)
        setDirectors(directorsList);
    }, [films])

    // useEffect(() => {
        // if (!selectedDirector) {
        //     console.log(selectedDirector)
        //     setFilteredFilms(films)
        // } else {
        //     const filmsWithSelectedDirector = films.filter((film) => {
        //         return film.director === selectedDirector
        //     })

        //     setFilteredFilms(filmsWithSelectedDirector)
        // }
    // }, [selectedDirector, films])

    const getFilms = function() {
        fetch ("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(films => {
            setFilms(films) 
            setFilteredFilms(films)
        })
        .catch(err => console.error);
    }

    const onFilmSelected = function(film) {
        setSelectedFilm(film)
    }

    const onDirectorSelected = function(director) {
        if (!director) {
            setFilteredFilms(films)
        } else {
            const filmsWithSelectedDirector = films.filter((film) => {
                return film.director === director
            })

            setFilteredFilms(filmsWithSelectedDirector)
        }
        setSelectedDirector(director)
    }

    return(
        <section>
            <DirectorSelect directors={directors} onDirectorSelected={onDirectorSelected}/>
            <FilmSelector films={filteredFilms} onFilmSelected={onFilmSelected}/>
            {selectedFilm ? <FilmDetail film={selectedFilm}/>: null}
        </section>
    )

}


export default GhibliBox;