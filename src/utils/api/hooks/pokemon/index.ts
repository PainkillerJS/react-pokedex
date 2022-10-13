import { useInfiniteQuery } from '@tanstack/react-query';

import { requestPokemon } from '@utils/api/requests/pokemon';

export const useRequestPokemonInfiniteQuery = () =>
  useInfiniteQuery(
    ['pokemons'],
    ({ pageParam = 0 }) => requestPokemon({ params: { limit: 20, offset: pageParam } }),
    {
      getNextPageParam: (_, allPokemons) => allPokemons.length * 20
    }
  );
