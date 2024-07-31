import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  username: string;
  jobTitle: string;
  isModalOpen: boolean;
  setUsername: (username: string) => void;
  setJobTitle: (jobTitle: string) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <AppContext.Provider value={{ username, jobTitle, setUsername, setJobTitle, isModalOpen, setIsModalOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
