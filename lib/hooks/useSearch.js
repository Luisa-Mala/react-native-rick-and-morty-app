import { useState, useMemo } from "react";

/**
 * Hook para filtrar una lista basada en una propiedad (por defecto 'name')
 * @param {Array} data - La lista completa original
 * @param {String} searchKey - La propiedad del objeto por la cual filtrar
 */
export const useSearch = (data, searchKey = "name") => {
  const [query, setQuery] = useState("");

  // useMemo optimiza el rendimiento: solo recalcula si cambia la query o la data
  const filteredData = useMemo(() => {
    if (!query.trim()) return data;

    return data.filter((item) =>
      item[searchKey]?.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, data, searchKey]);

  return {
    query,
    setQuery,
    filteredData,
  };
};
