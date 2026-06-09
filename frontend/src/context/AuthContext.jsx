import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../utils/axiosConfig';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Restore session on mount/refresh
  const refreshUser = async () => {
    try {
      setLoading(true);
      const res = await api.get('/auth/me');
      if (res.data?.success && res.data?.data?.user) {
        const currentUser = res.data.data.user;
        setUser(currentUser);
        setRole(currentUser.role);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setRole(null);
        setIsAuthenticated(false);
      }
    } catch (err) {
      setUser(null);
      setRole(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = async (credentials, isAdmin = false) => {
    setLoading(true);
    try {
      const endpoint = isAdmin ? '/auth/login-admin' : '/auth/login-user';
      // Step 1: Call backend login endpoint
      const loginRes = await api.post(endpoint, credentials);
      
      if (!loginRes.data?.success) {
        throw new Error(loginRes.data?.message || 'Login failed');
      }

      // Step 2: Fetch profile to confirm and populate details
      const meRes = await api.get('/auth/me');
      if (meRes.data?.success && meRes.data?.data?.user) {
        const currentUser = meRes.data.data.user;
        setUser(currentUser);
        setRole(currentUser.role);
        setIsAuthenticated(true);
        return currentUser;
      } else {
        throw new Error('Failed to retrieve user profile after login.');
      }
    } catch (err) {
      setUser(null);
      setRole(null);
      setIsAuthenticated(false);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await api.post('/auth/logout');
    } catch (err) {
      console.error('Logout request failed', err);
    } finally {
      setUser(null);
      setRole(null);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        loading,
        login,
        logout,
        refreshUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
