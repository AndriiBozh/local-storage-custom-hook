import { useState } from "react";

const useLocalStorage = (lokalStorageKey, initialValue) => {
  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem(lokalStorageKey);
    if (localStorageValue == null) {
      return initialValue;
    } else {
      return localStorageValue;
    }
  });

  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem(lokalStorageKey, e.target.value);
  };

  const localProps = {
    value: value,
    onChange: handleChange,
  };

  return localProps;
};

export default useLocalStorage;
