function ProblemSolving() {
    return (
        <section className="py-12 bg-[var(--bg-card)]/50 border-y border-[var(--border-color)]" data-name="ProblemSolving" data-file="components/ProblemSolving.js">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Problem Solving & Algorithms</h3>
                        <p className="text-[var(--text-secondary)]">Sharpening logic daily. Active on competitive programming platforms.</p>
                    </div>
                    <div className="flex gap-6">
                        {/* LeetCode Mock Badge */}
                        <a href="#" className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border-color)] p-3 rounded-lg hover:border-yellow-500 transition-colors">
                            <div className="w-10 h-10 bg-yellow-500/10 rounded flex items-center justify-center">
                                <div className="icon-code text-yellow-500 w-6 h-6"></div>
                            </div>
                            <div>
                                <div className="text-xs text-[var(--text-secondary)]">LeetCode</div>
                                <div className="font-bold">250+ Solved</div>
                            </div>
                        </a>
                         {/* HackerRank Mock Badge */}
                        <a href="#" className="flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border-color)] p-3 rounded-lg hover:border-green-500 transition-colors">
                            <div className="w-10 h-10 bg-green-500/10 rounded flex items-center justify-center">
                                <div className="icon-terminal text-green-500 w-6 h-6"></div>
                            </div>
                            <div>
                                <div className="text-xs text-[var(--text-secondary)]">HackerRank</div>
                                <div className="font-bold">5 Stars (SQL)</div>
                            </div>
                        </a>
                    </div>
                </div>
             </div>
        </section>
    )
}
