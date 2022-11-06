interface RequestQueryParams<T = {}> {
  params: T;
  config?: Omit<
    import('@tanstack/react-query/src/types').UseQueryOptions<
      TQueryFnData,
      TError,
      TData,
      TQueryKey
    >,
    'queryKey' | 'queryFn' | 'initialData'
  > & { initialData?: () => undefined };
}
