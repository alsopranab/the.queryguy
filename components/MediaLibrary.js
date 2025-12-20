function MediaLibrary() {
    const [activeTab, setActiveTab] = React.useState('videos');

    return (
        <section id="media" className="py-20" data-name="MediaLibrary" data-file="components/MediaLibrary.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <h2 className="section-title mb-0">Media Library</h2>
                    <div className="flex space-x-2 bg-[var(--bg-card)] p-1 rounded-lg border border-[var(--border-color)] mt-4 md:mt-0">
                        <button 
                            onClick={() => setActiveTab('videos')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'videos' ? 'bg-[var(--accent-primary)] text-black' : 'text-[var(--text-secondary)] hover:text-white'}`}
                        >
                            Videos
                        </button>
                        <button 
                            onClick={() => setActiveTab('images')}
                             className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'images' ? 'bg-[var(--accent-primary)] text-black' : 'text-[var(--text-secondary)] hover:text-white'}`}
                        >
                            Gallery
                        </button>
                    </div>
                </div>

                <div className="min-h-[300px]">
                    {activeTab === 'videos' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Placeholder for YouTube embeds */}
                            <div className="aspect-video bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="text-center z-10 p-6">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                                        <div className="icon-play w-8 h-8 text-white fill-white"></div>
                                    </div>
                                    <h3 className="font-bold text-lg">SQL Basics for Beginners</h3>
                                    <p className="text-sm text-gray-300">YouTube Tutorial • 15:20</p>
                                </div>
                            </div>
                            <div className="aspect-video bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="text-center z-10 p-6">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                                        <div className="icon-play w-8 h-8 text-white fill-white"></div>
                                    </div>
                                    <h3 className="font-bold text-lg">Data Cleaning with Pandas</h3>
                                    <p className="text-sm text-gray-300">YouTube Tutorial • 22:45</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="aspect-video bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] relative group overflow-hidden cursor-pointer">
                                    <img 
                                        src={`https://images.unsplash.com/photo-${item === 1 ? '1551288049-bebda4e38f71' : item === 2 ? '1460925895917-afdab827c52f' : '1504868584819-f8e8b4b6d7e3'}?auto=format&fit=crop&q=80&w=400`} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        alt="Gallery Item"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="icon-maximize text-white w-6 h-6"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
