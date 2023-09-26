const Header = () => {
    return (
        <div>
            <div className="navbar container mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                            <li><a>Home</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Contact Us</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>
                    <a className="font-bold text-2xl">Course Registration</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
            </div>


            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/Dzy132t/IMG-20230915-WA0005.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content py-36  text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-8 text-5xl font-bold">Unlock the World of Programming Languages</h1>
                        <p className="mb-5">Dive into the realm of programming languages and elevate your skills with our comprehensive course. From Python and JavaScript to Java and C++, learn the languages that power the digital world. Start your coding journey now and build a solid foundation for a successful career in tech.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;