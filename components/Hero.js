function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid" data-name="Hero" data-file="components/Hero.js">
            
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--accent-secondary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--accent-primary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] mr-2 animate-pulse"></span>
                        Available for freelance & collaboration
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Data Analyst & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                            Tech Content Creator
                        </span>
                    </h1>
                    
                    <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto lg:mx-0">
                        Hi, I'm <strong className="text-[var(--text-primary)]">Pranab</strong>, aka <span className="font-mono text-[var(--accent-primary)]">the.queryguy</span>. 
                        I turn complex data into clear decisions and share technical insights through blogs, dashboards, and video content.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button onClick={() => document.getElementById('blog').scrollIntoView({behavior: 'smooth'})} className="btn-primary flex items-center justify-center gap-2">
                            <div className="icon-layout-dashboard w-5 h-5"></div>
                            Explore Content Hub
                        </button>
                        <a href="https://alsopranab.github.io" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center gap-2">
                            <div className="icon-github w-5 h-5"></div>
                            View Full Portfolio
                        </a>
                    </div>
                </div>

                {/* Visual Dashboard Mockup */}
                <div className="relative hidden lg:block perspective-1000">
                    <div className="relative transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-2xl p-6">
                        {/* Header of fake dashboard */}
                        <div className="flex items-center justify-between mb-6 border-b border-[var(--border-color)] pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-[var(--text-secondary)] font-mono text-xs">analytics_dashboard.py</div>
                        </div>
                        
                        {/* Fake Charts Layout */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[var(--bg-body)] rounded p-4 border border-[var(--border-color)]">
                                <div className="text-xs text-[var(--text-secondary)] mb-2">Total Projects</div>
                                <div className="text-2xl font-bold text-[var(--accent-primary)]">24+</div>
                                <div className="h-12 mt-2 flex items-end gap-1">
                                    {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                        <div key={i} style={{height: `${h}%`}} className="flex-1 bg-[var(--accent-primary)]/50 rounded-t-sm"></div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[var(--bg-body)] rounded p-4 border border-[var(--border-color)]">
                                <div className="text-xs text-[var(--text-secondary)] mb-2">Content Reach</div>
                                <div className="text-2xl font-bold text-[var(--accent-secondary)]">15k+</div>
                                <div className="h-12 mt-2 relative">
                                    <svg viewBox="0 0 100 40" className="w-full h-full stroke-[var(--accent-secondary)] fill-none stroke-2">
                                        <path d="M0 35 Q 20 35, 30 20 T 60 15 T 100 5" />
                                    </svg>
                                </div>
                            </div>
                            <div className="col-span-2 bg-[var(--bg-body)] rounded p-4 border border-[var(--border-color)]">
                                <div className="text-xs text-[var(--text-secondary)] mb-2">Tech Stack Proficiency</div>
                                <div className="flex gap-2 flex-wrap mt-2">
                                    {['SQL', 'Python', 'Tableau', 'PowerBI', 'Excel'].map(tech => (
                                        <span key={tech} className="text-xs px-2 py-1 rounded bg-[var(--border-color)] text-[var(--text-secondary)]">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-10 -left-10 bg-[var(--bg-card)] border border-[var(--accent-primary)] p-4 rounded-lg shadow-[var(--glow-primary)] flex items-center gap-3">
                        <div className="icon-award text-[var(--accent-primary)] w-8 h-8"></div>
                        <div>
                            <div className="text-sm font-bold">Top Rated</div>
                            <div className="text-xs text-[var(--text-secondary)]">Data Analysis</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
