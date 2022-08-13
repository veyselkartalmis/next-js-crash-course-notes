import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link href="/"><a>Homepage</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                    <li><Link href="/blog/post"><a>Post</a></Link></li>
                </ul>
            </nav>
            <style jsx>{`
                .header {
                    border-bottom: 1px solid #ddd;
                    background: #fff 
                }

                .header ul {display: flex;}
                .header ul li a {
                    display: flex;
                    text-decoration: none;
                    height: 60px;
                    align-items: center;
                    padding: 0 20px;
                    color: #333;
                }
            `}</style>
        </header>
    )
}