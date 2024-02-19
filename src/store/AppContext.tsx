import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SavedUrl {
  original: string;
  shortened: string;
}

interface AppContextProps {
  savedUrls: SavedUrl[];
  addSavedUrl: (url: SavedUrl) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [savedUrls, setSavedUrls] = useState<SavedUrl[]>([]);

  useEffect(() => {
    // Retrieve previously saved URLs from localStorage on component mount
    const storedUrls = localStorage.getItem('savedUrls');
    if (storedUrls) {
      setSavedUrls(JSON.parse(storedUrls));
    }
  }, []);

  const addSavedUrl = (url: SavedUrl) => {
    setSavedUrls(prevSavedUrls => [...prevSavedUrls, url]);
    saveUrlsToLocalStorage([...savedUrls, url]);
  };

  const saveUrlsToLocalStorage = (urls: SavedUrl[]) => {
    localStorage.setItem('savedUrls', JSON.stringify(urls));
  };

  return (
    <AppContext.Provider value={{ savedUrls, addSavedUrl }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
