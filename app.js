// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">System Malfunction</h1>
            <p className="text-gray-400 mb-4">Critical error detected in the dashboard module.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
            >
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [theme, setTheme] = React.useState('dark');

  // Load theme from local storage or system preference
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Update DOM and local storage when theme changes
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  try {
    return (
      <div className="min-h-screen flex flex-col" data-name="app" data-file="app.js">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
            <Hero />
            <DashboardResume />
            <GitHubPortfolio />
            <Projects />
            <ProblemSolving />
            <InstagramFeed />
            <Blog />
            <MediaLibrary />
            <Certifications />
            <Contact />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
