function GitHubPortfolio() {
    return (
        <section id="github-portfolio" className="py-12 bg-[var(--bg-card)] border-y border-[var(--border-color)]" data-name="GitHubPortfolio" data-file="components/GitHubPortfolio.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-start gap-4">
                    <div className="p-4 bg-gray-900 rounded-lg hidden sm:block">
                        <div className="icon-github text-white w-10 h-10"></div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Detailed Portfolio on GitHub</h3>
                        <p className="text-[var(--text-secondary)] max-w-xl">
                            This site acts as my content hub. For deep-dive technical case studies, code repositories, and detailed project documentation, please visit my dedicated GitHub Pages portfolio.
                        </p>
                    </div>
                </div>
                <a 
                    href="https://alsopranab.github.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-shrink-0 btn-primary group flex items-center gap-2"
                >
                    alsopranab.github.io
                    <div className="icon-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform"></div>
                </a>
            </div>
        </section>
    );
}
