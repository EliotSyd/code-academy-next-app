import link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Ninja List</h1>
            </div>
            <link href="/"><a>Home</a></link>
            <link href="/about"><a>About</a></link>
            <link href="/Contact"><a>Contact</a></link>
        </nav>
    );
}

export default NavBar;