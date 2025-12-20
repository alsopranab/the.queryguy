function Header({ theme, toggleTheme }) {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Dashboard', href: '#dashboard' },
        { label: 'Portfolio', href: '#github-portfolio' },
        { label: 'Projects', href: '#projects' },
        { label: 'Learnings', href: 'learnings.html' },
        { label: 'Blog', href: '#blog' },
        { label: 'Media', href: '#media' },
        { label: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (e, href) => {
        if (href.endsWith('.html')) return; // Allow normal navigation for external pages
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-body)]/90 backdrop-blur-md border-b border-[var(--border-color)] shadow-lg' : 'bg-transparent'}`} data-name="Header" data-file="components/Header.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={(e) => scrollToSection(e, '#hero')}>
                        <div className="w-10 h-10 rounded bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center mr-3 shadow-[var(--glow-primary)]">
                            <span className="font-mono font-bold text-white text-lg">PQ</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight hidden sm:block">
                            the<span className="text-[var(--accent-primary)]">.queryguy</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <a 
                                key={item.label} 
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="nav-link"
                            >
                                {item.label}
                            </a>
                        ))}
                        
                        {/* Theme Toggle */}
                        <button 
                            onClick={toggleTheme} 
                            className="p-2 rounded-full hover:bg-[var(--bg-card-hover)] transition-colors text-[var(--accent-primary)]"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? (
                                <div className="icon-sun w-5 h-5"></div>
                            ) : (
                                <div className="icon-moon w-5 h-5"></div>
                            )}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                         <button 
                            onClick={toggleTheme} 
                            className="p-2 rounded-full hover:bg-[var(--bg-card-hover)] transition-colors text-[var(--accent-primary)]"
                        >
                             {theme === 'dark' ? (
                                <div className="icon-sun w-5 h-5"></div>
                            ) : (
                                <div className="icon-moon w-5 h-5"></div>
                            )}
                        </button>
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-[var(--text-primary)] hover:text-[var(--accent-primary)]"
                        >
                             {isMobileMenuOpen ? (
                                <div className="icon-x w-6 h-6"></div>
                            ) : (
                                <div className="icon-menu w-6 h-6"></div>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[var(--bg-card)] border-t border-[var(--border-color)] absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--accent-primary)]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
