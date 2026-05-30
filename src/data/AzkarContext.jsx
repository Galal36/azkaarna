import { createContext, useContext, useState, useEffect } from 'react';

const AzkarContext = createContext({ categories: [], loading: true, error: null });

export function AzkarProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/azkar.json')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d) => {
        setCategories(d.categories || []);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return (
    <AzkarContext.Provider value={{ categories, loading, error }}>
      {children}
    </AzkarContext.Provider>
  );
}

export function useAzkar() {
  return useContext(AzkarContext);
}