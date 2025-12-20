function CourseSidebar({ isOpen, currentLesson, onSelectLesson, onCloseMobile }) {
    // Group lessons by category
    const groupedLessons = React.useMemo(() => {
        const groups = {};
        if (window.ALL_LESSONS) {
            window.ALL_LESSONS.forEach(lesson => {
                if (!groups[lesson.category]) {
                    groups[lesson.category] = [];
                }
                groups[lesson.category].push(lesson);
            });
        }
        return groups;
    }, []);

    const [expandedCategories, setExpandedCategories] = React.useState(Object.keys(groupedLessons));

    const toggleCategory = (category) => {
        setExpandedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category) 
                : [...prev, category]
        );
    };

    // Auto-expand the category of the current lesson
    React.useEffect(() => {
        if (currentLesson && !expandedCategories.includes(currentLesson.category)) {
            setExpandedCategories(prev => [...prev, currentLesson.category]);
        }
    }, [currentLesson]);

    return (
        <>
            {/* Mobile Overlay */}
            <div 
                className={`md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onCloseMobile}
            ></div>

            {/* Sidebar Container */}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-40 w-72 bg-[var(--bg-card)] border-r border-[var(--border-color)] 
                transform transition-transform duration-300 ease-in-out flex flex-col
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:hidden'}
                md:translate-x-0 md:h-full
            `}>
                <div className="p-4 border-b border-[var(--border-color)] flex justify-between items-center bg-[var(--bg-card)]">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        <div className="icon-book w-5 h-5 text-[var(--accent-primary)]"></div>
                        Course Index
                    </h3>
                    <button onClick={onCloseMobile} className="md:hidden text-[var(--text-secondary)]">
                        <div className="icon-x w-6 h-6"></div>
                    </button>
                </div>

                <div className="overflow-y-auto flex-grow p-4 custom-scrollbar">
                    {Object.entries(groupedLessons).map(([category, lessons]) => (
                        <div key={category} className="mb-4">
                            <button 
                                onClick={() => toggleCategory(category)}
                                className="w-full flex items-center justify-between p-2 rounded hover:bg-[var(--bg-card-hover)] text-left font-bold text-sm text-[var(--text-primary)] transition-colors"
                            >
                                <span>{category}</span>
                                <div className={`icon-chevron-down w-4 h-4 transition-transform duration-200 ${expandedCategories.includes(category) ? 'rotate-180' : ''}`}></div>
                            </button>
                            
                            {/* Accordion Content */}
                            <div className={`mt-1 pl-2 space-y-1 overflow-hidden transition-all duration-300 ${expandedCategories.includes(category) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                {lessons.map(lesson => (
                                    <button
                                        key={lesson.id}
                                        onClick={() => {
                                            onSelectLesson(lesson);
                                            // on mobile, close sidebar after selection
                                            if (window.innerWidth < 768) onCloseMobile();
                                        }}
                                        className={`
                                            w-full text-left px-3 py-2 rounded text-xs border-l-2 transition-all flex items-center gap-2
                                            ${currentLesson && currentLesson.id === lesson.id 
                                                ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] font-medium' 
                                                : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]'}
                                        `}
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${currentLesson && currentLesson.id === lesson.id ? 'bg-[var(--accent-primary)]' : 'bg-gray-600'}`}></div>
                                        <span className="truncate">{lesson.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="p-4 border-t border-[var(--border-color)] text-xs text-center text-[var(--text-secondary)]">
                    <p>Track progress (Coming Soon)</p>
                    <div className="w-full h-1 bg-[var(--bg-body)] rounded-full mt-2 overflow-hidden">
                        <div className="w-1/3 h-full bg-[var(--accent-success)]"></div>
                    </div>
                </div>
            </aside>
        </>
    );
}
