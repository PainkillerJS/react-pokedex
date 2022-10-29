import { useQueries } from '@tanstack/react-query';

import { requestPokemon } from '@utils/api/requests';

interface UseRequestPokemonQueriesParams {
  offset: number;
  limit?: number;
}

const generateQueries = ({ offset, limit = 0 }: UseRequestPokemonQueriesParams) => {
  const queryArr = [];

  for (let i = offset; i < offset + limit; i++) {
    const pokemonId = i + 1;

    queryArr.push({
      queryKey: ['pokemon', pokemonId],
      queryFn: () => requestPokemon({ params: { id: pokemonId } })
    });
  }
  return queryArr;
};

export const useRequestPokemonQueries = ({
  params
}: RequestQueryParams<UseRequestPokemonQueriesParams>) =>
  useQueries({
    queries: generateQueries(params)
  });
