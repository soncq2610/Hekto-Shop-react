import * as React from "react";

export default function useDebounce(value: any) {
  const [debounceValue, setDebounceValue] = React.useState(value);
  console.log("debounce value: " + value);

  React.useEffect(() => {
    const handle = setTimeout(() => setDebounceValue(value), 500);
    return clearTimeout(handle);
  }, [value]);
  return debounceValue;
}
