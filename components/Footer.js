function Footer({ simple }) {
    if (simple) return null; // In reader mode, we often don't want a huge footer, or we render a minimal one inside the reader
    
    return (
        <footer className="bg-[var(--bg-card)] border-t border-[var(--border-color)] py-12" data-name="Footer" data-file="components/Footer.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                
                <div className="text-center md:text-left">
                    <div className="font-bold text-xl mb-1">Pranab</div>
                    <div className="text-sm text-[var(--text-secondary)]">Data Analyst & Tech Content Creator</div>
                    <div className="text-xs text-[var(--text-secondary)] mt-2">© 2025 The Query Guy. All rights reserved.</div>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/alsopranab" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                        <div className="icon-github w-5 h-5"></div>
                    </a>
                    <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                        <div className="icon-linkedin w-5 h-5"></div>
                    </a>
                    <a href="https://instagram.com/the.queryguy" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                        <div className="icon-instagram w-5 h-5"></div>
                    </a>
                    <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                        <div className="icon-twitter w-5 h-5"></div>
                    </a>
                </div>
            </div>
        </footer>
    );
}
