function LearningPathBuilder() {
    const [track, setTrack] = React.useState('Full Data Analyst');
    const [days, setDays] = React.useState(7);
    const [generatedPath, setGeneratedPath] = React.useState(null);

    const handleGenerate = () => {
        // Mock generation logic based on selection
        const schedule = [];
        for (let i = 1; i <= days; i++) {
            schedule.push({
                day: i,
                topic: i % 2 === 0 ? "Practical Project & Review" : "Core Concepts & Syntax",
                lessons: i % 2 === 0 ? ["Building a Dashboard", "SQL Case Study"] : ["SQL Basics", "Python Pandas"]
            });
        }
        setGeneratedPath({ track, days, schedule });
    };

    const handleDownloadPDF = async () => {
        if (!generatedPath) return;
        
        const { jsPDF } = window.jspdf;
        const element = document.getElementById('learning-path-card');
        
        try {
            const canvas = await html2canvas(element, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            
            // Add Copyright Footer manually in PDF if needed, though html2canvas captures visual footer
            pdf.setFontSize(10);
            pdf.setTextColor(150);
            pdf.text(`© 2025 The Query Guy | ${track} Path`, 10, pdf.internal.pageSize.getHeight() - 10);
            
            pdf.save(`${track.replace(/\s+/g, '_')}_${days}Days_Plan.pdf`);
        } catch (err) {
            console.error("PDF Generation failed", err);
            alert("Could not generate PDF. Please try again.");
        }
    };

    return (
        <section className="py-12 bg-[var(--bg-card)]/50 border-y border-[var(--border-color)]" data-name="LearningPathBuilder" data-file="components/LearningPathBuilder.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        <div className="icon-map text-[var(--accent-secondary)]"></div>
                        Generate Your Learning Path
                    </h2>
                    <p className="text-[var(--text-secondary)]">Select a track and duration to get a customized schedule.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Controls */}
                    <div className="card h-fit">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Track</label>
                                <select 
                                    value={track}
                                    onChange={(e) => setTrack(e.target.value)}
                                    className="w-full bg-[var(--bg-body)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
                                >
                                    <option>Full Data Analyst</option>
                                    <option>Data Engineer Path</option>
                                    <option>SQL Specialist</option>
                                    <option>Python for Data Science</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Duration (Days)</label>
                                <div className="flex gap-2">
                                    {[7, 14, 30, 60].map(d => (
                                        <button 
                                            key={d}
                                            onClick={() => setDays(d)}
                                            className={`flex-1 py-2 rounded border ${days === d ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]' : 'border-[var(--border-color)] bg-[var(--bg-body)] text-[var(--text-secondary)]'} transition-colors`}
                                        >
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <button onClick={handleGenerate} className="w-full btn-primary">
                                Generate Schedule
                            </button>
                        </div>
                    </div>

                    {/* Preview / Result */}
                    <div className="lg:col-span-2">
                        {generatedPath ? (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-lg">Your Schedule</h3>
                                    <button onClick={handleDownloadPDF} className="btn-outline py-2 px-4 text-xs flex items-center gap-2">
                                        <div className="icon-file-down w-4 h-4"></div>
                                        Download PDF
                                    </button>
                                </div>
                                
                                {/* PDF Capture Area */}
                                <div id="learning-path-card" className="bg-[var(--bg-body)] border border-[var(--border-color)] rounded-xl p-8 relative overflow-hidden">
                                    {/* Watermark */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                                        <div className="text-9xl font-black rotate-[-30deg]">PQ</div>
                                    </div>

                                    <div className="mb-6 border-b border-[var(--border-color)] pb-4">
                                        <h2 className="text-3xl font-bold text-[var(--accent-primary)]">{generatedPath.track}</h2>
                                        <p className="text-[var(--text-secondary)]">{generatedPath.days}-Day Intensive Plan</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {generatedPath.schedule.map((item) => (
                                            <div key={item.day} className="bg-[var(--bg-card)] p-4 rounded border border-[var(--border-color)]">
                                                <div className="text-xs font-mono text-[var(--accent-secondary)] mb-1">Day {item.day}</div>
                                                <div className="font-bold mb-2">{item.topic}</div>
                                                <ul className="text-sm text-[var(--text-secondary)] list-disc list-inside">
                                                    {item.lessons.map((l, i) => <li key={i}>{l}</li>)}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-8 pt-4 border-t border-[var(--border-color)] text-center text-xs text-[var(--text-secondary)] font-mono">
                                        Copyright © 2025 The Query Guy (alsopranab). All rights reserved.
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-[var(--text-secondary)] p-10 border-2 border-dashed border-[var(--border-color)] rounded-xl">
                                <div className="icon-calendar-clock w-12 h-12 mb-4 opacity-50"></div>
                                <p>Select your preferences and click generate to see your custom plan.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
