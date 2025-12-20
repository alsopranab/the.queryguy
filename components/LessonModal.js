function LessonModal({ lesson, onClose }) {
    if (!lesson) return null;

    React.useEffect(() => {
        // Trigger syntax highlighting when modal opens
        if (window.Prism) {
            window.Prism.highlightAll();
        }
    }, [lesson]);

    const handleDownloadLesson = async () => {
        const { jsPDF } = window.jspdf;
        const element = document.getElementById('lesson-content-area');
        
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose} data-name="LessonModal" data-file="components/LessonModal.js">
            <div 
                className="bg-[var(--bg-card)] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl border border-[var(--border-color)] shadow-2xl relative" 
                onClick={e => e.stopPropagation()}
            >
                {/* Header Actions */}
                <div className="sticky top-0 bg-[var(--bg-card)] border-b border-[var(--border-color)] p-4 flex justify-between items-center z-10 backdrop-blur-md bg-opacity-90">
                     <button onClick={onClose} className="p-2 hover:bg-[var(--bg-body)] rounded-full text-[var(--text-secondary)]">
                        <div className="icon-x w-6 h-6"></div>
                    </button>
                    <div className="flex gap-2">
                        <button onClick={handleDownloadLesson} className="btn-outline py-2 px-4 text-xs flex items-center gap-2">
                            <div className="icon-file-down w-4 h-4"></div>
                            Save as PDF
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div id="lesson-content-area" className="p-8 bg-[var(--bg-card)] text-[var(--text-primary)]">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-2 text-sm text-[var(--text-secondary)]">
                            <span className="font-mono text-[var(--accent-primary)]">{lesson.category}</span>
                            <span>•</span>
                            <span>{lesson.duration}</span>
                            <span>•</span>
                            <span>{lesson.difficulty}</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed border-l-4 border-[var(--accent-primary)] pl-4">
                            {lesson.desc}
                        </p>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <div className="icon-book-open w-5 h-5 text-[var(--accent-secondary)]"></div>
                            Theory & Concept
                        </h3>
                        <p className="mb-6 text-[var(--text-secondary)]">{lesson.content.theory}</p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            <div className="bg-[#0f111a] border border-[var(--border-color)] rounded-lg overflow-hidden flex flex-col">
                                <div className="bg-[#1e293b] px-4 py-2 text-xs font-mono text-[var(--text-secondary)] border-b border-[var(--border-color)] flex justify-between items-center">
                                    <span>{lesson.content.codeTitle}</span>
                                    <span className="uppercase">{lesson.category}</span>
                                </div>
                                <pre className="p-4 overflow-x-auto text-sm font-mono flex-grow"><code className={`language-${lesson.content.playground?.language || 'sql'}`}>{lesson.content.code}</code></pre>
                            </div>

                            <div className="bg-[var(--accent-success)]/5 border border-[var(--accent-success)]/20 rounded-lg p-4 flex flex-col">
                                <h4 className="text-sm font-bold text-[var(--accent-success)] mb-2 flex items-center gap-2">
                                    <div className="icon-check-circle w-4 h-4"></div>
                                    Expected Output
                                </h4>
                                <div className="text-sm text-[var(--text-secondary)] font-mono bg-black/20 p-3 rounded flex-grow">
                                    {lesson.content.output}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Playground */}
                    {lesson.content.playground && (
                         <div className="mt-8 pt-8 border-t border-[var(--border-color)]">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <div className="icon-play-circle w-5 h-5 text-[var(--accent-primary)]"></div>
                                Live Code Playground
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-4">
                                Experiment with the code below. For SQL, the database is running live in your browser!
                            </p>
                            <CodePlayground lesson={lesson} />
                         </div>
                    )}
                    
                    <div className="mt-12 pt-8 border-t border-[var(--border-color)] flex justify-between items-center text-xs text-[var(--text-secondary)] font-mono">
                         <div>Generated from The Query Guy Hub</div>
                         <div>Copyright © 2025 alsopranab</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
