import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import Popular from '../components/popular';

export default function Home({ movies }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>POPULAR MOVIES</h3>

      <Popular movies={movies} />
    </div>
  )
}

export async function getStaticProps() {
  const request =
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fddd67769c4fdd6647c452e8a8b30070&language=en-US&page=1`);
  const movies = await request.json();
  return {
    props: {
      movies
    }
  }

} 
