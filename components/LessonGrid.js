function LessonGrid({ onSelectLesson }) {
    const [search, setSearch] = React.useState('');
    const [filterCategory, setFilterCategory] = React.useState('All');
    const [lessons, setLessons] = React.useState([]);

    React.useEffect(() => {
        // Load lessons from global data
        if (window.ALL_LESSONS) {
            setLessons(window.ALL_LESSONS);
        }

        // Listen for hero button clicks
        const handleFilterEvent = (e) => {
            setFilterCategory(e.detail);
        };
        window.addEventListener('filter-lessons', handleFilterEvent);
        return () => window.removeEventListener('filter-lessons', handleFilterEvent);
    }, []);

    const filteredLessons = lessons.filter(lesson => {
        const matchesSearch = lesson.title.toLowerCase().includes(search.toLowerCase()) || 
                              lesson.desc.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = filterCategory === 'All' || 
                                // Partial match for "Excel & DAX" vs "Excel"
                                (filterCategory === 'Excel & DAX' ? (lesson.category === 'Excel' || lesson.category === 'DAX') : lesson.category === filterCategory);
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="py-12" data-name="LessonGrid" data-file="components/LessonGrid.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-12">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <div className="icon-search text-[var(--text-secondary)] w-5 h-5"></div>
                    </div>
                    <input 
                        type="text" 
                        className="block w-full pl-10 pr-3 py-4 border border-[var(--border-color)] rounded-full leading-5 bg-[var(--bg-card)] text-[var(--text-primary)] placeholder-gray-500 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] sm:text-sm shadow-lg transition-all" 
                        placeholder="Search lessons (e.g., 'Joins', 'Python', 'ETL')..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Filters Status */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">
                        {filterCategory === 'All' ? 'Latest Lessons' : `${filterCategory} Lessons`}
                    </h2>
                    {filterCategory !== 'All' && (
                        <button 
                            onClick={() => setFilterCategory('All')}
                            className="text-sm text-[var(--accent-primary)] hover:underline"
                        >
                            Clear Filter
                        </button>
                    )}
                </div>

                {/* Grid */}
                {filteredLessons.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredLessons.map(lesson => (
                            <div 
                                key={lesson.id} 
                                onClick={() => onSelectLesson(lesson)}
                                className="card group cursor-pointer hover:-translate-y-1 h-full flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider
                                        ${lesson.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-500' : 
                                          lesson.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-500' : 
                                          'bg-red-500/10 text-red-500'}`
                                    }>
                                        {lesson.difficulty}
                                    </span>
                                    <div className="text-[var(--text-secondary)] text-xs flex items-center gap-1">
                                        <div className="icon-clock w-3 h-3"></div>
                                        {lesson.duration}
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                    {lesson.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2 flex-grow">
                                    {lesson.desc}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {lesson.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-[var(--text-secondary)]">
                        <div className="icon-search-x w-12 h-12 mx-auto mb-4 opacity-50"></div>
                        <p>No lessons found matching your criteria.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
