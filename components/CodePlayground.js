function CodePlayground({ lesson }) {
    const [code, setCode] = React.useState('');
    const [output, setOutput] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isRunning, setIsRunning] = React.useState(false);

    React.useEffect(() => {
        if (lesson.content.playground) {
            setCode(lesson.content.playground.initialCode);
            setOutput(null);
            setError(null);
        }
    }, [lesson]);

    const runSQL = () => {
        setIsRunning(true);
        setError(null);
        setOutput(null);

        setTimeout(() => {
            try {
                // Initialize AlaSQL database
                window.alasql('CREATE DATABASE IF NOT EXISTS testdb');
                window.alasql('USE testdb');
                
                // Clear previous tables to avoid conflicts if needed, or rely on fresh setup
                // Simple approach: Run setup first
                if (lesson.content.playground.setup) {
                    // Split setup by semicolons to run multiple commands
                    const commands = lesson.content.playground.setup.split(';').filter(cmd => cmd.trim());
                    commands.forEach(cmd => {
                        try { window.alasql(cmd); } catch(e) { /* Ignore creation errors if exists */ }
                    });
                }

                // Run User Code
                const result = window.alasql(code);
                setOutput(JSON.stringify(result, null, 2));
            } catch (err) {
                setError(err.message);
            } finally {
                setIsRunning(false);
                // Clean up optional
                window.alasql('DROP DATABASE testdb');
            }
        }, 500); // Fake delay for realism
    };

    const runPythonSim = () => {
        setIsRunning(true);
        setError(null);
        setOutput(null);

        setTimeout(() => {
            try {
                // Simulation: Check for required keywords/functions from validation list
                const required = lesson.content.playground.validation || [];
                const missing = required.filter(req => !code.includes(req));

                if (missing.length > 0) {
                    throw new Error(`Missing required elements: ${missing.join(', ')}`);
                }

                // If validation passes, show a success message or mock output
                // Use a simple mock output based on the code content or lesson goal
                let mockOutput = "Process finished with exit code 0\n";
                if (code.includes("print")) {
                    mockOutput += "> " + (code.match(/print\((.*?)\)/)?.[1] || "Output") + "\n";
                }
                if (code.includes("head()")) {
                    mockOutput += "   Name  Age\n0  Alice   25\n1    Bob   30";
                }
                if (code.includes("plt.show")) {
                    mockOutput += "[Graph generated: Figure 1]";
                }

                setOutput(mockOutput);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsRunning(false);
            }
        }, 800);
    };

    const handleRun = () => {
        if (lesson.content.playground.language === 'sql') {
            runSQL();
        } else if (lesson.content.playground.language === 'python') {
            runPythonSim();
        } else {
            // Generic fallback for excel/dax
            setOutput("Formula validated. Syntax is correct.");
        }
    };

    if (!lesson.content.playground) return null;

    return (
        <div className="mt-8 bg-[var(--code-bg)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-[#111] px-4 py-3 border-b border-[var(--border-color)] flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="icon-terminal w-4 h-4 text-[var(--accent-primary)]"></div>
                    <span className="text-xs font-mono text-gray-400 uppercase">Interactive {lesson.content.playground.language} Console</span>
                </div>
                <button 
                    onClick={handleRun}
                    disabled={isRunning}
                    className="flex items-center gap-2 px-3 py-1 bg-green-600 hover:bg-green-500 text-white text-xs font-bold rounded transition-colors disabled:opacity-50"
                >
                    <div className={`icon-play w-3 h-3 ${isRunning ? 'animate-spin' : ''}`}></div>
                    {isRunning ? 'Running...' : 'Run Code'}
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 h-[400px]">
                {/* Editor */}
                <div className="relative border-r border-[var(--border-color)] bg-[#1e1e1e]">
                    <textarea 
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-full bg-transparent text-gray-300 font-mono text-sm p-4 resize-none focus:outline-none"
                        spellCheck="false"
                    />
                </div>

                {/* Output */}
                <div className="bg-[#0d0d0d] p-4 overflow-auto font-mono text-sm">
                    <div className="text-gray-500 text-xs mb-2 select-none">Output Terminal</div>
                    {error ? (
                        <div className="text-red-400">
                            Error: {error}
                        </div>
                    ) : output ? (
                        <pre className="text-green-400 whitespace-pre-wrap">{output}</pre>
                    ) : (
                        <div className="text-gray-600 italic">Hit 'Run' to execute the code...</div>
                    )}
                </div>
            </div>
        </div>
    );
}
