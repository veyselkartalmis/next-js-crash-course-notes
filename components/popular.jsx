export default function Popular({ movies }) {
    return (<>
        {
            movies.results.map((movie, key) => (
                <div key={key}>
                    <h3>{movie.title}</h3>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                </div>
            ))
        }
    </>
    )
}