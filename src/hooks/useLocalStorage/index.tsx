import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: string) {
  const saved: any = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;