function Certifications() {
    return (
        <section className="py-20 bg-[var(--bg-card)] border-y border-[var(--border-color)]" data-name="Certifications" data-file="components/Certifications.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Certifications Grid */}
                    <div>
                        <h2 className="section-title mb-8">Certifications</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { name: "Google Data Analytics", issuer: "Google", color: "text-blue-500" },
                                { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", color: "text-yellow-500" },
                                { name: "Tableau Desktop Specialist", issuer: "Tableau", color: "text-indigo-500" },
                                { name: "IBM Data Science", issuer: "IBM", color: "text-blue-400" }
                            ].map((cert, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-[var(--bg-body)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-primary)] transition-colors">
                                    <div className={`w-12 h-12 rounded bg-[var(--bg-card)] flex items-center justify-center ${cert.color}`}>
                                        <div className="icon-award w-6 h-6"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">{cert.name}</h4>
                                        <p className="text-xs text-[var(--text-secondary)]">{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div>
                        <h2 className="section-title mb-8">Learning Journey</h2>
                        <div className="border-l-2 border-[var(--border-color)] ml-3 space-y-8">
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--accent-primary)] shadow-[var(--glow-primary)]"></div>
                                <span className="text-xs font-mono text-[var(--accent-primary)] mb-1 block">2025 (Upcoming)</span>
                                <h4 className="font-bold text-lg">YouTube Channel Launch</h4>
                                <p className="text-sm text-[var(--text-secondary)]">Official launch of the.queryguy tech education channel.</p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--bg-card)] border-2 border-[var(--text-secondary)]"></div>
                                <span className="text-xs font-mono text-[var(--text-secondary)] mb-1 block">2024</span>
                                <h4 className="font-bold text-lg">Advanced ML Specialization</h4>
                                <p className="text-sm text-[var(--text-secondary)]">Mastering predictive modeling and scikit-learn.</p>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[var(--bg-card)] border-2 border-[var(--text-secondary)]"></div>
                                <span className="text-xs font-mono text-[var(--text-secondary)] mb-1 block">2023</span>
                                <h4 className="font-bold text-lg">First Data Role @ TechFlow</h4>
                                <p className="text-sm text-[var(--text-secondary)]">Transitioned from junior analyst to full-time data role.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
