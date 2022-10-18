import { useQueries } from '@tanstack/react-query';

import { requestPokemon } from '@utils/api/requests/pokemon/id';

interface UseRequestPokemonQueriesParams {
  offset: number;
}

export const useRequestPokemonQueries = ({ offset }: UseRequestPokemonQueriesParams) =>
  useQueries({
    queries: Array.from({ length: offset }).map((_, index) => {
      const pokemonId = index + 1;

      return {
        queryKey: ['pokemon', pokemonId],
        queryFn: () => requestPokemon({ params: { id: pokemonId } })
      };
    })
  });
