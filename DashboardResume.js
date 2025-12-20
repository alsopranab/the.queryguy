function DashboardResume() {
    const chartRef = React.useRef(null);
    
    React.useEffect(() => {
        if (!chartRef.current) return;
        
        const ctx = chartRef.current.getContext('2d');
        const ChartJS = window.ChartJS;
        
        const chart = new ChartJS(ctx, {
            type: 'doughnut',
            data: {
                labels: ['SQL', 'Python', 'Visualization', 'Communication'],
                datasets: [{
                    data: [30, 25, 25, 20],
                    backgroundColor: [
                        '#00f0ff', // Cyan
                        '#7000ff', // Purple
                        '#00ff9d', // Green
                        '#ffffff'  // White
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#94a3b8',
                            font: { family: 'Inter', size: 12 }
                        }
                    }
                },
                cutout: '70%'
            }
        });

        return () => chart.destroy();
    }, []);

    return (
        <section id="dashboard" className="py-20 bg-[var(--bg-body)]" data-name="DashboardResume" data-file="components/DashboardResume.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="section-title">Dashboard Resume</h2>
                        <p className="text-[var(--text-secondary)] max-w-xl">
                            A data-driven view of my professional journey. Metrics, skills, and milestones in one view.
                        </p>
                    </div>
                    <button className="btn-outline text-sm py-2 px-4 flex items-center gap-2">
                        <div className="icon-download w-4 h-4"></div>
                        Download PDF Resume
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left: Resume Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Summary */}
                        <div className="card">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <div className="icon-user text-[var(--accent-primary)] w-5 h-5"></div>
                                Professional Summary
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                Results-oriented Data Analyst with 3+ years of experience in interpreting complex datasets to drive business solutions. 
                                Proven track record in creating automated dashboards, optimizing SQL queries, and translating technical findings into actionable strategies. 
                                Passionate about tech education and community building.
                            </p>
                        </div>

                        {/* Experience */}
                        <div className="card">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <div className="icon-briefcase text-[var(--accent-primary)] w-5 h-5"></div>
                                Experience
                            </h3>
                            <div className="space-y-6 border-l-2 border-[var(--border-color)] ml-2 pl-6 relative">
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[var(--accent-primary)] border-4 border-[var(--bg-card)]"></div>
                                    <h4 className="font-bold text-lg">Senior Data Analyst</h4>
                                    <div className="text-[var(--accent-primary)] text-sm mb-1">TechFlow Systems • 2023 - Present</div>
                                    <p className="text-[var(--text-secondary)] text-sm">
                                        Led the migration of legacy reporting to PowerBI, reducing reporting time by 40%. Analyzed user behavior data to improve product retention.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[var(--text-secondary)] border-4 border-[var(--bg-card)]"></div>
                                    <h4 className="font-bold text-lg">Data Analyst</h4>
                                    <div className="text-[var(--accent-primary)] text-sm mb-1">DataVibe Corp • 2021 - 2023</div>
                                    <p className="text-[var(--text-secondary)] text-sm">
                                        Developed SQL pipelines for daily ETL processes. Collaborated with marketing teams to visualize campaign performance metrics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Metrics & KPI */}
                    <div className="space-y-6">
                        
                        {/* Skill Distribution Chart */}
                        <div className="card h-64">
                            <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-4">Skill Distribution</h3>
                            <div className="relative h-40">
                                <canvas ref={chartRef}></canvas>
                                {/* Center Text */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">100%</div>
                                        <div className="text-[10px] text-[var(--text-secondary)]">READY</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* KPI Cards Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="card p-4 flex flex-col items-center justify-center text-center">
                                <div className="text-3xl font-bold text-[var(--accent-primary)] mb-1">45+</div>
                                <div className="text-xs text-[var(--text-secondary)]">Projects Delivered</div>
                            </div>
                            <div className="card p-4 flex flex-col items-center justify-center text-center">
                                <div className="text-3xl font-bold text-[var(--accent-secondary)] mb-1">12</div>
                                <div className="text-xs text-[var(--text-secondary)]">Certifications</div>
                            </div>
                            <div className="card p-4 flex flex-col items-center justify-center text-center">
                                <div className="text-3xl font-bold text-[var(--accent-success)] mb-1">500+</div>
                                <div className="text-xs text-[var(--text-secondary)]">Problems Solved</div>
                            </div>
                             <div className="card p-4 flex flex-col items-center justify-center text-center">
                                <div className="text-3xl font-bold text-white mb-1">5k</div>
                                <div className="text-xs text-[var(--text-secondary)]">Followers</div>
                            </div>
                        </div>

                        {/* Tools list */}
                        <div className="card">
                            <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">Toolbox</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Python', 'SQL', 'Tableau', 'PowerBI', 'Excel', 'Pandas', 'Git', 'Framer', 'Looker'].map(tool => (
                                    <span key={tool} className="px-2 py-1 bg-[var(--bg-body)] border border-[var(--border-color)] rounded text-xs text-[var(--text-primary)]">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
