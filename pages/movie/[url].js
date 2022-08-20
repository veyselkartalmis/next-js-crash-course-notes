import { useRouter } from "next/router";
import Head from "next/dist/shared/lib/head";

export default function MovieDetail({ movie }) {
    return (
        <div className="movie">
            <Head>
                <title>{movie.title}</title>
            </Head>
            <img className="cover"
                src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
            />
            <h3>{movie.title}</h3>
            <div className="summary">
                {movie.overview}
            </div>
            <style jsx>{`
            .movie {
                width: 1200px;
                margin: 20px auto;
                position: relative;
            }

            h3 {
                font-size: 30px;
                font-weight: bold;
                padding: 20px;
            }

            .summary {
                font-size: 18px;
                color: #fff;
                line-height: 1.7;
                padding:20px;
            }

            .cover {
                position: absolute;
                top: 0;
                left: 0;
                opacity: .5;
                width: 100%;
                height: 300px;
                object-fit: cover;
            }
            `}</style>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=fddd67769c4fdd6647c452e8a8b30070&language=en-US`);
    const movie = await request.json();
    return {
        props: {
            movie
        }
    }
}