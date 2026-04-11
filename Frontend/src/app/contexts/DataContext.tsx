import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface MonthInPicturesItem {
  id: number;
  month: string;
  year: number;
  thumbnail: string;
  imageCount: number;
  images: string[];
}

export interface PressConferenceItem {
  id: number;
  title: string;
  youtubeLink: string;
  date: string;
}

export interface PressCoverageItem {
  id: number;
  title: string;
  source: string;
  date: string;
  link: string;
}

export interface PressReleaseItem {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface DataContextType {
  monthInPictures: MonthInPicturesItem[];
  pressConferences: PressConferenceItem[];
  pressCoverages: PressCoverageItem[];
  pressReleases: PressReleaseItem[];
  addMonthInPictures: (item: Omit<MonthInPicturesItem, 'id'>) => void;
  updateMonthInPictures: (id: number, item: Partial<MonthInPicturesItem>) => void;
  deleteMonthInPictures: (id: number) => void;
  addPressConference: (item: Omit<PressConferenceItem, 'id'>) => void;
  updatePressConference: (id: number, item: Partial<PressConferenceItem>) => void;
  deletePressConference: (id: number) => void;
  addPressCoverage: (item: Omit<PressCoverageItem, 'id'>) => void;
  updatePressCoverage: (id: number, item: Partial<PressCoverageItem>) => void;
  deletePressCoverage: (id: number) => void;
  addPressRelease: (item: Omit<PressReleaseItem, 'id'>) => void;
  updatePressRelease: (id: number, item: Partial<PressReleaseItem>) => void;
  deletePressRelease: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

const defaultMonthInPictures: MonthInPicturesItem[] = [
  {
    id: 1,
    month: "March 2026",
    year: 2026,
    thumbnail: "img2501.png",
    imageCount: 45,
    images: ["img2501.png", "img2501.png", "img2501.png", "img2501.png", "img2501.png"],
  },
  {
    id: 2,
    month: "February 2026",
    year: 2026,
    thumbnail: "img2502.png",
    imageCount: 38,
    images: ["img2502.png", "img2502.png", "img2502.png", "img2502.png"],
  },
  {
    id: 3,
    month: "January 2026",
    year: 2026,
    thumbnail: "img2503.png",
    imageCount: 52,
    images: ["img2503.png", "img2503.png", "img2503.png", "img2503.png", "img2503.png", "img2503.png"],
  },
  {
    id: 4,
    month: "December 2025",
    year: 2025,
    thumbnail: "img2504.png",
    imageCount: 41,
    images: ["img2504.png", "img2504.png", "img2504.png"],
  },
  {
    id: 5,
    month: "November 2025",
    year: 2025,
    thumbnail: "img2505.png",
    imageCount: 35,
    images: ["img2505.png", "img2505.png"],
  },
];

const defaultPressConferences: PressConferenceItem[] = [
  {
    id: 1,
    title: "DTU Studio Annual Conference 2026",
    youtubeLink: "https://youtube.com/watch?v=example1",
    date: "2026-03-15",
  },
  {
    id: 2,
    title: "Technology Innovation Summit",
    youtubeLink: "https://youtube.com/watch?v=example2",
    date: "2026-02-20",
  },
];

const defaultPressCoverages: PressCoverageItem[] = [
  {
    id: 1,
    title: "DTU Studio Wins Innovation Award",
    source: "Tech News Daily",
    date: "2026-03-10",
    link: "https://example.com/article1",
  },
  {
    id: 2,
    title: "New Partnership Announced",
    source: "Business Weekly",
    date: "2026-02-25",
    link: "https://example.com/article2",
  },
];

const defaultPressReleases: PressReleaseItem[] = [
  {
    id: 1,
    title: "DTU Studio Launches New Initiative",
    date: "2026-03-01",
    content: "We are excited to announce...",
  },
  {
    id: 2,
    title: "Quarterly Results Released",
    date: "2026-01-15",
    content: "Our quarterly results show...",
  },
];

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [monthInPictures, setMonthInPictures] = useState<MonthInPicturesItem[]>([]);
  const [pressConferences, setPressConferences] = useState<PressConferenceItem[]>([]);
  const [pressCoverages, setPressCoverages] = useState<PressCoverageItem[]>([]);
  const [pressReleases, setPressReleases] = useState<PressReleaseItem[]>([]);

  useEffect(() => {
    const storedMonthInPictures = localStorage.getItem('monthInPictures');
    const storedPressConferences = localStorage.getItem('pressConferences');
    const storedPressCoverages = localStorage.getItem('pressCoverages');
    const storedPressReleases = localStorage.getItem('pressReleases');

    setMonthInPictures(storedMonthInPictures ? JSON.parse(storedMonthInPictures) : defaultMonthInPictures);
    setPressConferences(storedPressConferences ? JSON.parse(storedPressConferences) : defaultPressConferences);
    setPressCoverages(storedPressCoverages ? JSON.parse(storedPressCoverages) : defaultPressCoverages);
    setPressReleases(storedPressReleases ? JSON.parse(storedPressReleases) : defaultPressReleases);
  }, []);

  const saveToStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const addMonthInPictures = (item: Omit<MonthInPicturesItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    const updated = [...monthInPictures, newItem];
    setMonthInPictures(updated);
    saveToStorage('monthInPictures', updated);
  };

  const updateMonthInPictures = (id: number, item: Partial<MonthInPicturesItem>) => {
    const updated = monthInPictures.map(m => m.id === id ? { ...m, ...item } : m);
    setMonthInPictures(updated);
    saveToStorage('monthInPictures', updated);
  };

  const deleteMonthInPictures = (id: number) => {
    const updated = monthInPictures.filter(m => m.id !== id);
    setMonthInPictures(updated);
    saveToStorage('monthInPictures', updated);
  };

  const addPressConference = (item: Omit<PressConferenceItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    const updated = [...pressConferences, newItem];
    setPressConferences(updated);
    saveToStorage('pressConferences', updated);
  };

  const updatePressConference = (id: number, item: Partial<PressConferenceItem>) => {
    const updated = pressConferences.map(p => p.id === id ? { ...p, ...item } : p);
    setPressConferences(updated);
    saveToStorage('pressConferences', updated);
  };

  const deletePressConference = (id: number) => {
    const updated = pressConferences.filter(p => p.id !== id);
    setPressConferences(updated);
    saveToStorage('pressConferences', updated);
  };

  const addPressCoverage = (item: Omit<PressCoverageItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    const updated = [...pressCoverages, newItem];
    setPressCoverages(updated);
    saveToStorage('pressCoverages', updated);
  };

  const updatePressCoverage = (id: number, item: Partial<PressCoverageItem>) => {
    const updated = pressCoverages.map(p => p.id === id ? { ...p, ...item } : p);
    setPressCoverages(updated);
    saveToStorage('pressCoverages', updated);
  };

  const deletePressCoverage = (id: number) => {
    const updated = pressCoverages.filter(p => p.id !== id);
    setPressCoverages(updated);
    saveToStorage('pressCoverages', updated);
  };

  const addPressRelease = (item: Omit<PressReleaseItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() };
    const updated = [...pressReleases, newItem];
    setPressReleases(updated);
    saveToStorage('pressReleases', updated);
  };

  const updatePressRelease = (id: number, item: Partial<PressReleaseItem>) => {
    const updated = pressReleases.map(p => p.id === id ? { ...p, ...item } : p);
    setPressReleases(updated);
    saveToStorage('pressReleases', updated);
  };

  const deletePressRelease = (id: number) => {
    const updated = pressReleases.filter(p => p.id !== id);
    setPressReleases(updated);
    saveToStorage('pressReleases', updated);
  };

  return (
    <DataContext.Provider value={{
      monthInPictures,
      pressConferences,
      pressCoverages,
      pressReleases,
      addMonthInPictures,
      updateMonthInPictures,
      deleteMonthInPictures,
      addPressConference,
      updatePressConference,
      deletePressConference,
      addPressCoverage,
      updatePressCoverage,
      deletePressCoverage,
      addPressRelease,
      updatePressRelease,
      deletePressRelease,
    }}>
      {children}
    </DataContext.Provider>
  );
};