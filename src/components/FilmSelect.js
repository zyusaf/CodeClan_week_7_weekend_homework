const FilmSelector = ({films, onFilmSelected}) => {

    const handleChangeFilm = function(event) {
        const chosenFilm = films[event.target.value];
        onFilmSelected(chosenFilm);
    }

    const filmOptions = films.map((film, index) => {
        return <option value={index} key={index}>{film.title}</option>
    });

    return(
        <select defaultValue="" onChange={handleChangeFilm}>
            <option value="">Choose a Film</option>
            {filmOptions}
        </select>
    )
}

export default FilmSelector;