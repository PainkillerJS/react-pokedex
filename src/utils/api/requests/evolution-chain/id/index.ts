import type { AxiosRequestConfig } from 'axios';

import { api } from '@utils/api/instance';

interface RequestEvolutionChainParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestEvolutionChain = ({ config, params }: RequestEvolutionChainParams) =>
  api.get<Pokemon>(`pokemon-form/${params.id}`, { ...config });
