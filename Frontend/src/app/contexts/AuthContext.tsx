import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiPost, apiCall } from '../utils/api';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  signup: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<{ success: boolean; message: string }>;
  resetPassword: (token: string, password: string) => Promise<{ success: boolean; message: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await apiCall('/auth/me', {
          method: 'GET',
          includeAuth: true,
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          localStorage.removeItem('auth_token');
        }
      } catch {
        localStorage.removeItem('auth_token');
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await apiPost('/auth/login', { email, password }, false);
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('auth_token', data.token);
        setUser(data.user);
        return { success: true, message: 'Login successful.' };
      }

      return { success: false, message: data.message || 'Login failed.' };
    } catch {
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const res = await apiPost('/auth/signup', { email, password }, false);
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('auth_token', data.token);
        setUser(data.user);
        return { success: true, message: 'Account created successfully.' };
      }

      return { success: false, message: data.message || 'Signup failed.' };
    } catch {
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  const forgotPassword = async (email: string) => {
    try {
      const res = await apiPost('/auth/forgot-password', { email }, false);
      const data = await res.json();

      if (res.ok) {
        return { success: true, message: data.message };
      }

      return { success: false, message: data.message || 'Request failed.' };
    } catch {
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const resetPassword = async (token: string, password: string) => {
    try {
      const res = await apiPost('/auth/reset-password', { token, password }, false);
      const data = await res.json();

      if (res.ok) {
        return { success: true, message: data.message };
      }

      return { success: false, message: data.message || 'Reset failed.' };
    } catch {
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, signup, logout, forgotPassword, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};