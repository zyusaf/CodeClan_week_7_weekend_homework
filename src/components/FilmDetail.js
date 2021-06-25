const FilmDetail = ({film}) => {
    return(
        <section>
            <h2>{film.title}</h2>
            <p>{film.director}</p>
            <p>{film.producer}</p>
            <p>{film.release_date}</p>
            <p>{film.running_time}</p>
            <p>{film.description}</p>
        </section>
    )
}

export default FilmDetail;