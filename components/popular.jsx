export default function Popular({ movies }) {
    return (<div className="popular">
        {
            movies.results.map((movie, key) => (
                <div key={key}>
                    <h3>{movie.title}</h3>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                </div>
            ))
        }
        <style jsx>{`
            .popular {
                display: flex;
                flex-wrap: wrap;
                width: 1200px;
                margin: 0 auto;
            }

            .popular div {
                width: 25%;
                position: relative;
                margin-bottom: 50px;
            }

            h3 {
                font-size: 20px;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                color: #fff;
            }
        `}</style>
    </div>
    )
}