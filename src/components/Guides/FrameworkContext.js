import React, { createContext, useState, useContext, useEffect } from 'react';

const FrameworkContext = createContext();

export function FrameworkProvider({ children, initialFramework = 'npm' }) {
  const [selectedFramework, setSelectedFramework] = useState(initialFramework);

  useEffect(() => {
    const savedFramework = localStorage.getItem('selectedFramework');
    if (savedFramework) {
      setSelectedFramework(savedFramework);
    }
  }, []);

  const updateSelectedFramework = (framework) => {
    setSelectedFramework(framework);
    localStorage.setItem('selectedFramework', framework);
  };

  return (
    <FrameworkContext.Provider value={{ selectedFramework, setSelectedFramework: updateSelectedFramework }}>
      {children}
    </FrameworkContext.Provider>
  );
}

export function useFramework() {
  const context = useContext(FrameworkContext);
  if (context === undefined) {
    return { selectedFramework: 'npm', setSelectedFramework: () => { } };
  }
  return context;
}
