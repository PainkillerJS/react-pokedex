import { useQuery } from '@tanstack/react-query';

import { requestPokemon } from '@utils/api/requests/pokemon';

interface UseRequestPokemonQuery {
  offset: number;
}

export const useRequestPokemonQuery = ({ offset }: UseRequestPokemonQuery) =>
  useQuery(['pokemon', offset], () => requestPokemon({ params: { limit: 20, offset } }));
