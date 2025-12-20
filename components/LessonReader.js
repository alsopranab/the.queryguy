function LessonReader({ lesson, onNavigate }) {
    if (!lesson) return <div className="p-10 text-center text-[var(--text-secondary)]">Select a lesson to start learning</div>;

    React.useEffect(() => {
        if (window.Prism) {
            window.Prism.highlightAll();
        }
    }, [lesson]);

    const handleDownloadPDF = async () => {
        const { jsPDF } = window.jspdf;
        const element = document.getElementById('lesson-print-area');
        
        try {
            const canvas = await html2canvas(element, { scale: 2, backgroundColor: '#050507' });
            const imgData = canvas.toDataURL('image/png');
            
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${lesson.title.replace(/\s+/g, '_')}.pdf`);
        } catch (err) {
            console.error(err);
            alert('Failed to generate PDF');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10">
            {/* Breadcrumbs */}
            <div className="flex items-center text-xs text-[var(--text-secondary)] mb-6 font-mono">
                <span className="hover:text-[var(--accent-primary)] cursor-pointer">Learnings</span>
                <span className="mx-2">/</span>
                <span className="hover:text-[var(--accent-primary)] cursor-pointer">{lesson.category}</span>
                <span className="mx-2">/</span>
                <span className="text-[var(--text-primary)]">{lesson.title}</span>
            </div>

            <div id="lesson-print-area" className="bg-[var(--bg-body)]"> {/* Wrapper for PDF capture */}
                {/* Title Section */}
                <div className="mb-8 pb-8 border-b border-[var(--border-color)]">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{lesson.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className={`px-2 py-0.5 rounded-full border ${lesson.difficulty === 'Beginner' ? 'border-green-500 text-green-500' : 'border-yellow-500 text-yellow-500'} text-xs font-bold uppercase`}>
                            {lesson.difficulty}
                        </span>
                        <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                            <div className="icon-clock w-4 h-4"></div>
                            {lesson.duration} Read
                        </div>
                        <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                            <div className="icon-calendar w-4 h-4"></div>
                            Last Updated: Dec 20, 2024
                        </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                         <button onClick={handleDownloadPDF} className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border-color)] hover:border-[var(--accent-primary)] text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                            <div className="icon-printer w-4 h-4"></div>
                            Print / PDF
                        </button>
                         <button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[var(--border-color)] hover:border-[var(--accent-primary)] text-xs text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                            <div className="icon-share-2 w-4 h-4"></div>
                            Share
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="prose prose-invert max-w-none prose-lg">
                    <div className="bg-[var(--bg-card)] border-l-4 border-[var(--accent-primary)] p-4 mb-8 rounded-r-lg">
                        <p className="text-lg italic m-0">{lesson.desc}</p>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[var(--text-primary)]">
                        <div className="w-8 h-8 rounded bg-[var(--accent-secondary)] flex items-center justify-center text-white text-sm">1</div>
                        Introduction & Theory
                    </h2>
                    <p className="mb-8 text-[var(--text-secondary)] leading-relaxed text-base">
                        {lesson.content.theory}
                    </p>

                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[var(--text-primary)]">
                        <div className="w-8 h-8 rounded bg-[var(--accent-secondary)] flex items-center justify-center text-white text-sm">2</div>
                        Code Example
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-4">
                        Review the syntax below. This is the standard approach for <strong>{lesson.title}</strong>.
                    </p>

                    {/* Static Code Block */}
                    <div className="relative group rounded-lg overflow-hidden border border-[var(--border-color)] bg-[#0d1117] mb-8">
                        <div className="flex justify-between items-center px-4 py-2 bg-[#161b22] border-b border-[var(--border-color)]">
                            <span className="text-xs font-mono text-gray-400">{lesson.content.codeTitle}</span>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => navigator.clipboard.writeText(lesson.content.code)}
                                    className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white" 
                                    title="Copy Code"
                                >
                                    <div className="icon-copy w-4 h-4"></div>
                                </button>
                            </div>
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300 m-0">
                            <code className={`language-${lesson.content.playground?.language || 'sql'}`}>{lesson.content.code}</code>
                        </pre>
                    </div>

                    {/* Output Block */}
                    <div className="mb-8">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-success)] mb-2 flex items-center gap-2">
                            <div className="icon-terminal w-4 h-4"></div>
                            Expected Output
                        </h4>
                        <div className="p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg font-mono text-sm text-[var(--text-secondary)]">
                            {lesson.content.output}
                        </div>
                    </div>

                    {/* Interactive Section */}
                    {lesson.content.playground && (
                        <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[var(--text-primary)]">
                                <div className="w-8 h-8 rounded bg-[var(--accent-secondary)] flex items-center justify-center text-white text-sm">3</div>
                                Interactive Playground
                            </h2>
                            <p className="text-[var(--text-secondary)] mb-4">
                                Don't just read—practice! Run the code below directly in your browser.
                            </p>
                            <CodePlayground lesson={lesson} />
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-16 grid grid-cols-2 gap-4 border-t border-[var(--border-color)] pt-8">
                <button 
                    onClick={() => onNavigate('prev')}
                    className="flex flex-col items-start p-4 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-card)] transition-all group"
                >
                    <span className="text-xs text-[var(--text-secondary)] mb-1 flex items-center gap-1 group-hover:text-[var(--accent-primary)]">
                        <div className="icon-arrow-left w-3 h-3"></div> Previous
                    </span>
                    <span className="font-bold text-sm md:text-base">Previous Lesson</span>
                </button>
                <button 
                    onClick={() => onNavigate('next')}
                    className="flex flex-col items-end p-4 rounded-lg border border-[var(--border-color)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-card)] transition-all group"
                >
                    <span className="text-xs text-[var(--text-secondary)] mb-1 flex items-center gap-1 group-hover:text-[var(--accent-primary)]">
                        Next <div className="icon-arrow-right w-3 h-3"></div>
                    </span>
                    <span className="font-bold text-sm md:text-base">Next Lesson</span>
                </button>
            </div>
            
            {/* Copyright for Reader */}
            <div className="mt-8 pt-8 text-center text-xs text-[var(--text-secondary)]">
                © 2025 The Query Guy. All content is free for educational use.
            </div>
        </div>
    );
}
