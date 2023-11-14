import { useEffect, useRef } from "react";

type Callback<T> = (...args: any) => T;
type Dependencies = any[];

export function useCustomMemo<T>(cb: Callback<T>, dependencies: Dependencies) {
  const memoRef = useRef<{ value: T; dependencies: Dependencies }>();

  const compareDependencies = (
    cachedDeps: Dependencies,
    newDeps: Dependencies
  ) => {
    if (!cachedDeps) return false;
    if (cachedDeps.length == 0) return true;
    for (let i = 0; i < cachedDeps.length; i++) {
      if (cachedDeps[i] !== newDeps[i]) return false;
    }
    return true;
  };

  if (
    !memoRef.current ||
    !compareDependencies(memoRef.current.dependencies, dependencies)
  ) {
    memoRef.current = {
      value: cb(),
      dependencies,
    };
  }

  useEffect(() => {
    return () => {
      memoRef.current = undefined;
    };
  }, []);

  return memoRef.current?.value;
}

export default useCustomMemo;
