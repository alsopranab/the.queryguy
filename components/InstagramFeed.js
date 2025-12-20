function InstagramFeed() {
    // Mock data to simulate an Instagram feed
    const posts = [
        { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400', likes: 120, caption: 'Visualizing sales data 📊 #dataanalytics' },
        { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80&w=400', likes: 85, caption: 'Python tip of the day 🐍 #coding' },
        { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400', likes: 200, caption: 'My new desk setup! 💻 #setup' },
        { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400', likes: 150, caption: 'SQL Join types explained 💾 #sql' },
    ];

    return (
        <section id="instagram" className="py-20" data-name="InstagramFeed" data-file="components/InstagramFeed.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8">
                    <div>
                         <h2 className="section-title mb-2">Instagram</h2>
                         <p className="text-[var(--text-secondary)]">Latest data insights from <span className="text-[var(--accent-secondary)]">@the.queryguy</span></p>
                    </div>
                    <a href="https://instagram.com/the.queryguy" target="_blank" className="btn-primary py-2 px-4 text-sm flex items-center gap-2 mt-4 md:mt-0">
                        <div className="icon-instagram w-4 h-4"></div>
                        Follow @the.queryguy
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {posts.map((post) => (
                        <div key={post.id} className="group relative aspect-square bg-gray-800 rounded-lg overflow-hidden cursor-pointer">
                            <img src={post.url} alt={post.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                                <div className="flex items-center gap-1">
                                    <div className="icon-heart w-5 h-5 fill-white"></div>
                                    <span className="font-bold">{post.likes}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
