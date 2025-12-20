function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real scenario, this would integrate with Framer forms or an email service
        alert("Thanks for reaching out! I'll get back to you soon.");
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden" data-name="Contact" data-file="components/Contact.js">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
                    <p className="text-[var(--text-secondary)]">
                        Have a project in mind, a question about data, or just want to connect?
                    </p>
                </div>

                <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Name</label>
                                <input type="text" className="w-full bg-[var(--bg-body)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:border-[var(--accent-primary)] focus:outline-none transition-colors" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
                                <input type="email" className="w-full bg-[var(--bg-body)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:border-[var(--accent-primary)] focus:outline-none transition-colors" placeholder="your@email.com" required />
                            </div>
                        </div>
                        
                        <div>
                             <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Inquiry Type</label>
                             <select className="w-full bg-[var(--bg-body)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:border-[var(--accent-primary)] focus:outline-none transition-colors">
                                <option>Job Opportunity</option>
                                <option>Collaboration</option>
                                <option>Content Request</option>
                                <option>Other</option>
                             </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Message</label>
                            <textarea rows="4" className="w-full bg-[var(--bg-body)] border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:border-[var(--accent-primary)] focus:outline-none transition-colors" placeholder="Tell me about your project..." required></textarea>
                        </div>

                        <button type="submit" className="w-full btn-primary font-bold text-lg">
                            Send Message
                        </button>
                    </form>
                    
                    <div className="mt-8 pt-8 border-t border-[var(--border-color)] text-center">
                        <p className="text-[var(--text-secondary)] mb-4">Or reach me directly at</p>
                        <a href="mailto:career.pranab@gmail.com" className="text-xl font-bold text-[var(--accent-primary)] hover:underline">
                            career.pranab@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
