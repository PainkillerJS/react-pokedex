import { useQuery } from '@tanstack/react-query';
import { requestStat } from '@utils/api/requests';

interface UseRequestPokemonQueryParams {
  id: number;
}

export const useRequestStatQuery = ({ id }: UseRequestPokemonQueryParams) =>
  useQuery(['stat', id], () => requestStat({ params: { id } }));
