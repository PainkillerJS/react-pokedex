import { useEffect, useState } from 'react';

const useDebounce = <T>(value: T, delay: number): T => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    if (!value) {
      return setDebounceValue(value);
    }

    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debounceValue;
};

export default useDebounce;
