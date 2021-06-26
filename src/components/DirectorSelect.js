const DirectorSelect = ({directors, onDirectorSelected}) => {
    const handleChangeDirector = function(event) {
        const chosenDirector = directors[event.target.value];
        onDirectorSelected(chosenDirector);
    }

    const directorOptions = directors.map((director, index) => {
        return <option value={index} key={index}>{director}</option>
    })

    return(
        <section>
            <select defaultValue="" onChange={handleChangeDirector}>
                <option value="">Choose a Director</option>
                {directorOptions}
            </select>
        </section>
    )
}


export default DirectorSelect;