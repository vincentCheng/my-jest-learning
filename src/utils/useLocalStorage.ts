import React, { useState, useEffect } from "react";

const useLocalStorage = (
  key: string,
  defaultValue?: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
