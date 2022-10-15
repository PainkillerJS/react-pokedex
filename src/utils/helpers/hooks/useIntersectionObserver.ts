import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

interface UseIntersectionObserverParams {
  isLoadingRequest: boolean;
  callBack: (...params: unknown[]) => unknown;
  lastElementRef: RefObject<HTMLDivElement>;
}

const useIntersectionObserver = ({
  isLoadingRequest,
  callBack,
  lastElementRef
}: UseIntersectionObserverParams) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isLoadingRequest) {
      return;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observeWork: IntersectionObserverCallback = (entries) => {
      if (entries?.[0].isIntersecting) {
        callBack?.();
      }
    };

    if (lastElementRef.current) {
      observerRef.current = new IntersectionObserver(observeWork);
      observerRef.current.observe(lastElementRef.current);
    }
  }, [isLoadingRequest]);
};

export default useIntersectionObserver;
