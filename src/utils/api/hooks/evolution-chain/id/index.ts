import { useQuery } from '@tanstack/react-query';

import { requestEvolutionChain } from '@utils/api/requests';

interface UseRequestEvolutionChainQueryParams {
  id: number;
  options?: Parameters<typeof useQuery>[2];
}

export const useRequestEvolutionChainQuery = ({
  id,
  options = {}
}: UseRequestEvolutionChainQueryParams) =>
  useQuery(['evolution-chain', id], () => requestEvolutionChain({ params: { id } }), options);
