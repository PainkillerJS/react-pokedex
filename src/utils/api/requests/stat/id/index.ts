import type { AxiosRequestConfig } from 'axios';

import { api } from '@utils/api/instance';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestStat = ({ config, params }: RequestPokemonParams) =>
  api.get<PokemonStat>(`stat/${params.id}`, { ...config });
