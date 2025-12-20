function Projects() {
    const projects = [
        {
            title: "Sales Forecasting Model",
            desc: "Predicted quarterly sales with 94% accuracy using Python (Scikit-learn) and historical transactional data.",
            tags: ["Python", "ML", "Pandas"],
            repo: "sales-forecast-2024"
        },
        {
            title: "E-commerce KPI Dashboard",
            desc: "Interactive Tableau dashboard tracking conversion rates, AOV, and customer churn for a retail client.",
            tags: ["Tableau", "SQL", "Data Viz"],
            repo: "ecommerce-dashboard"
        },
        {
            title: "Customer Sentiment Analysis",
            desc: "NLP pipeline processing 50k+ reviews to identify product pain points using NLTK and SQL.",
            tags: ["NLP", "Python", "SQL"],
            repo: "sentiment-analyzer"
        },
         {
            title: "Supply Chain Optimization",
            desc: "Reduced logistics costs by 15% through route optimization algorithms and inventory analysis.",
            tags: ["Excel", "Solver", "PowerBI"],
            repo: "supply-chain-opt"
        }
    ];

    return (
        <section id="projects" className="py-20" data-name="Projects" data-file="components/Projects.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="card group hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-[var(--bg-body)] rounded-lg border border-[var(--border-color)] group-hover:border-[var(--accent-primary)] transition-colors">
                                    <div className="icon-folder text-[var(--accent-primary)] w-6 h-6"></div>
                                </div>
                                <a href={`https://github.com/alsopranab/${project.repo}`} target="_blank" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                                    <div className="icon-external-link w-5 h-5"></div>
                                </a>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">{project.title}</h3>
                            <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">
                                {project.desc}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-[var(--accent-secondary)]">#{tag}</span>
                                ))}
                            </div>
                             <div className="pt-4 border-t border-[var(--border-color)] flex items-center text-xs text-[var(--text-secondary)] font-mono">
                                <div className="icon-github w-3 h-3 mr-1"></div>
                                alsopranab/{project.repo}
                            </div>
                        </div>
                    ))}
                </div>
                
                 <div className="mt-10 text-center">
                    <a href="https://github.com/alsopranab" target="_blank" className="btn-outline inline-flex items-center gap-2">
                        View All Repositories
                        <div className="icon-arrow-right w-4 h-4"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
