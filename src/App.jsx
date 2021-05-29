import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className="App bg-gray-900 text-center min-h-screen flex items-center justify-center">
      <header className="App-header">
        <img src={logo} className="App-logo animate-pulse w-64 inline-block" alt="logo" />
        <p className="text-white opacity-90 text-3xl">
          Snowpack + React + TailwindCSS
        </p>
        <p class="text-5xl text-yellow-200 font-black mt-6">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p className="mt-6 text-yellow-100 text-xl">
          Page has been open for <code>{count}</code> seconds.
        </p>
      </header>
    </div>
  );
}

export default App;
