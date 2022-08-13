import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>HOMEPAGE</h3>
      <Image src="/image/example.jpg" width="600" height="300" />
    </div>
  )
}
