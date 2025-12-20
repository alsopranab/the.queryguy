function LearningsHeader({ theme, toggleTheme, onMenuClick, showMenuButton }) {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-body)]/90 backdrop-blur-md border-b border-[var(--border-color)]" data-name="LearningsHeader" data-file="components/LearningsHeader.js">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-4">
                        {/* Sidebar Toggle (Visible only when reader is active) */}
                        {showMenuButton && (
                            <button 
                                onClick={onMenuClick}
                                className="p-2 -ml-2 rounded-md hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)]"
                            >
                                <div className="icon-menu w-6 h-6"></div>
                            </button>
                        )}

                        {/* Logo & Back */}
                        <div className="flex items-center gap-4">
                             <a href="index.html" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors hidden md:flex items-center gap-2 text-sm">
                                <div className="icon-arrow-left w-4 h-4"></div>
                                Hub
                            </a>
                            <div className="h-6 w-px bg-[var(--border-color)] hidden md:block"></div>
                            <div className="flex items-center cursor-pointer" onClick={() => window.location.reload()}>
                                <div className="w-8 h-8 rounded bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center mr-3 shadow-[var(--glow-primary)]">
                                    <span className="font-mono font-bold text-white text-sm">PQ</span>
                                </div>
                                <span className="font-bold text-lg tracking-tight hidden sm:block">
                                    Learnings <span className="text-[var(--accent-primary)]">Hub</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Search & Actions */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex relative">
                             <input 
                                type="text" 
                                placeholder="Search tutorials..." 
                                className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:border-[var(--accent-primary)] w-64 transition-all"
                             />
                             <div className="absolute right-3 top-2 text-[var(--text-secondary)]">
                                <div className="icon-search w-4 h-4"></div>
                             </div>
                        </div>

                         {/* Theme Toggle */}
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
                    </div>
                </div>
            </div>
        </header>
    );
}
