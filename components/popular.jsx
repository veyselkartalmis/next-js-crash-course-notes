import Link from "next/link";

export default function Popular({ movies }) {
    return (<div className="popular">
        {
            movies.results.map((movie, key) => (
                <Link className="container" key={key} href={`/movie/${movie.id}`}>
                    <a href="">
                        <h3>{movie.title}</h3>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                    </a>
                </Link>
            ))
        }
        <style jsx>{`
            .popular {
                display: flex;
                flex-wrap: wrap;
                width: 1200px;
                gap: 10px;
                margin: 0 auto;
            }

            .popular a {
                width: calc(25% - 50px);
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

            img {width: 100%}
        `}</style>
    </div>
    )
}