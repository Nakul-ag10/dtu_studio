import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface MonthInPicturesItem {
  id: string;
  month: string;
  year: number;
  pdfPath: string;
  thumbnail: string | null;
}

export interface PressConferenceItem {
  id: string;
  title: string;
  youtubeLink: string;
  date: string;
}

export interface PressCoverageItem {
  id: string;
  summary: string;
  title: string;
  source: string;
  date: string;
  link: string;
  thumbnail: string;
}

export interface PressReleaseItem {
  id: string;
  title: string;
  date: string;
  content: string;
  thumbnail: string;
}

interface DataContextType {
  monthInPictures: MonthInPicturesItem[];
  pressConferences: PressConferenceItem[];
  pressCoverages: PressCoverageItem[];
  pressReleases: PressReleaseItem[];
  isLoading: boolean;
  addMonthInPictures: (item: Omit<MonthInPicturesItem, 'id'>) => Promise<void>;
  updateMonthInPictures: (id: string, item: Partial<MonthInPicturesItem>) => Promise<void>;
  deleteMonthInPictures: (id: string) => Promise<void>;
  addPressConference: (item: Omit<PressConferenceItem, 'id'>) => Promise<void>;
  updatePressConference: (id: string, item: Partial<PressConferenceItem>) => Promise<void>;
  deletePressConference: (id: string) => Promise<void>;
  addPressCoverage: (item: Omit<PressCoverageItem, 'id'>) => Promise<void>;
  updatePressCoverage: (id: string, item: Partial<PressCoverageItem>) => Promise<void>;
  deletePressCoverage: (id: string) => Promise<void>;
  addPressRelease: (item: Omit<PressReleaseItem, 'id'>) => Promise<void>;
  updatePressRelease: (id: string, item: Partial<PressReleaseItem>) => Promise<void>;
  deletePressRelease: (id: string) => Promise<void>;
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

// Helper to get auth header
const getAuthHeaders = () => {
  const token = localStorage.getItem('auth_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

// Map MongoDB document to frontend shape (replace _id with id)
const mapDoc = (doc: any) => {
  const { _id, __v, createdAt, updatedAt, ...rest } = doc;
  return { id: _id, ...rest };
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [monthInPictures, setMonthInPictures] = useState<MonthInPicturesItem[]>([]);
  const [pressConferences, setPressConferences] = useState<PressConferenceItem[]>([]);
  const [pressCoverages, setPressCoverages] = useState<PressCoverageItem[]>([]);
  const [pressReleases, setPressReleases] = useState<PressReleaseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all data on mount
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [mipRes, pcRes, pcovRes, prRes] = await Promise.all([
          fetch('/api/month-in-pictures'),
          fetch('/api/press-conferences'),
          fetch('/api/press-coverages'),
          fetch('/api/press-releases'),
        ]);

        const [mipData, pcData, pcovData, prData] = await Promise.all([
          mipRes.json(),
          pcRes.json(),
          pcovRes.json(),
          prRes.json(),
        ]);

        setMonthInPictures(Array.isArray(mipData) ? mipData.map(mapDoc) : []);
        setPressConferences(Array.isArray(pcData) ? pcData.map(mapDoc) : []);
        setPressCoverages(Array.isArray(pcovData) ? pcovData.map(mapDoc) : []);
        setPressReleases(Array.isArray(prData) ? prData.map(mapDoc) : []);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, []);

  // --- Month in Pictures ---
  const addMonthInPictures = async (item: Omit<MonthInPicturesItem, 'id'>) => {
    const res = await fetch('/api/month-in-pictures', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(item),
    });
    if (res.ok) {
      const doc = await res.json();
      setMonthInPictures(prev => [...prev, mapDoc(doc)]);
    }
  };

  const updateMonthInPictures = async (id: string, item: Partial<MonthInPicturesItem>) => {
    const res = await fetch(`/api/month-in-pictures/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(item),
    });
    if (res.ok) {
      const doc = await res.json();
      setMonthInPictures(prev => prev.map(m => m.id === id ? mapDoc(doc) : m));
    }
  };

  const deleteMonthInPictures = async (id: string) => {
    const res = await fetch(`/api/month-in-pictures/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (res.ok) {
      setMonthInPictures(prev => prev.filter(m => m.id !== id));
    }
  };

  // --- Press Conferences ---
  const addPressConference = async (item: Omit<PressConferenceItem, 'id'>) => {
    const res = await fetch('/api/press-conferences', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(item),
    });
    if (res.ok) {
      const doc = await res.json();
      setPressConferences(prev => [...prev, mapDoc(doc)]);
    }
  };

  const updatePressConference = async (id: string, item: Partial<PressConferenceItem>) => {
    const res = await fetch(`/api/press-conferences/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(item),
    });
    if (res.ok) {
      const doc = await res.json();
      setPressConferences(prev => prev.map(p => p.id === id ? mapDoc(doc) : p));
    }
  };

  const deletePressConference = async (id: string) => {
    const res = await fetch(`/api/press-conferences/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (res.ok) {
      setPressConferences(prev => prev.filter(p => p.id !== id));
    }
  };

  // --- Press Coverages ---
  const addPressCoverage = async (item: Omit<PressCoverageItem, 'id'>) => {
    const res = await fetch('/api/press-coverages', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(item),
    });
    if (res.ok) {
      const doc = await res.json();
      setPressCoverages(prev => [...prev, mapDoc(doc)]);
    }
  };

  const updatePressCoverage = async (id: string, item: Partial<PressCoverageItem>) => {
    const res = await fetch(`/api/press-coverages/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(item),
    });
    if (res.ok) {
      const doc = await res.json();
      setPressCoverages(prev => prev.map(p => p.id === id ? mapDoc(doc) : p));
    }
  };

  const deletePressCoverage = async (id: string) => {
    const res = await fetch(`/api/press-coverages/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (res.ok) {
      setPressCoverages(prev => prev.filter(p => p.id !== id));
    }
  };

  // --- Press Releases ---
  const addPressRelease = async (item: Omit<PressReleaseItem, 'id'>) => {
    const res = await fetch('/api/press-releases', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(item),
    });
    if (res.ok) {
      const doc = await res.json();
      setPressReleases(prev => [...prev, mapDoc(doc)]);
    }
  };

  const updatePressRelease = async (id: string, item: Partial<PressReleaseItem>) => {
    const res = await fetch(`/api/press-releases/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(item),
    });
    if (res.ok) {
      const doc = await res.json();
      setPressReleases(prev => prev.map(p => p.id === id ? mapDoc(doc) : p));
    }
  };

  const deletePressRelease = async (id: string) => {
    const res = await fetch(`/api/press-releases/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    if (res.ok) {
      setPressReleases(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <DataContext.Provider value={{
      monthInPictures,
      pressConferences,
      pressCoverages,
      pressReleases,
      isLoading,
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