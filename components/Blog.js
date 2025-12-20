function Blog() {
    const posts = [
        {
            title: "Understanding SQL Window Functions",
            date: "Dec 10, 2024",
            excerpt: "A deep dive into RANK, LEAD, and LAG. Stop writing complex subqueries and start using window functions.",
            tags: ["SQL", "Tutorial"],
            readTime: "5 min read"
        },
        {
            title: "Building Your First Tableau Dashboard",
            date: "Nov 28, 2024",
            excerpt: "Step-by-step guide to creating an interactive sales dashboard from a raw CSV file.",
            tags: ["Tableau", "Dashboard"],
            readTime: "8 min read"
        },
        {
            title: "Python vs Excel for Data Analysis",
            date: "Oct 15, 2024",
            excerpt: "When to switch from spreadsheets to scripts? Analyzing the pros, cons, and performance limits.",
            tags: ["Python", "Career"],
            readTime: "6 min read"
        }
    ];

    return (
        <section id="blog" className="py-20 bg-[var(--bg-card)] border-y border-[var(--border-color)]" data-name="Blog" data-file="components/Blog.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="section-title">Blog & Articles</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="flex flex-col h-full bg-[var(--bg-body)] rounded-lg p-6 border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-all group">
                            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[var(--text-secondary)]">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">{post.title}</h3>
                            <p className="text-[var(--text-secondary)] text-sm mb-6 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-[var(--bg-card)] rounded text-[var(--text-secondary)]">{tag}</span>
                                    ))}
                                </div>
                                <a href="#" className="text-[var(--accent-primary)] hover:translate-x-1 transition-transform">
                                    <div className="icon-arrow-right w-5 h-5"></div>
                                </a>
                            </div>
                        </div>
                    ))}
                 </div>
                 <div className="mt-8 text-center">
                    <p className="text-[var(--text-secondary)] text-sm">More tutorials and deep dives coming soon.</p>
                 </div>
            </div>
        </section>
    );
}
