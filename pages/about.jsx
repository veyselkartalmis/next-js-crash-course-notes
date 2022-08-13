import Head from "next/head";
import Layout from "../.next/components/layout";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About Page</title>
            </Head>
            <h1>ABOUT PAGE</h1>

            <style jsx>{`
                h1 {font-size: 20px; font-weight: 500; color: orangered;}
            `}</style>
        </Layout>
    )
}