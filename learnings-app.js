function LearningsApp() {
  const [theme, setTheme] = React.useState('dark');
  const [currentView, setCurrentView] = React.useState('home'); // 'home' or 'reader'
  const [selectedLesson, setSelectedLesson] = React.useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true); // Desktop default

  // Load theme
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Sync theme
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (direction) => {
      if (!selectedLesson) return;
      const allLessons = window.ALL_LESSONS || [];
      const currentIndex = allLessons.findIndex(l => l.id === selectedLesson.id);
      
      let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
      
      if (nextIndex >= 0 && nextIndex < allLessons.length) {
          handleLessonSelect(allLessons[nextIndex]);
      }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-body)]" data-name="LearningsApp" data-file="learnings-app.js">
        <LearningsHeader theme={theme} toggleTheme={toggleTheme} onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} showMenuButton={currentView === 'reader'} />
        
        {currentView === 'home' ? (
            <main className="flex-grow pt-20">
                <LearningsHero />
                <LearningPathBuilder />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                     <div className="flex justify-between items-end border-b border-[var(--border-color)] pb-4 mb-6">
                        <h2 className="text-2xl font-bold">Browse All Topics</h2>
                        <button onClick={() => {
                            if(window.ALL_LESSONS && window.ALL_LESSONS.length > 0) handleLessonSelect(window.ALL_LESSONS[0]);
                        }} className="text-[var(--accent-primary)] hover:underline text-sm font-medium">
                            Start Learning form Beginning &rarr;
                        </button>
                     </div>
                </div>
                <LessonGrid onSelectLesson={handleLessonSelect} />
            </main>
        ) : (
            <div className="flex flex-grow pt-20 h-[calc(100vh-80px)] overflow-hidden">
                {/* Sidebar - GFG Style */}
                <CourseSidebar 
                    isOpen={isSidebarOpen} 
                    currentLesson={selectedLesson} 
                    onSelectLesson={handleLessonSelect} 
                    onCloseMobile={() => setIsSidebarOpen(false)}
                />

                {/* Main Content Area */}
                <main className="flex-grow overflow-y-auto h-full relative scroll-smooth" id="main-content-scroll">
                    <LessonReader 
                        lesson={selectedLesson} 
                        onNavigate={handleNavigate}
                    />
                    <Footer simple={true} />
                </main>

                {/* Right TOC (Desktop Only) */}
                <div className="hidden xl:block w-64 border-l border-[var(--border-color)] bg-[var(--bg-body)] overflow-y-auto p-6">
                    <div className="sticky top-0">
                        <h4 className="text-sm font-bold uppercase text-[var(--text-secondary)] mb-4 tracking-wider">In this article</h4>
                        <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                            <li><a href="#" className="hover:text-[var(--accent-primary)]">Introduction</a></li>
                            <li><a href="#" className="hover:text-[var(--accent-primary)]">Theory & Concepts</a></li>
                            <li><a href="#" className="hover:text-[var(--accent-primary)]">Code Example</a></li>
                            <li><a href="#" className="hover:text-[var(--accent-primary)]">Interactive Playground</a></li>
                        </ul>
                        
                         <div className="mt-8 p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)]">
                            <div className="text-xs font-bold mb-2">Did you know?</div>
                            <p className="text-xs text-[var(--text-secondary)]">You can download this entire lesson as a PDF for offline reading.</p>
                         </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LearningsApp />);
