import Link from 'next/Link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Navbar</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </nav>
    );
}

export default Navbar;