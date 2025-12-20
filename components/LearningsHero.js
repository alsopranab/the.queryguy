function LearningsHero() {
    return (
        <section className="relative pt-12 pb-12 overflow-hidden" data-name="LearningsHero" data-file="components/LearningsHero.js">
             {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--accent-primary)]/5 to-transparent pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Data Analytics & <br />
                        <span className="text-[var(--accent-primary)]">Engineering Hub</span>
                    </h1>
                    <p className="text-[var(--text-secondary)] text-lg">
                        From beginner SQL to advanced Data Engineering pipelines. 
                        Practical lessons, code snippets, and structured learning paths to accelerate your career.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    {['SQL', 'Python', 'Excel & DAX', 'Power BI', 'Looker Studio', 'Statistics', 'Machine Learning', 'Data Engineering'].map((tag) => (
                        <button 
                            key={tag}
                            onClick={() => {
                                // Dispatch a custom event to filter the grid
                                window.dispatchEvent(new CustomEvent('filter-lessons', { detail: tag }));
                            }}
                            className="px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all text-sm font-medium"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
