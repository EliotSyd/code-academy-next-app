import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Navbar</h1>
            </div>
            <link href="/"><a>Home</a></link>
            <link href="/about"><a>About</a></link>
            <link href="/contact"><a>Contact</a></link>
        </nav>
    );
}

export default Navbar;