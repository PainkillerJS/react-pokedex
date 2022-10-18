import { useQuery } from '@tanstack/react-query';

import { requestPokemon } from '@utils/api/requests/pokemon/id';

interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestPokemonQuery = ({ id }: UseRequestPokemonQueryParams) =>
  useQuery(['pokemons', id], () => requestPokemon({ params: { id } }));
